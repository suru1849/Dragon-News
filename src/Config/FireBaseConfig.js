// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrleLpXxOV0ZmY79JH7vmPWOcO5xx1I4Q",
  authDomain: "dragon-news-668d8.firebaseapp.com",
  projectId: "dragon-news-668d8",
  storageBucket: "dragon-news-668d8.appspot.com",
  messagingSenderId: "459959390533",
  appId: "1:459959390533:web:baf86c75c2679d8748ee2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
