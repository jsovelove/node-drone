import React, { useEffect, useState, useContext } from 'react';
import * as Tone from 'tone';
import { FirebaseContext } from '../context/FirebaseContext';
import { AuthContext } from '../context/AuthContext'; // Access authenticated user
import { ref, onValue } from 'firebase/database';

const PlayerView = () => {
  const { database } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [sampleBank, setSampleBank] = useState([]); // Store samples
  const [sampler, setSampler] = useState(null);

  useEffect(() => {
    if (!user) return;

    const playerRef = ref(database, `players/${user.uid}/sampleBank`);

    // Listen for updates to the sample bank in Firebase
    const unsubscribe = onValue(playerRef, (snapshot) => {
      const data = snapshot.val() || [];
      setSampleBank(data);
    });

    return () => unsubscribe(); // Cleanup listener
  }, [user, database]);

  useEffect(() => {
    // Initialize the Tone.js sampler
    const newSampler = new Tone.Sampler().toDestination();
    setSampler(newSampler);

    // Cleanup sampler on unmount
    return () => {
      newSampler.dispose();
    };
  }, []);

  useEffect(() => {
    if (!sampler || sampleBank.length === 0) return;

    // Load samples into the sampler
    sampleBank.forEach((sample, index) => {
      sampler.add(index.toString(), sample.url); // Use index as key
    });
  }, [sampler, sampleBank]);

  useEffect(() => {
    if (!user) return;

    const triggerRef = ref(database, `players/${user.uid}/trigger`);

    // Listen for trigger events
    const unsubscribe = onValue(triggerRef, (snapshot) => {
      const triggerData = snapshot.val();
      if (triggerData && triggerData.sampleId !== undefined) {
        // Play the triggered sample
        sampler.triggerAttack(triggerData.sampleId.toString());
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, [sampler, user, database]);

  return (
    <div>
      <h2>Player View</h2>
      <div>
        <h3>Sample Bank</h3>
        <ul>
          {sampleBank.map((sample, index) => (
            <li key={index}>
              {index}: {sample.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerView;
