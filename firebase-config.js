// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz-lhtB_fUdWi8TTR_CSeqmXNa8Mw7JM8",
  authDomain: "wellnesssession-8e0c9.firebaseapp.com",
  projectId: "wellnesssession-8e0c9",
  storageBucket: "wellnesssession-8e0c9.firebasestorage.app",
  messagingSenderId: "1086505868867",
  appId: "1:1086505868867:web:ebb46017e744a67db57ef6",
  measurementId: "G-SMTEQ4JB5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
