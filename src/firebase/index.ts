import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

//npm install firebase

// HERE, PASTE YOUR FIREBASE CONFIG THAT YOU GET AFTER SDK SETUP AND CONFIGURATION

const firebaseConfig = {
  apiKey: "AIzaSyBRRpk7Gs7oETBnX8eJSk6Z9oP8vuhm3mU",
  authDomain: "loginreference.firebaseapp.com",
  projectId: "loginreference",
  storageBucket: "loginreference.appspot.com",
  messagingSenderId: "84215002194",
  appId: "1:84215002194:web:66f497d506b618bc549b8b",
  measurementId: "G-665WCC11S6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
