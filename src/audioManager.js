import * as Tone from 'tone';

export const createOscillator = (type = 'sine', freq = 440, volume = -12) => {
  const oscillator = new Tone.FatOscillator(freq, type).toDestination();
  oscillator.volume.value = volume;
  return oscillator;
};

export const playSample = (url) => {
  const player = new Tone.Player(url).toDestination();
  player.start();
  return player;
};
const samples = {
  cmDrone: new Tone.Player("Samples/RU_GA_guitar_soundscape_drone_pluto_cm.wav").toDestination(),
  CmDrone1: new Tone.Player("Samples/RU_GA_80_guitar_cherry_plum_triplets_C.wav").toDestination(),
  cmSample: new Tone.Player("Samples/C_chunky.wav").toDestination(),
  gtrTexture: new Tone.Player("Samples/guitar_txtr_cm.wav").toDestination(),
  cmAmbient: new Tone.Player("Samples/moog_mist_cm.wav").toDestination()
}
export const updateSamplePlayback = (sampleName, isPlaying) => {
  if (samples[sampleName]) {
    isPlaying ? samples[sampleName].start() : samples[sampleName].stop();
  }
};

export const setupAudioVisualizer = (oscillator) => {
  
  const analyser = new Tone.Analyser("waveform", 256);
  const canvas = document.getElementById('canvas');
  const canvasCtx = canvas.getContext("2d");
  oscillator.connect(analyser);

  const draw = () => {
    requestAnimationFrame(draw);
    canvasCtx.strokeStyle = "#FFFFFF";
    const buffer = analyser.getValue();
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    canvasCtx.beginPath();

    const sliceWidth = canvas.width / buffer.length;
    let x = 0;

    for (const val of buffer) {
      const y = (val + 1) / 2 * canvas.height;
      if (x === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }
      x += sliceWidth;
    }

    canvasCtx.stroke();
  };

  draw();
};