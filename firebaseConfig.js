// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKvn7oGOoLkgiderduzB21G-hWAAfRENg",
  authDomain: "vaselsa-30a33.firebaseapp.com",
  projectId: "vaselsa-30a33",
  storageBucket: "vaselsa-30a33.firebasestorage.app",
  messagingSenderId: "159800969846",
  appId: "1:159800969846:web:e1584a405b1c7ab3e12d57",
  measurementId: "G-1E2ZRP0L8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export {db};
