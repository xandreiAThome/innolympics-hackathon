import NavBar4ps from "../components/navbar4ps";
import Footer from "../components/footer";
import { Button, Modal, Box } from "@mui/material";
import { query, collection, db, onSnapshot, doc, addDoc } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Applicant() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    address: "",
    birthdate: "",
    marital: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.firstname);

    try {
      const docRef = await addDoc(collection(db, "applicants"), {
        last_name: formData.lastname,
        first_name: formData.firstname,
        middle_name: formData.middlename,
        address: formData.address,
        birth_date: formData.birthdate,
        marital_status: formData.marital,
        contact_number: formData.phone,
      });

      console.log("Application added: ", docRef.id);
      handleOpen();
    } catch (err) {
      console.log("Error in adding application", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <div className="h-full flex flex-col">
      <NavBar4ps />
      <div className="flex flex-auto flex-col justify-center items-center">
        <h2 className="font-bold text-2xl">4ps Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4 mt-6">
            <div className="flex flex-col">
              <label for="firstname" className="text-lg pl-2">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                onChange={handleChange}
                className="bg-slate-200 rounded w-96 p-1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label for="lastname" className="text-lg pl-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                onChange={handleChange}
                className="bg-slate-200 rounded w-96 p-1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label for="middlename" className="text-lg pl-2">
                Middle Name
              </label>
              <input
                type="text"
                name="middlename"
                onChange={handleChange}
                className="bg-slate-200 rounded w-96 p-1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label for="birthdate" className="text-lg pl-2">
                Birth Date
              </label>
              <input
                type="date"
                name="birthdate"
                onChange={handleChange}
                className="bg-slate-200 rounded w-96 p-1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label for="marital" className="text-lg pl-2">
                Marital Status:
              </label>
              <select
                name="marital"
                id="marital"
                onChange={handleChange}
                className="p-2   bg-slate-200 rounded"
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label for="phone" className="text-lg pl-2">
                Enter your phone number:
              </label>
              <input
                className="bg-slate-200 p-1 rounded"
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                pattern="[0-9]{11}"
                required
              />
            </div>
            <div className="flex flex-col">
              <label for="address" className="text-lg pl-2">
                Address
              </label>
              <input
                type="text"
                name="address"
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        className="flex justify-center"
      >
        <Box className="w-1/4 flex align-middle justify-center flex-col">
          <div className="bg-blue-400 p-8 flex justify-center flex-col align-middle rounded">
            <p className="text-white text-center text-2xl">
              Submitted Application Succesfully
            </p>
            <Button variant="contained" onClick={handleClose}>
              Ok
            </Button>
          </div>
        </Box>
      </Modal>
      <Footer />
    </div>
  );
}
