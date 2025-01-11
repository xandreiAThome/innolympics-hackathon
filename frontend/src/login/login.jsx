import NavBar4ps from "../components/navbar4ps";
import Footer from "../components/footer";
import { Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

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
      navigate("/dashboard"); // Redirect to dashboard or any other page after successful login
    } catch (err) {
      setError("Failed to log in. Please check your email and password.");
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
    </div>
  );
}
