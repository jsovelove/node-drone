import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';
import { FirebaseContext } from '../context/FirebaseContext';
import { ref, onValue } from 'firebase/database';

const PlayerView = () => {
  const { database } = React.useContext(FirebaseContext);
  const [sampleData, setSampleData] = useState(null);
  const [playerId, setPlayerId] = useState('player-id'); // Replace with actual player ID logic
  const playerRef = ref(database, `players/${playerId}/sample`);

  useEffect(() => {
    const unsubscribe = onValue(playerRef, (snapshot) => {
      setSampleData(snapshot.val());
    });

    return () => unsubscribe();
  }, [playerRef]);

  useEffect(() => {
    if (sampleData?.sample) {
      const player = new Tone.Player(sampleData.sample).toDestination();
      player.loop = sampleData.isLooping;
      player.start();
      return () => player.stop();
    }
  }, [sampleData]);

  return <div>Player View: Listening for sample updates...</div>;
};

export default PlayerView;
