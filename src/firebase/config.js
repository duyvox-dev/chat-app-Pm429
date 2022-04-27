// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDCmjlYdjVT9cf64PZh6PnGfEUiuFfzc-0",
    authDomain: "chat-app-26f8d.firebaseapp.com",
    projectId: "chat-app-26f8d",
    storageBucket: "chat-app-26f8d.appspot.com",
    messagingSenderId: "9574491123",
    appId: "1:9574491123:web:878c18440f24873a63a886",
    measurementId: "G-JS3SEHS4B1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const fbProvider = new FacebookAuthProvider();

fbProvider.setCustomParameters({
    display: "popup",
});
