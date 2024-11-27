import firebase from 'firebase/compat/app'; 
import 'firebase/compat/database';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDYf0BlW0pNhi1e8RYjxMhAov6ngDGJakE",
  authDomain: "node-drone-c94f1.firebaseapp.com",
  projectId: "node-drone-c94f1",
  storageBucket: "node-drone-c94f1.appspot.com",
  messagingSenderId: "741839883014",
  appId: "1:741839883014:web:09aec33b0f7b002f822c87"
})



const auth = firebase.auth();
const db = firebase.database();

// Firebase utility functions
export const signInAnonymously = async () => {
  try {
    await auth.signInAnonymously();
  } catch (error) {
    console.error("Error signing in anonymously:", error.code, error.message);
  }
};

export { auth, db };
