import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Applications from "../components/applications";
import { useState, useEffect } from "react";
import { query, collection, db, onSnapshot, doc } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; // Ensure you have configured Firebase and exported auth
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function ToReview() {
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();
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

  return (
    <div className="h-full flex flex-col">
      <NavBar />
      <div className="flex flex-auto flex-col justify-center items-center p-6 justify-center align-middle">
        <h1 className="text-3xl mb-4">Applications for Review</h1>
        <div className="flex flex-col space-y-4 overflow-y-auto w-3/4 justify-center align-middle">
          {applicants.map((obj) => {
            console.log(obj);
            return (
              <Link
                to={`/toreview/${obj.docId}`}
                key={obj.docId}
                state={{ applicant: obj }}
                className="flex flex-col justify-center align-middle"
              >
                <Applications
                  firstname={obj.first_name}
                  lastname={obj.last_name}
                  address={obj.address}
                ></Applications>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
