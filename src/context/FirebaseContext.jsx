import React, { createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // For Realtime Database
import { getAuth } from 'firebase/auth'; // For Authentication (optional)
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDYf0BlW0pNhi1e8RYjxMhAov6ngDGJakE",
  authDomain: "node-drone-c94f1.firebaseapp.com",
  projectId: "node-drone-c94f1",
  storageBucket: "node-drone-c94f1.appspot.com",
  messagingSenderId: "741839883014",
  appId: "1:741839883014:web:09aec33b0f7b002f822c87"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Export the database instance
export const auth = getAuth(app); // Export the auth instance (optional)
export const storage = getStorage(app);
// Initialize Storage

export const FirebaseContext = createContext();


export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ database, auth, storage}}>
      {children}
    </FirebaseContext.Provider>
  );
};
