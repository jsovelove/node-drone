import React, { useEffect, useState, useContext } from 'react';
import * as Tone from 'tone';
import { FirebaseContext } from '../context/FirebaseContext';
import { AuthContext } from '../context/AuthContext'; // Access authenticated user
import { ref, onValue } from 'firebase/database';

const PlayerView = () => {
  const { database } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [oscillatorData, setOscillatorData] = useState(null);
  const [oscillator, setOscillator] = useState(null);

  useEffect(() => {
    if (!user) return;

    const playerRef = ref(database, `players/${user.uid}/oscillator`);

    // Listen for updates to the oscillator data in Firebase
    const unsubscribe = onValue(playerRef, (snapshot) => {
      const data = snapshot.val();
      setOscillatorData(data);
    });

    return () => unsubscribe(); // Cleanup listener
  }, [user, database]);

  useEffect(() => {
    if (!oscillatorData || !oscillatorData.frequency || !oscillatorData.waveform) return;

    // Create or update the oscillator with the new parameters
    const newOscillator = new Tone.Oscillator(oscillatorData.frequency, oscillatorData.waveform).toDestination();

    setOscillator((prevOscillator) => {
      if (prevOscillator) prevOscillator.dispose(); // Clean up the previous oscillator
      return newOscillator;
    });

    // Play or stop the oscillator based on isPlaying
    if (oscillatorData.isPlaying) {
      newOscillator.start();
    } else {
      newOscillator.stop();
    }

    // Cleanup oscillator on unmount
    return () => {
      newOscillator.stop();
      newOscillator.dispose();
    };
  }, [oscillatorData]);

  return (
    <div>
      <h2>Player View</h2>
      {oscillatorData ? (
        <div>
          <p>Oscillator Type: {oscillatorData.waveform}</p>
          <p>Frequency: {oscillatorData.frequency} Hz</p>
          <p>Status: {oscillatorData.isPlaying ? 'Playing' : 'Stopped'}</p>
        </div>
      ) : (
        <p>No Oscillator Connected</p>
      )}
    </div>
  );
};

export default PlayerView;
