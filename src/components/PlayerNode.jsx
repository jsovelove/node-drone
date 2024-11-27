import React from 'react';
import { Handle, Position } from 'reactflow';

const PlayerNode = ({ data }) => {
  return (
    <div
      style={{
        padding: '10px',
        border: '2px solid #00bfff',
        borderRadius: '5px',
        backgroundColor: '#e6f7ff',
        textAlign: 'center',
        width: '150px',
      }}
    >
      <h4>Player</h4>
      <p>{data.label}</p>
      {data.oscillator ? (
        <div>
          <p>Connected Oscillator:</p>
          <p>Freq: {data.oscillator.frequency}</p>
          <p>Wave: {data.oscillator.waveform}</p>
        </div>
      ) : (
        <p>No Oscillator Connected</p>
      )}
      <Handle
        type="target" // This is an input handle
        position={Position.Top}
        style={{ background: '#00bfff' }}
      />
    </div>
  );
};

export default PlayerNode;
