// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQTXxr6enztPi_0xDJb8qYdK4r8fGScn8",
    authDomain: "book-store-36.firebaseapp.com",
    projectId: "book-store-36",
    storageBucket: "book-store-36.appspot.com",
    messagingSenderId: "135134139116",
    appId: "1:135134139116:web:678785de535a7ee9d90bc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;