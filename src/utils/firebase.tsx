// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4V4d8YN6F-NqYwXs0KZguRw0er42cflo",
  authDomain: "netflixgpt-ce284.firebaseapp.com",
  projectId: "netflixgpt-ce284",
  storageBucket: "netflixgpt-ce284.firebasestorage.app",
  messagingSenderId: "535897185482",
  appId: "1:535897185482:web:507db804b93a16ec782833",
  measurementId: "G-J91CG33LX0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
