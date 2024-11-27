import React, { useState } from 'react';
import * as Tone from 'tone';

const PlayerView = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Player View</h2>
      <button
        onClick={() => {
          Tone.start();
          playSound();
          setIsPlaying(!isPlaying);
        }}
        style={{ padding: '10px 20px' }}
      >
        {isPlaying ? "Stop Sound" : "Play Sound"}
      </button>
    </div>
  );
};

export default PlayerView;
