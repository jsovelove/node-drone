// Import the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // For Realtime Database
import { getAuth } from 'firebase/auth'; // For Authentication (optional)

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYf0BlW0pNhi1e8RYjxMhAov6ngDGJakE",
    authDomain: "node-drone-c94f1.firebaseapp.com",
    projectId: "node-drone-c94f1",
    storageBucket: "node-drone-c94f1.appspot.com",
    messagingSenderId: "741839883014",
    appId: "1:741839883014:web:09aec33b0f7b002f822c87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Export the database instance
export const auth = getAuth(app); // Export the auth instance (optional)
