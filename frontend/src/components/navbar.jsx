import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const logoutAccount = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav className="bg-dswdlightestblue p-8 flex ">
      <img src={logo} alt="" className="w-24 h-24" />
      <div className="flex flex-col justify-center ml-8">
        <p className="text-4xl font-bold">Bantay Pantawid</p>
        <p>Support Made Accessible for Those Who Need It Most.</p>
      </div>
      <ul className="ml-auto flex justify-center align-middle space-x-8 mr-16">
        <li className="flex justify-center align-middle">
          <Link to="/toreview" className="flex flex-col justify-center">
            <Button variant="outlined">Home</Button>
          </Link>
        </li>
        <li className="flex justify-center align-middle">
          <div className="flex flex-col justify-center">
            <Button variant="outlined" onClick={logoutAccount}>
              Sign Out
            </Button>
          </div>
        </li>
      </ul>
    </nav>
  );
}
