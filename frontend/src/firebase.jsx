// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  doc,
  onSnapshot,
  addDoc,
  collection,
  query,
  updateDoc,
  deleteDoc,
  getFirestore,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk7wmb8FflIq4FS2X10ga8_S_JSVhdi44",
  authDomain: "innolympics-df0a3.firebaseapp.com",
  projectId: "innolympics-df0a3",
  storageBucket: "innolympics-df0a3.firebasestorage.app",
  messagingSenderId: "121951763193",
  appId: "1:121951763193:web:e681cef764c603cf2a0028",
  measurementId: "G-4LT59X9L2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);
export const auth = getAuth(app);

// Exporting everything that we need from firebase
export { doc, onSnapshot, addDoc, collection, query, updateDoc, deleteDoc };
