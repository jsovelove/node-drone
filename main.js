import './style.css'
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getAuth, deleteUser } from "firebase/auth";

import * as Tone from 'tone'


//firebase config
firebase.initializeApp({
  apiKey: "AIzaSyDYf0BlW0pNhi1e8RYjxMhAov6ngDGJakE",
  authDomain: "node-drone-c94f1.firebaseapp.com",
  projectId: "node-drone-c94f1",
  storageBucket: "node-drone-c94f1.appspot.com",
  messagingSenderId: "741839883014",
  appId: "1:741839883014:web:09aec33b0f7b002f822c87"
})


let octave = 1;
const notes = [
  { name: "C", frequency: 523.25 / 2 * octave },
  { name: "C#", frequency: 554.37 / 2 * octave },
  { name: "D", frequency: 587.33 / 2 * octave },
  { name: "D#", frequency: 622.25 / 2 * octave },
  { name: "E", frequency: 659.25 / 2 * octave },
  { name: "F", frequency: 698.46 / 2 * octave },
  { name: "F#", frequency: 739.99 / 2 * octave },
  { name: "G", frequency: 783.99 / 2 * octave },
  { name: "G#", frequency: 830.61 / 2 * octave },
  { name: "A", frequency: 880.00 / 2 * octave },
  { name: "A#", frequency: 932.33 / 2 * octave },
  { name: "B", frequency: 987.77 / 2 * octave }
];

//random name generator
const adjectives = ['fierce', 'gentle', 'elegant', 'funky', 'quirky'];
const animals = ['elephant', 'giraffe', 'zebra', 'lion', 'tiger'];
const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
const randomName = `${randomAdjective} ${randomAnimal}`;

//random sound generator
const pitches = [1, 6, 12];
const randomIndex = Math.floor(Math.random() * pitches.length);
const randomValue = pitches[randomIndex];

//samples to be played at random
const playerUrls = [
  'Samples/c_hit_soft.wav',
  'Samples/RU_IA_low_piano_C.wav',
  'Samples/Modular_one_shot_chirp.wav',
  'Samples/SC_UZ_perc_one_shot_analog_dolphin_zap_wet.wav',
  '/Samples/RU_PMGP_HATS_LEAF.wav',
  'Samples/chord_vortex_cmin.mp3',
  'Samples/RU_FD_fx_alien_life_.wav'
];

const randPlayers = [];
playerUrls.forEach((url) => {
  const player = new Tone.Player(url).toDestination();
  randPlayers.push(player);
});

function playRandomPlayer() {
  const RandPlayer = randPlayers[Math.floor(Math.random() * randPlayers.length)];
  RandPlayer.start();
}

//Host sample bank
const cmDrone = new Tone.Player("Samples/RU_GA_guitar_soundscape_drone_pluto_cm.wav").toDestination();
const CmDrone1 = new Tone.Player("Samples/RU_GA_80_guitar_cherry_plum_triplets_C.wav").toDestination();
const cmSample = new Tone.Player("Samples/C_chunky.wav").toDestination();
const gtrTexture = new Tone.Player("Samples/guitar_txtr_cm.wav").toDestination();
const cmAmbient = new Tone.Player("Samples/moog_mist_cm.wav").toDestination();
cmDrone.loop = true;
CmDrone1.loop = true;
cmSample.loop = true;
gtrTexture.loop = true;
cmAmbient.loop = true;

//realtime database setup
const db = firebase.database();
const oscillator = new Tone.FatOscillator().toDestination();

let name;
let playerId;
let playerRef;
let playerSamplesRef;

