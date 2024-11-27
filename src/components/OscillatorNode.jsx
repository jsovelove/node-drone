import React from 'react';
import { Handle, Position } from 'reactflow';
import { ref, update } from 'firebase/database';


const OscillatorNode = ({ data, id }) => {
  // Function to get connected player IDs
  const getConnectedPlayerIds = () => {
    return data.edges
      .filter((edge) => edge.source === id)
      .map((edge) => edge.target);
  };

  const handlePlayToggle = () => {
    const connectedPlayerIds = getConnectedPlayerIds();

    if (connectedPlayerIds.length === 0) {
      console.warn('No players connected to this oscillator.');
      return;
    }

    const isPlaying = !data.isPlaying;

    // Update the play state in Firebase for all connected players
    connectedPlayerIds.forEach((playerId) => {
      const playerRef = ref(data.database, `players/${playerId}/oscillator`);
      update(playerRef, { isPlaying });
    });

    // Update the play state locally
    data.updateNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? {
              ...node,
              data: {
                ...node.data,
                isPlaying,
              },
            }
          : node
      )
    );
  };

  return (
    <div
      style={{
        padding: '10px',
        border: '2px solid #ff6600',
        borderRadius: '5px',
        backgroundColor: '#ffe6cc',
        textAlign: 'center',
        width: '150px',
      }}
    >
      <h4>Oscillator</h4>
      <div>
        <p>Freq: {data.frequency} Hz</p>
        <p>Waveform: {data.waveform}</p>
      </div>
      <button onClick={handlePlayToggle}>
        {data.isPlaying ? 'Stop' : 'Play'}
      </button>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#ff6600' }}
      />
    </div>
  );
};

export default OscillatorNode;

