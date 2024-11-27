import React from 'react';
import { Handle, Position } from 'reactflow';

const OscillatorNode = ({ data }) => {
  const updateParameter = (param, value) => {
    data[param] = value; // Update parameter locally
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
        <label>Freq:</label>
        <input
          type="number"
          defaultValue={data.frequency}
          onChange={(e) => updateParameter('frequency', parseFloat(e.target.value))}
          style={{ width: '60px' }}
        />
      </div>
      <div>
        <label>Wave:</label>
        <select
          defaultValue={data.waveform}
          onChange={(e) => updateParameter('waveform', e.target.value)}
        >
          <option value="sine">Sine</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
          <option value="sawtooth">Sawtooth</option>
        </select>
      </div>
      <Handle
        type="source" // This is an output handle
        position={Position.Bottom}
        style={{ background: '#ff6600' }}
      />
    </div>
  );
};

export default OscillatorNode;
