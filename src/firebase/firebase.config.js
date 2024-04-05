// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ49t-p8FL26cFDSFq59DzkQLFSPB_Ins",
    authDomain: "the-dragon-news-with-auth.firebaseapp.com",
    projectId: "the-dragon-news-with-auth",
    storageBucket: "the-dragon-news-with-auth.appspot.com",
    messagingSenderId: "481166411284",
    appId: "1:481166411284:web:f51b2e4f25243b68df4901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
