import React, { useEffect, useState, useContext } from 'react';
import { Handle, Position } from 'reactflow';
import { FirebaseContext } from '../context/FirebaseContext';
import { ref, onValue, update } from 'firebase/database';

const PlayerNode = ({ data }) => {
  const { database } = useContext(FirebaseContext); // Access Firebase
  const [sampleBank, setSampleBank] = useState([]); // Local state for sample bank

  // Firebase reference for this player's sample bank
  const sampleBankRef = ref(database, `players/${data.id}/sampleBank`);

  // Load existing sample bank from Firebase on mount
  useEffect(() => {
    const unsubscribe = onValue(sampleBankRef, (snapshot) => {
      const samples = snapshot.val() || [];
      // Only update state if the sample bank has actually changed
      setSampleBank((prevSamples) => {
        const isSame =
          samples.length === prevSamples.length &&
          samples.every((sample, index) => sample.url === prevSamples[index]?.url);
        return isSame ? prevSamples : samples;
      });
    });

    return () => unsubscribe(); // Cleanup listener
  }, [sampleBankRef]);

  // Handle dropping a sample into the sample bank
  const handleDrop = (event) => {
    event.preventDefault();
    const sampleData = JSON.parse(event.dataTransfer.getData('sampleData')); // Parse the dropped sample data
    const newSample = { id: sampleBank.length + 1, ...sampleData }; // Assign an ID to the new sample

    // Update local state
    const updatedSampleBank = [...sampleBank, newSample];
    setSampleBank(updatedSampleBank);

    // Sync with Firebase
    update(sampleBankRef, updatedSampleBank);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

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
      onDrop={handleDrop} // Enable drop functionality
      onDragOver={handleDragOver} // Enable drag over functionality
    >
      <h4>Player</h4>
      <p>{data.label}</p>

      {/* Display connected oscillator info */}
      {data.oscillator ? (
        <div>
          <p>Connected Oscillator:</p>
          <p>Freq: {data.oscillator.frequency}</p>
          <p>Wave: {data.oscillator.waveform}</p>
        </div>
      ) : (
        <p>No Oscillator Connected</p>
      )}

      {/* Sample Bank */}
      <div
        style={{
          marginTop: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '5px',
          backgroundColor: '#fff',
          textAlign: 'left',
          maxHeight: '100px',
          overflowY: 'auto',
        }}
      >
        <h5>Sample Bank</h5>
        <ul style={{ padding: 0, listStyleType: 'none' }}>
          {sampleBank.map((sample) => (
            <li key={sample.id} style={{ marginBottom: '5px', fontSize: '12px' }}>
              {sample.id}: {sample.name}
            </li>
          ))}
        </ul>
        {sampleBank.length === 0 && <p style={{ fontSize: '12px', color: '#999' }}>No samples added</p>}
      </div>

      <Handle
        type="target" // This is an input handle
        position={Position.Top}
        style={{ background: '#00bfff' }}
      />
    </div>
  );
};

export default PlayerNode;
