import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { uploadSample } from '../utils/firebaseStorage';

const Toolbar = ({ onAddOscillator, onAddSample, onAddSampleTrigger }) => {
  const { storage } = useContext(FirebaseContext); // Access Firebase Storage
  const [activePage, setActivePage] = useState('tools'); // Track the current page
  const [samples, setSamples] = useState([]); // Store uploaded samples
  const [uploading, setUploading] = useState(false); // Track upload status

  const handleDrop = async (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (!file) return;

    setUploading(true);
    try {
      // Upload the sample to Firebase Storage
      const url = await uploadSample(file, storage);
      const newSample = { name: file.name, url };
      setSamples((prevSamples) => [...prevSamples, newSample]); // Add sample to local state
    } catch (error) {
      console.error('Error uploading sample:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy'; // Show copy cursor
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Main Toolbar */}
      <div
        style={{
          width: '60px',
          backgroundColor: '#ddd',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <button
          onClick={() => setActivePage('tools')}
          style={{
            marginBottom: '10px',
            padding: '5px',
            backgroundColor: activePage === 'tools' ? '#bbb' : '#fff',
          }}
        >
          Tools
        </button>
        <button
          onClick={() => setActivePage('samples')}
          style={{
            padding: '5px',
            backgroundColor: activePage === 'samples' ? '#bbb' : '#fff',
          }}
        >
          Samples
        </button>
      </div>

      {/* Sub Toolbar */}
      <div
        style={{
          width: '200px',
          backgroundColor: '#f4f4f4',
          padding: '10px',
          boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {activePage === 'tools' && (
          <>
            <h3>Tools</h3>
            <button onClick={onAddOscillator} style={{ padding: '10px' }}>
              Add Oscillator
            </button>
            <button onClick={onAddSample} style={{ padding: '10px' }}>
              Add Sample
            </button>
            <button onClick={onAddSampleTrigger} style={{ padding: '10px' }}>
              Add Sample Trigger
            </button>
          </>
        )}

        {activePage === 'samples' && (
          <>
            <h3>Samples</h3>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              style={{
                height: '100px',
                border: '2px dashed gray',
                borderRadius: '5px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              Drag & Drop Samples Here
            </div>
            {uploading && <p>Uploading...</p>}
            <ul>
              {samples.map((sample, index) => (
                <li
                  key={index}
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('sampleData', JSON.stringify(sample));
                  }}
                  style={{ cursor: 'grab', padding: '5px', background: '#e4e4e4', margin: '5px 0' }}
                >
                  {sample.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
