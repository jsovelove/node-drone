import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

const SampleNode = ({ data }) => {
  const [sample, setSample] = useState(data.sample || '');
  const [isLooping, setIsLooping] = useState(false);

  const handleSampleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSample(url);
      data.sample = url; // Update the sample in the node's data
    }
  };

  return (
    <div
      style={{
        padding: '10px',
        border: '2px solid #66cc33',
        borderRadius: '5px',
        backgroundColor: '#eaffd0',
        textAlign: 'center',
        width: '200px',
      }}
    >
      <h4>Sample Node</h4>
      <input type="file" onChange={handleSampleUpload} accept="audio/*" />
      {sample && <p>Sample Loaded: {sample.split('/').pop()}</p>}
      <label>
        <input
          type="checkbox"
          checked={isLooping}
          onChange={(e) => {
            setIsLooping(e.target.checked);
            data.isLooping = e.target.checked; // Update looping state
          }}
        />
        Loop Sample
      </label>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#66cc33' }}
      />
    </div>
  );
};

export default SampleNode;
