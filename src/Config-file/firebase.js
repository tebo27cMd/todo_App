// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB44VhlyOGLme-EDCUVNbbB2UbazBO3qIY",
  authDomain:  "todo-433b6.firebaseapp.com",
  projectId:"todo-433b6",
  storageBucket: "todo-433b6.appspot.com",
  messagingSenderId: "23893463738",
  appId:"1:23893463738:web:7b7d1fefeddfc1abce6883",
  measurementId: "G-QQNBP66G32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export  {auth, db};