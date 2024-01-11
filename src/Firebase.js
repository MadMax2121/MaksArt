// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getQueriesForElement } from "@testing-library/react";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwJx-ucvahY5P9OfJMv7csom_gZ8tvjAM",
  authDomain: "maksart2121.firebaseapp.com",
  projectId: "maksart2121",
  storageBucket: "maksart2121.appspot.com",
  messagingSenderId: "578736321339",
  appId: "1:578736321339:web:1e40717ae4a54c4013fd1e",
  measurementId: "G-75D4H58CZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db};