firebase.auth().onAuthStateChanged((user) => {

  console.log(user)
  if (user) {

    playerId = user.uid;

    playerRef = firebase.database().ref(`players/${playerId}`);
    playerSamplesRef = firebase.database().ref(`players/${playerId}`).child('samples');
    playerRef.set({
      id: playerId,
      name: randomName,
      type: 'sawtooth',
      freq: 261.625,
      vol: -12,
      isPlaying: false,
      hasClickedPlayerButton: false,
      samples: {
        cmDroneisPlaying: false,
        eDrone1isPlaying: false,
        cmSampleisPlaying: false,
        gtrTextureisPlaying: false,
        cmAmbientisPlaying: false
      }

    });

    playerRef.on("value", (snapshot) => {
      const player = snapshot.val();
      name = player.name;
      console.log('player updated:', player);
      if (player.isPlaying) {
        oscillator.type = player.type;
        // oscillator.frequency.value = player.freq;
        oscillator.frequency.rampTo(player.freq, 1);
        oscillator.start();
      } else {
        oscillator.stop();
      }
      oscillator.volume.value = player.vol;
      

      if (player.transportSampleIsPlaying) {
        playRandomPlayer();
      }
      

    })

    playerSamplesRef.on("value", (snapshot) => {
      const player = snapshot.val();
      name = player.name;
      if (player.cmDroneisPlaying) {
        cmDrone.start();
      }
      else {
        cmDrone.stop();
      }

      if (player.eDrone1isPlaying) {
        CmDrone1.start();
      }
      else {
        CmDrone1.stop();
      }

      if (player.cmSampleisPlaying) {
        cmSample.start();
      }
      else {
        cmSample.stop();
      }
      if (player.gtrTextureisPlaying) {
        gtrTexture.start();
      }
      else {
        gtrTexture.stop();
      }
      if (player.cmAmbientisPlaying) {
        cmAmbient.start();
      }
      else {
        cmAmbient.stop();
      }

    })

    playerRef.onDisconnect().remove();

  } 

})

firebase.auth().signInAnonymously().catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode, errorMessage);
});

//players array stores each player's data and is updated when a new player joins or leaves
//used to update the player info on the host's screen
let players = [];
const playerListDiv = document.getElementById('playerList');
const visualizerDiv = document.getElementById('visualizer-container');

document.getElementById("hostStartBtn").addEventListener("click", () => {
  const StartTransport = document.createElement('button');
  const StopTransport = document.createElement('button');

  StartTransport.innerHTML = "Start Transport";
  StopTransport.innerHTML = "Stop Transport";
  StartTransport.addEventListener('click', () => {
    Tone.Transport.start();
  })
  StopTransport.addEventListener('click', () => {
    Tone.Transport.stop();
  })
  
  document.getElementById("overlay").style.display = "none";
  document.getElementById("backimg").style.display = "none";
  document.getElementById("chord-buttons").style.display = "flex";
  let globalControls = document.getElementById("globalControl")
  globalControls.style.display = "flex";
  globalControls.appendChild(StartTransport);
  globalControls.appendChild(StopTransport);
  document.getElementById("hostSamplePad").style.display = "flex";
  setupChords();
  visualizerDiv.style.display = "none";
  playerListDiv.style.display = "block";
  Tone.start();
  renderPlayerList();
  globalControl();

  
});

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("backimg").style.display = "none";
  document.getElementById("samplePad").style.display = "flex";
  Tone.start();

  playerRef.update({
    hasClickedPlayerButton: true
  });
  
  const playerDisp = document.getElementById("PlayerDispContainer");
  playerDisp.style.display = "flex";

  const playerDisplay = document.createElement('div');
  playerDisplay.setAttribute('id', 'playerDisplay')
  playerDisplay.textContent = name;
  document.getElementById('name').appendChild(playerDisplay);

  const volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.min = "-70";
    volumeSlider.max = "0";
    volumeSlider.value = -12;
    volumeSlider.addEventListener("change", () => {
      oscillator.volume.value = volumeSlider.value;


    });
    playerDisp.appendChild(volumeSlider);


  setupAudioVisualizer();

});

//creates a interface for each player
function renderPlayerList() {
  playerListDiv.innerHTML = '';

  for (const playerId in players) {
    const player = players[playerId];
    if (!player.hasClickedPlayerButton) {
      continue;
    }
    const playerDiv = document.createElement('div');
    
    playerDiv.classList.add('player');
    playerDiv.setAttribute('id', 'playerDiv')
    const playerNameDiv = document.createElement('div');
    playerNameDiv.textContent = player.name;
    playerNameDiv.style.fontSize = "30px";
    playerNameDiv.classList.add('playerName');
    playerDiv.appendChild(playerNameDiv);

    const playerTypeDiv = document.createElement('div');
    playerTypeDiv.textContent = `Type: ${player.type}`;
    playerTypeDiv.classList.add('playerType');
    playerDiv.appendChild(playerTypeDiv);

    const playerFreqDiv = document.createElement('div');
    playerFreqDiv.textContent = `Freq: ${player.freq}`;
    playerFreqDiv.classList.add('playerFreq');
    playerDiv.appendChild(playerFreqDiv);


    const playerControlsDiv = document.createElement('div');
    playerControlsDiv.classList.add('playerControls');

    const playButton = document.createElement('button');
    playButton.textContent = 'Play';
    playButton.addEventListener('click', () => {
      const playerRef = firebase.database().ref(`players/${playerId}`);
      playerRef.child('isPlaying').set(true);
    });
    playerControlsDiv.appendChild(playButton);

    const pauseButton = document.createElement('button');
    pauseButton.textContent = 'Pause';
    pauseButton.addEventListener('click', () => {
      const playerRef = firebase.database().ref(`players/${playerId}`);
      playerRef.child('isPlaying').set(false);
    });
    playerControlsDiv.appendChild(pauseButton);

    const pitchContainer = document.createElement('div');
    notes.forEach((note) => {
      const button = document.createElement('button');
      button.className = 'key';
      button.textContent = note.name;
      button.addEventListener('click', () => {
        const playerRef = firebase.database().ref(`players/${playerId}`);
        playerRef.child('freq').set(note.frequency);
      });
      pitchContainer.appendChild(button);
    });

    playerDiv.appendChild(pitchContainer);
    
    const volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.min = "-70";
    volumeSlider.max = "0";
    volumeSlider.value = -12;
    volumeSlider.value = player.vol;
    volumeSlider.addEventListener("change", () => {
      const playerRef = firebase.database().ref(`players/${playerId}`);
      playerRef.child('vol').set(volumeSlider.value);

    });
    playerDiv.appendChild(volumeSlider);

    playerDiv.appendChild(playerControlsDiv);

    playerListDiv.appendChild(playerDiv);
  }
}

