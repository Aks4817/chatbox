// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWrSDfNeTZXO3wWKNM2x3LqbPApdZ__mw",
  authDomain: "chatapp-eb070.firebaseapp.com",
  projectId: "chatapp-eb070",
  storageBucket: "chatapp-eb070.appspot.com",
  messagingSenderId: "488817105645",
  appId: "1:488817105645:web:f531575099295eb4a9cae4",
  measurementId: "G-9MYFB257V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db= getFirestore();
