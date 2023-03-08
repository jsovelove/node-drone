import './style.css'
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getAuth, deleteUser } from "firebase/auth";

import * as Tone from 'tone'


let name;

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

const adjectives = ['fierce', 'gentle', 'elegant', 'funky', 'quirky'];
const animals = ['elephant', 'giraffe', 'zebra', 'lion', 'tiger'];

const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
const randomName = `${randomAdjective} ${randomAnimal}`;

const db = firebase.database();
const oscillator = new Tone.FatOscillator().toDestination();

let playerId;
let playerRef;

firebase.auth().onAuthStateChanged((user) => {

  console.log(user)
  if (user) {

    playerId = user.uid;

    playerRef = firebase.database().ref(`players/${playerId}`);
    
    playerRef.set({
      id: playerId,
      name: randomName,
      type: 'sawtooth',
      freq: 261.625,
      vol: -12,
      isPlaying: false,
      hasClickedPlayerButton: false

    });

    playerRef.on("value", (snapshot) => {
      const player = snapshot.val();
      name = player.name;
      console.log('player updated:', player);
      if (player.isPlaying) {
        oscillator.type = player.type;
        oscillator.frequency.value = player.freq;
        oscillator.start();
      } else {
        oscillator.stop();
      }
      oscillator.volume.value = player.vol;
    })

    playerRef.onDisconnect().remove();

  } else {
  }
})

firebase.auth().signInAnonymously().catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode, errorMessage);
});


let players = [];
const playerListDiv = document.getElementById('playerList');
const visualizerDiv = document.getElementById('visualizer-container');

document.getElementById("hostStartBtn").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("backimg").style.display = "none";
  document.getElementById("chord-buttons").style.display = "flex";
  setupChords();
  visualizerDiv.style.display = "none";
  playerListDiv.style.display = "block";
  Tone.start();
  renderPlayerList();

  
});

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("backimg").style.display = "none";

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


  







