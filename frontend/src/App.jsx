import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Applicant from "./applicant/applicant";
import Login from "./login/login";
import ToReview from "./review/toreview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/applicant" element={<Applicant />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/toreview" element={<ToReview />}></Route>
      </Routes>
    </>
  );
}

export default App;
