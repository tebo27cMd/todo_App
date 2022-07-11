// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB44VhlyOGLme-EDCUVNbbB2UbazBO3qIY",
  authDomain: "todo-433b6.firebaseapp.com",
  projectId: "todo-433b6",
  storageBucket: "todo-433b6.appspot.com",
  messagingSenderId: "23893463738",
  appId: "1:23893463738:web:7b7d1fefeddfc1abce6883",
  measurementId: "G-QQNBP66G32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);