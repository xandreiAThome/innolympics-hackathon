import NavBar4ps from "../components/navbar4ps";
import Footer from "../components/footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { query, collection, db, onSnapshot } from "../firebase";
import { Button, Modal, Box } from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    const q = query(collection(db, "applicants"));
    const unsubscribeSnapshot = onSnapshot(q, (snapShot) => {
      const applicantsArray = [];
      snapShot.forEach((doc) => {
        const applicant = { ...doc.data(), docId: doc.id };
        applicantsArray.push(applicant);
      });
      setApplicants(applicantsArray);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeSnapshot();
    };
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/toreview"); // Redirect to dashboard or any other page after successful login
    } catch (err) {
      setError("Failed to log in. Please check your email and password.");
      handleOpen();
      console.error("Error logging in: ", err);
    }
  };
  return (
    <div className="h-full flex flex-col">
      <NavBar4ps />
      <div className="flex flex-auto flex-col justify-center items-center">
        <p className="text-center text-3xl ">Login</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4 mt-6">
            <div className="flex flex-col">
              <label for="email" className="text-lg pl-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="bg-slate-200 rounded w-96 p-1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label for="password" className="text-lg pl-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="bg-slate-200 rounded w-96 p-1"
                required
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <Footer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        className="flex justify-center"
      >
        <Box className="w-1/4 flex align-middle justify-center flex-col">
          <div className="bg-red-400 p-8 flex justify-center flex-col align-middle rounded">
            <p className="text-white text-center text-2xl">
              Email or Password is incorrect
            </p>
            <Button variant="outlined" onClick={handleClose}>
              Ok
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
