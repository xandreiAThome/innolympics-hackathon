import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCk7wmb8FflIq4FS2X10ga8_S_JSVhdi44",
  authDomain: "innolympics-df0a3.firebaseapp.com",
  projectId: "innolympics-df0a3",
  storageBucket: "innolympics-df0a3.firebasestorage.app",
  messagingSenderId: "121951763193",
  appId: "1:121951763193:web:e681cef764c603cf2a0028",
  measurementId: "G-4LT59X9L2Y",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

export const createAccount = async (email, password) => {
  if (auth.currentUser) {
    throw new Error("User is already logged in.");
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    console.log(error);
  }
};

export const loginAccount = async (email, password) => {
  if (auth.currentUser) {
    throw new Error("User is already logged in.");
  }

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(userCredential);
};

export const logoutAccount = async () => {
  await signOut(auth);
};
