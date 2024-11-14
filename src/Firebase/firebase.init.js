import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAsU9xvcGP3SWUIUyI28XYj3x3HzvHMBOU",
  authDomain: "the-dragon-news-41b00.firebaseapp.com",
  projectId: "the-dragon-news-41b00",
  storageBucket: "the-dragon-news-41b00.firebasestorage.app",
  messagingSenderId: "1082719313960",
  appId: "1:1082719313960:web:84643632b6ddb26231551d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);