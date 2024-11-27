import * as Tone from 'tone';
import { setupAudioVisualizer } from './audioManager';

export const createButton = (label, onClick) => {
    const button = document.createElement('button');
    button.textContent = label;
    button.addEventListener('click', onClick);
    return button;
  };
  
  export const updatePlayerList = (players, container) => {
    container.innerHTML = '';
    for (const id in players) {
      const playerDiv = document.createElement('div');
      playerDiv.textContent = players[id].name;
      container.appendChild(playerDiv);
    }
  };

  export const setupHostControls = () => {
    const StartTransport = createButton("Start Transport", () => Tone.Transport.start());
    const StopTransport = createButton("Stop Transport", () => Tone.Transport.stop());
  
    document.getElementById("overlay").style.display = "none";
    document.getElementById("chord-buttons").style.display = "flex";
  
    const globalControls = document.getElementById("globalControl");
    globalControls.style.display = "flex";
    globalControls.appendChild(StartTransport);
    globalControls.appendChild(StopTransport);
  
    document.getElementById("hostSamplePad").style.display = "flex";
  };
  export const setupPlayerSamplePad = (name, playerRef, oscillator) => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("samplePad").style.display = "flex";
    Tone.start();
  
    playerRef.update({
      hasClickedPlayerButton: true,
    });
  
    const playerDisp = document.getElementById("PlayerDispContainer");
    playerDisp.style.display = "flex";
  
    const playerDisplay = document.createElement('div');
    playerDisplay.setAttribute('id', 'playerDisplay');
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
  
    const canvas = document.getElementById("canvas"); // Ensure canvas exists in the DOM
    setupAudioVisualizer(oscillator, canvas);
  };



  
  export const setupChords = (chords, players) => {
    document.querySelectorAll('#chord-buttons button').forEach((button) => {
      button.addEventListener("click", () => {
        const chordName = button.innerHTML;
        const selectedChord = chords.find((chord) => chord.name === chordName);
  
        if (selectedChord) {
          let i = 0;
          for (const playerId in players) {
            const freq = selectedChord.notes[i];
            const playerRef = db.ref(`players/${playerId}`);
            playerRef.child('freq').set(freq);
            i = (i + 1) % selectedChord.notes.length;
          }
        }
      });
    });
  };
  
  
  
  