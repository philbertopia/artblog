// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "dumart-de935.firebaseapp.com",
  projectId: "dumart-de935",
  storageBucket: "dumart-de935.appspot.com",
  messagingSenderId: "315201443898",
  appId: "1:315201443898:web:b4cf45ddf7ae1a49ba7d03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);