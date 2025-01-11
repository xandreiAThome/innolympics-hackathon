import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./index.js";

export const createApplicant = async (req, res) => {
  try {
    const {
      last_name,
      first_name,
      middle_name,
      address,
      birth_date,
      marital_status,
      contact_number,
    } = req.body;

    const docRef = await addDoc(collection(db, "applicants"), {
      last_name,
      first_name,
      middle_name,
      address,
      birth_date,
      marital_status,
      contact_number,
    });

    res
      .status(201)
      .json({ message: "Applicant created successfully", id: docRef.id });
  } catch (error) {
    console.error("Error creating applicant: ", error);
    res
      .status(500)
      .json({ message: "Failed to create applicant.", error: error.message });
  }
};

export const getApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = doc(db, "applicants", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists) {
      res.status(200).json({ id: docSnap.id, ...docSnap.data() });
    } else {
      res.status(404).json({ message: "Applicant not found." });
    }
  } catch (error) {
    console.error("Error getting applicant: ", error);
    res
      .status(500)
      .json({ message: "Failed to get applicant.", error: error.message });
  }
};

export const getApplicants = async (req, res) => {
  try {
    const docRef = collection(db, "applicants");
    const docSnap = await getDocs(docRef);

    const applicants = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(applicants);
  } catch (error) {
    console.error("Error getting applicants: ", error);
    res
      .status(500)
      .json({ message: "Failed to get applicants.", error: error.message });
  }
};

export const updateApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = doc(db, "applications", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists) {
      docSnap.updateDoc(docRef, req.body);
      res.status(201).json({
        message: "Applicant info updated successfully",
        id: docSnap.id,
      });
    } else {
      res.status(404).json({ message: "Applicant not found." });
    }
  } catch (error) {
    console.error("Error updating applicants: ", error);
    res
      .status(500)
      .json({ message: "Failed to update applicants.", error: error.message });
  }
};

export const deleteApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = doc(db, "applicants", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists) {
      await deleteDoc(docRef);
      res.status(202).json({ message: "Applicant deleted." });
    } else {
      res.status(404).json({ message: "Applicant not found." });
    }
  } catch (error) {
    console.error("Error deleting applicant: ", error);
    res
      .status(500)
      .json({ message: "Failed to delete applicant.", error: error.message });
  }
};
