import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { ref, set, onDisconnect } from 'firebase/database';
import { auth, database } from '../firebase'; // Ensure auth and database are exported from your Firebase config

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Sign in anonymously
    signInAnonymously(auth)
      .then(() => console.log('Signed in anonymously'))
      .catch((error) => console.error('Error signing in:', error));

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // Add user to Firebase Realtime Database
        const playerRef = ref(database, `players/${currentUser.uid}`);
        set(playerRef, {
          id: currentUser.uid,
          name: `Player-${Math.floor(Math.random() * 1000)}`,
          vol: -12,
        //   isPlaying: false,
        //   hasClickedPlayerButton: false,
          samples: {
            cmDroneisPlaying: false,
            eDrone1isPlaying: false,
            cmSampleisPlaying: false,
            gtrTextureisPlaying: false,
            cmAmbientisPlaying: false,
          },
        });

        // Remove user data on disconnect
        onDisconnect(playerRef).remove();
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
