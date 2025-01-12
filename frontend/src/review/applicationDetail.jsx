import { useParams } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";

export default function ApplicationDetail() {
  const location = useLocation();
  const { id } = useParams();
  const { applicant } = location.state || {};
  console.log(id);
  if (!applicant) {
    return <div>No applicant data available</div>;
  }

  return (
    <div className="h-full flex flex-col">
      <NavBar></NavBar>
      <div className="flex flex-auto flex-col justify-center items-center">
        <div className="w-3/4 h-3/4 bg-dswdlightestblue p-16 flex flex-col">
          <h1 className="text-4xl mb-2">
            {applicant.first_name} {applicant.last_name} details:
          </h1>
          <p className="text-2xl">Address: {applicant.address}</p>
          <p className="text-2xl">Birth day: {applicant.birth_date}</p>
          <p className="text-2xl">Marital Status: {applicant.marital_status}</p>
          <p className="text-2xl">Contact No: {applicant.contact_number}</p>
          <div className="mt-auto">
            <p>
              Answer the <u>Applicant review form</u>
            </p>
            <div className="flex space-x-4">
              <Button variant="contained">Upload PDF</Button>
              <Button variant="contained">Upload Images</Button>
              <Button className="ml-auto" variant="contained">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
