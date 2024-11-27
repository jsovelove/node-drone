import React, { createContext } from 'react';
import { database, auth } from '../firebase';

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ database, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};
