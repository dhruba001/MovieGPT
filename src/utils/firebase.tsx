// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtLawSIamaTuq8z4aHgDsh79LSQqlVDgg",
  authDomain: "moviegpt-de581.firebaseapp.com",
  projectId: "moviegpt-de581",
  storageBucket: "moviegpt-de581.firebasestorage.app",
  messagingSenderId: "647676350684",
  appId: "1:647676350684:web:e1e144d86c0fa18574e419",
  measurementId: "G-JN8EG8DWNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
