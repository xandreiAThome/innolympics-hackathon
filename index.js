import express from "express";
import cors from "cors";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  createApplicant,
  getApplicant,
  getApplicants,
  updateApplicant,
  deleteApplicant,
} from "./applicantRoutes.js";
import { loginAccount, createAccount, logoutAccount } from "./authService.js";

const firebaseConfig = {
  apiKey: "AIzaSyCk7wmb8FflIq4FS2X10ga8_S_JSVhdi44",
  authDomain: "innolympics-df0a3.firebaseapp.com",
  projectId: "innolympics-df0a3",
  storageBucket: "innolympics-df0a3.firebasestorage.app",
  messagingSenderId: "121951763193",
  appId: "1:121951763193:web:e681cef764c603cf2a0028",
  measurementId: "G-4LT59X9L2Y",
};

const app = express();
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

app.use(cors());
app.use(express.json());

app.post("/applicant", createApplicant);
app.get("/applicants", getApplicants);
app.get("/applicants/:id", getApplicant);
app.put("/applicants/:id", updateApplicant);
app.delete("/applicants/:id", deleteApplicant);

app.post("/auth/signup", async (req, res) => {
  const { email, password } = req.body;
  console.log("Credentials: ", email, password);
  try {
    await createAccount(email, password);

    res.status(201).send({ message: "Account created successfully!" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await loginAccount(email, password);
    res
      .status(200)
      .send({ message: "Login successful!", user: userCredential });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.post("/auth/logout", async (req, res) => {
  try {
    await logoutAccount();
    res.status(200).send({ message: "Logout successful!" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, function () {
  console.log("Server is running on local port 3000...");
});
