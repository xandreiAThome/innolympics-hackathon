import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { query, collection, db, onSnapshot, doc } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";

export default function Home() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "applicants"));
    const unsubscribe = onSnapshot(q, (snapShot) => {
      const applicantsArray = [];
      snapShot.forEach((doc) => {
        const applicant = { ...doc.data(), docId: doc.id };
        applicantsArray.push(applicant);
        console.log(applicant);
      });
      setApplicants(applicantsArray);
    });

    return () => unsubscribe();
  }, []);

  const getApplicantById = async (id) => {
    try {
      const docRef = doc(db, "applicants", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const applicant = { ...docSnap.data(), docId: docSnap.id };
        console.log("Applicant fetched: ", applicant);
        return applicant;
      } else {
        console.log("No applicant found with that ID.");
      }
    } catch (error) {
      console.log("Error fetching applicant: ", error);
    }
  };

  let navigate = useNavigate();

  return (
    <div className="h-full flex flex-col">
      <nav className="bg-dswdlightestblue p-8 flex space-x-8 ">
        <img src={logo} alt="" className="w-24 h-24" />
        <div className="flex flex-col justify-center">
          <p className="text-4xl font-bold">Bantay Pantawid</p>
          <p>Support Made Accessible for Those Who Need It Most.</p>
        </div>
      </nav>
      <div className="flex flex-auto flex-col justify-center items-center">
        <div className="grid grid-col-1 gap-8">
          <button
            data-ripple-light="true"
            className="rounded-md bg-dswdlightblue py-2 px-4 border border-transparent text-center text-3xl font-bold transition-all shadow-md hover:shadow-lg focus:bg-slate-400 focus:shadow-none active:bg-slate-400 hover:bg-slate-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
            onClick={() => navigate("/applicant")}
          >
            Applicant
          </button>
          <button
            data-ripple-light="true"
            className="rounded-md px-32 bg-dswdlightblue py-2 border border-transparent text-center text-3xl font-bold transition-all shadow-md hover:shadow-lg focus:bg-slate-400 focus:shadow-none active:bg-slate-400 hover:bg-slate-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
            onClick={() => navigate("/applicant")}
          >
            Social Worker
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
