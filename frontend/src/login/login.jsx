import NavBar4ps from "../components/navbar4ps";
import Footer from "../components/footer";
import { Button } from "@mui/material";

export default function Login() {
  function login() {}
  return (
    <div className="h-full flex flex-col">
      <NavBar4ps />
      <div className="flex flex-auto flex-col justify-center items-center">
        <p className="text-center text-3xl ">Login</p>
        <form action="login">
          <div className="flex flex-col space-y-4 mt-6">
            <div className="flex flex-col">
              <label for="email" className="text-lg pl-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
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
