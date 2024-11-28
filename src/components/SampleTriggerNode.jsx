import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { ref, onValue, update } from 'firebase/database';

const SampleTriggerNode = ({ data, id }) => {
  const [bankNumber, setBankNumber] = useState(1); // Default bank number
  const [players, setPlayers] = useState({}); // Store player data

  // Fetch players from Firebase
  useEffect(() => {
    const playersRef = ref(data.database, 'players');
    const unsubscribe = onValue(playersRef, (snapshot) => {
      const playersData = snapshot.val() || {};
      setPlayers(playersData);
    });

    return () => unsubscribe();
  }, [data.database]);

  const handleTrigger = () => {
    // Iterate over all players and trigger the sample if connected
    Object.keys(players).forEach((playerId) => {
      const playerData = players[playerId];
      const playerBank = playerData.sampleBank || [];
      const sampleToPlay = playerBank.find((sample) => sample.id === bankNumber);

      if (sampleToPlay) {
        const playerRef = ref(data.database, `players/${playerId}/trigger`);
        update(playerRef, {
          sample: sampleToPlay,
          timestamp: Date.now(),
        });
      }
    });
  };

  return (
    <div
      style={{
        padding: '10px',
        border: '2px solid #ff9933',
        borderRadius: '5px',
        backgroundColor: '#fff7e6',
        textAlign: 'center',
        width: '150px',
      }}
    >
      <h4>Sample Trigger</h4>
      <label>
        Bank:
        <input
          type="number"
          value={bankNumber}
          onChange={(e) => setBankNumber(Number(e.target.value))}
          style={{ width: '50px', marginLeft: '10px' }}
        />
      </label>
      <button onClick={handleTrigger} style={{ marginTop: '10px', padding: '5px' }}>
        Trigger
      </button>
    </div>
  );
};

export default SampleTriggerNode;
