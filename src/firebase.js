// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwRK7CEOPGxAFgDPkhHduuGEp6xawywLs",
  authDomain: "jherogr-portfolio-website.firebaseapp.com",
  projectId: "jherogr-portfolio-website",
  storageBucket: "jherogr-portfolio-website.firebasestorage.app",
  messagingSenderId: "31898466991",
  appId: "1:31898466991:web:e8400fe1d87773b712f25a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
