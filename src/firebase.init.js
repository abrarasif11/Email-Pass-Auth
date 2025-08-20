// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA6bCcDRSd7vKshImt7hpSMLEorC6Odxw",
  authDomain: "email-pass-auth-d793c.firebaseapp.com",
  projectId: "email-pass-auth-d793c",
  storageBucket: "email-pass-auth-d793c.firebasestorage.app",
  messagingSenderId: "40884814418",
  appId: "1:40884814418:web:9d29230d474b8f9857558b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);