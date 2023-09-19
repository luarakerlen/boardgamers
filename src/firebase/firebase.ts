// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDyy6V74dpby7yrveGLcS0Ei7aRBZhskw",
  authDomain: "boardgamers-es.firebaseapp.com",
  projectId: "boardgamers-es",
  storageBucket: "boardgamers-es.appspot.com",
  messagingSenderId: "178438039571",
  appId: "1:178438039571:web:92d089eb156341a4bab7e6",
  measurementId: "G-W13BQ1WY1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
