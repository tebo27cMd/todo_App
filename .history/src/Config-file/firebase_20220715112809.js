// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBbzH83M5PefbMEVTzzEaCFwCTKSc0UJYQ",
  authDomain: "task-manager-app-659ca.firebaseapp.com",
  projectId: "task-manager-app-659ca",
  storageBucket: "task-manager-app-659ca.appspot.com",
  messagingSenderId: "285230526566",
  appId: "1:285230526566:web:871eafcdb9201a0559bda7",
  measurementId: "G-33FE5LNV1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export  {auth, db};