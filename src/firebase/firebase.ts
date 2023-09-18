// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBTbJEkGVtee4yYjLEhEY4-WnwtAbakQwU',
	authDomain: 'boardgamers-do-es.firebaseapp.com',
	projectId: 'boardgamers-do-es',
	storageBucket: 'boardgamers-do-es.appspot.com',
	messagingSenderId: '211647394209',
	appId: '1:211647394209:web:c30f302682597e2da6dbe0',
	measurementId: 'G-BCFXP1XGMP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
