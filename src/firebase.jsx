// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQetZMGZnWbrsLMU2Se8Pt4ZMvHjQOlyw",
  authDomain: "podcast-app-808d0.firebaseapp.com",
  projectId: "podcast-app-808d0",
  storageBucket: "podcast-app-808d0.appspot.com",
  messagingSenderId: "168318981887",
  appId: "1:168318981887:web:dae181d66e4b4aa70b5eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth  = getAuth(app);