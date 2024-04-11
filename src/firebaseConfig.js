// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANTPVYMVrla_xg10TNqhiaD6gxJXXblH8",
  authDomain: "rollax-83709.firebaseapp.com",
  projectId: "rollax-83709",
  storageBucket: "rollax-83709.appspot.com",
  messagingSenderId: "160775709984",
  appId: "1:160775709984:web:2f0d6d7e075ef5c0caa345",
  measurementId: "G-M2441PETS6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
