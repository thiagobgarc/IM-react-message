// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtrFGUiOLg5QnUhH2HqnJgct_IIRdOQLM",
  authDomain: "imapps-6ba82.firebaseapp.com",
  projectId: "imapps-6ba82",
  storageBucket: "imapps-6ba82.appspot.com",
  messagingSenderId: "499163170717",
  appId: "1:499163170717:web:87373f8f8411c7d1801174",
  measurementId: "G-1Z0VJG61EG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);