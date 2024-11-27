import { db } from './firebaseManager';
import { createOscillator } from './audioManager';
import { updateSamplePlayback } from './audioManager';

class Player {
  constructor(id, name, type = 'sawtooth', freq = 261.625, vol = -12) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.freq = freq;
    this.vol = vol;
    this.isPlaying = false;
    this.samples = {
      cmDroneisPlaying: false,
      eDrone1isPlaying: false,
      cmSampleisPlaying: false,
      gtrTextureisPlaying: false,
      cmAmbientisPlaying: false,
    };
    this.oscillator = createOscillator(this.type, this.freq, this.vol);
  }

  static async createPlayer(id, name) {
    const playerRef = db.ref(`players/${id}`);
    const newPlayer = new Player(id, name);
    await playerRef.set({
      id: newPlayer.id,
      name: newPlayer.name,
      type: newPlayer.type,
      freq: newPlayer.freq,
      vol: newPlayer.vol,
      isPlaying: newPlayer.isPlaying,
      samples: newPlayer.samples,
    });
    return newPlayer;
  }

  syncWithFirebase() {
    const playerRef = db.ref(`players/${this.id}`);
    const samplesRef = playerRef.child('samples');
    samplesRef.on("value", (snapshot) => {
      const sampleData = snapshot.val();
      Object.entries(sampleData).forEach(([sampleName, isPlaying]) => {
        updateSamplePlayback(sampleName, isPlaying);
      });
    });
    // Listen for player updates
    playerRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      this.name = data.name;
      this.isPlaying = data.isPlaying;
      this.type = data.type;
      this.freq = data.freq;
      this.vol = data.vol;

      if (this.isPlaying) {
        this.oscillator.type = this.type;
        this.oscillator.frequency.rampTo(this.freq, 1);
        this.oscillator.start();
      } else {
        this.oscillator.stop();
      }
      this.oscillator.volume.value = this.vol;
    });

    // Listen for sample updates
    samplesRef.on("value", (snapshot) => {
      const sampleData = snapshot.val();
      Object.entries(sampleData).forEach(([sampleName, isPlaying]) => {
        updateSamplePlayback(sampleName, isPlaying);
      });
    });

    // Handle disconnection cleanup
    playerRef.onDisconnect().remove();
  }
}

export default Player;
