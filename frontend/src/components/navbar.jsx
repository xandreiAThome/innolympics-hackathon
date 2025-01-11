import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavBar() {
  return (
    <nav className="bg-dswdlightestblue p-8 flex ">
      <img src={logo} alt="" className="w-24 h-24" />
      <div className="flex flex-col justify-center ml-8">
        <p className="text-4xl font-bold">Bantay Pantawid</p>
        <p>Support Made Accessible for Those Who Need It Most.</p>
      </div>
      <ul>
        <li>
          <Link to="/" className="flex flex-col justify-center ml-auto mr-32">
            <Button variant="outlined">Home</Button>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex flex-col justify-center ml-auto mr-32">
            <Button variant="outlined">Sign Out</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