const allPlayersRef = firebase.database().ref(`players`);
allPlayersRef.on("value", (snapshot) => {
  players = snapshot.val();
  console.log('player list updated:', players);
  renderPlayerList();
});

function setupAudioVisualizer() {
  const analyser = new Tone.Analyser("waveform", 256);
  const canvas = document.getElementById('canvas');
  const canvasCtx = canvas.getContext("2d");
  oscillator.connect(analyser);

  function draw() {
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
  }

  draw();
}


const start = document.getElementById('start');
start.addEventListener ('click', () => {
  oscillator.start();
});

const stop = document.getElementById('stop');
stop.addEventListener ('click', () => {
  oscillator.stop();
});


const chords = [  
  {    
    name: "C Major",
    notes: [261.63, 329.63, 392.00]
  },
  {
    name: "G Major",
    notes: [392.00, 493.88, 587.33]
  },
  {
    name: "A Minor",
    notes: [440.00, 523.25, 659.25]
  },
  {
    name: "D Major",
    notes: [293.66, 369.99, 440.00]
  },
  {
    name: "Eb Major",
    notes: [311.13, 392.00, 466.16]
    },
  {
    name: "E Major",
    notes: [329.63, 415.30, 493.88]
  },
  {
    name: "F Major",
    notes: [349.23, 440.00, 523.25]
  },
  {
    name: "Bb Major",
    notes: [466.16, 587.33, 698.46]
  },
  {
    name: "G Minor",
    notes: [392.00, 466.16, 587.33]
  },
  {
    name: "C Minor",
    notes: [261.63, 311.13, 392.00]
  },
  {
    name: "F Minor",
    notes: [349.23, 369.99, 440.00]
  }
];


function setupChords() {
  // loop through all chord buttons and add event listener
  document.querySelectorAll('#chord-buttons button').forEach(function (button) {
    button.addEventListener("click", function () {
      // get the chord name from the button's data attribute
      const chordName = button.innerHTML;
    //   // find the selected chord in the chords array
      const selectedChord = chords.find(function (chord) {
        return chord.name === chordName;
      });
      console.log(selectedChord)

      let i=0;

      if (selectedChord) {
        // loop through all players and update their frequency to the notes in the chord
        for (const playerId in players) {
          const freq = selectedChord.notes[i];
          console.log(freq);
          const playerRef = firebase.database().ref(`players/${playerId}`);
          playerRef.child('freq').set(freq);
          if(i <= selectedChord.notes.length){
            i++;
          }else{
            i=0;
          }
        }
      }
    });
  });
}

