// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCmrZxQJrGQ_pPkjIGqQsW2HyOeVoF6Al0",
  authDomain: "react-todo-app-5e1a2.firebaseapp.com",
  projectId: "react-todo-app-5e1a2",
  storageBucket: "react-todo-app-5e1a2.appspot.com",
  messagingSenderId: "822718901500",
  appId: "1:822718901500:web:ab200a7d7aa020a87a7b79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export auth and firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
