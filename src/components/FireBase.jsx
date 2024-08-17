// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnWaa6UBWxy45d2wpIbTwux7bZJfQjD1o",
  authDomain: "nyam-do.firebaseapp.com",
  projectId: "nyam-do",
  storageBucket: "nyam-do.appspot.com",
  messagingSenderId: "248901061127",
  appId: "1:248901061127:web:eba6e784559da34e3f38a2",
  measurementId: "G-DN18N8C905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, collection, addDoc };
