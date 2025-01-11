import { Route, Routes } from "react-router-dom";
import Login from "./login/login";
import Home from "./home/home";
import Applicant from "./applicant/applicant";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/applicant" element={<Applicant />}></Route>
      </Routes>
    </>
  );
}

export default App;