function globalControl(){
  document.getElementById("playAll").addEventListener("click", () => {
    for (const playerId in players) {
      const playerRef = firebase.database().ref(`players/${playerId}`);
      playerRef.child('isPlaying').set(true);
    }

  });

  document.getElementById("stopAll").addEventListener("click", () => {
    for (const playerId in players) {
      const playerRef = firebase.database().ref(`players/${playerId}`);
      playerRef.child('isPlaying').set(false);
    }
  });

  document.getElementById("cmDrone").addEventListener('change', function() {
    if (this.checked) {
      for (const playerId in players) {
        const playerRef = firebase.database().ref(`players/${playerId}/samples`);
        playerRef.child('cmDroneisPlaying').set(true);
      }
    } else {
      for (const playerId in players) {
        const playerRef = firebase.database().ref(`players/${playerId}/samples`);
        playerRef.child('cmDroneisPlaying').set(false);
      }
    }
  });

  document.getElementById("eDrone1").addEventListener('change', function() {
    if (this.checked) {
      for (const playerId in players) {
        const playerRef = firebase.database().ref(`players/${playerId}/samples`);
        playerRef.child('eDrone1isPlaying').set(true);
      }
    } else {
      for (const playerId in players) {
        const playerRef = firebase.database().ref(`players/${playerId}/samples`);
        playerRef.child('eDrone1isPlaying').set(false);
      }
    }
  });

  document.getElementById("cmSample").addEventListener('change', function() {
    if (this.checked) {
      for (const playerId in players) {
        const playerRef = firebase.database().ref(`players/${playerId}/samples`);
        playerRef.child('cmSampleisPlaying').set(true);
      }
    } else {
      for (const playerId in players) {
        const playerRef = firebase.database().ref(`players/${playerId}/samples`);
        playerRef.child('cmSampleisPlaying').set(false);
      }
    }
  });
  document.getElementById("gtrTexture").addEventListener('change', function() {
    if (this.checked) {
      for (const playerId in players) {
        const playerRef = firebase.database().ref(`players/${playerId}/samples`);
        playerRef.child('gtrTextureisPlaying').set(true);
      }
    } else {
      for (const playerId in players) {
        const playerRef = firebase.database().ref(`players/${playerId}/samples`);
        playerRef.child('gtrTextureisPlaying').set(false);
      }
    }
  });
  document.getElementById("cmAmbient").addEventListener('change', function() {
    if (this.checked) {
      for (const playerId in players) {
        const playerRef = firebase.database().ref(`players/${playerId}/samples`);
        playerRef.child('cmAmbientisPlaying').set(true);
      }
    } else {
      for (const playerId in players) {
        const playerRef = firebase.database().ref(`players/${playerId}/samples`);
        playerRef.child('cmAmbientisPlaying').set(false);
      }
    }
  });

}



//user sample pad samples
const sheep = new Tone.Player("/Samples/SheepBaa_S08AN.310.wav").toDestination();
const elephant = new Tone.Player("Samples/elephantCry.wav").toDestination();
const spk1 = new Tone.Player("Samples/SPLC-4185_FX_Loop_Radio_Noise_Handheld_Voice_Distorted.wav").toDestination();
const plath = new Tone.Player("Samples/plath.wav").toDestination();
const gtr = new Tone.Player("Samples/RU_FD_one_shot_guitar_stones_Cmin.wav").toDestination();
const gtr2 = new Tone.Player("Samples/cm_gtr_2.wav")
const alien = new Tone.Player("Samples/RU_FD_fx_one_shot_sweep_dusty.wav").toDestination();
const blaster = new Tone.Player("Samples/RU_FD_fx_space_gun.wav").toDestination();
const cough = new Tone.Player("Samples/RU_FD_fx_vox_cough.wav").toDestination();

const vol = new Tone.Volume(2).toDestination();
plath.connect(vol);


//User sample pad listeners
document.getElementById("elephant").addEventListener("click", () => {
  elephant.start();
});
document.getElementById("sheep").addEventListener("click", () => {
  sheep.start();
});
document.getElementById("time").addEventListener("click", () => {
  spk1.start();
});
document.getElementById("plath").addEventListener("click", () => {
  plath.start();
});
document.getElementById("gtr").addEventListener("click", () => {
  gtr.start();
});
document.getElementById("alien").addEventListener("click", () => {
  alien.start();
});
document.getElementById("blaster").addEventListener("click", () => {
  blaster.start();
});
document.getElementById("cough").addEventListener("click", () => {
  cough.start();
});
document.getElementById("gtr2").addEventListener("click", () => {
  gtr2.start();
});


Tone.Transport.bpm.value = 60;

let currentPlayerIndex = 0;

Tone.Transport.scheduleRepeat((time) =>{
  const currentPlayerKey = Object.keys(players)[currentPlayerIndex];
  const currentPlayer = players[currentPlayerKey];
  
  firebase.database().ref('players/' + currentPlayerKey).update({ transportSampleIsPlaying: true });
  
  Tone.Transport.scheduleOnce((innerTime) => {
    firebase.database().ref('players/' + currentPlayerKey).update({ transportSampleIsPlaying: false });
  }, "+8n");
  
  currentPlayerIndex = (currentPlayerIndex + 1) % Object.keys(players).length;
  
}, "4n");


  







