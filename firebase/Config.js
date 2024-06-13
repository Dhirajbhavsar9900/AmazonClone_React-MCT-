// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyMU9OwhNXIyKRwiUgxZ8IOEF3FRqb-Bw",
  authDomain: "project-6c6e0.firebaseapp.com",
  projectId: "project-6c6e0",
  storageBucket: "project-6c6e0.appspot.com",
  messagingSenderId: "828899831432",
  appId: "1:828899831432:web:2d9ad0cb61587317ed793d",
  measurementId: "G-ELMB056CV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);