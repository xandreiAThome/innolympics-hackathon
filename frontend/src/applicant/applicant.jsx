import NavBar4ps from "../components/navbar4ps";
import Footer from "../components/footer";

export default function Applicant() {
  function submit() {}
  return (
    <div className="h-full flex flex-col">
      <NavBar4ps />
      <div className="flex flex-auto flex-col justify-center items-center">
        <h2 className="font-bold text-2xl">4ps Application</h2>
        <form action={submit}>
          <div className="flex flex-col space-y-4 mt-6">
            <div className="flex flex-col">
              <label for="firstname" className="text-lg pl-2">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                className="bg-slate-200 rounded w-96 p-1"
              />
            </div>
            <div className="flex flex-col">
              <label for="lastname" className="text-lg pl-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                className="bg-slate-200 rounded w-96 p-1"
              />
            </div>
            <div className="flex flex-col">
              <label for="middlename" className="text-lg pl-2">
                Middle Name
              </label>
              <input
                type="text"
                name="middlename"
                className="bg-slate-200 rounded w-96 p-1"
              />
            </div>
            <div className="flex flex-col">
              <label for="birthdate" className="text-lg pl-2">
                Birth Date
              </label>
              <input
                type="date"
                name="birthdate"
                className="bg-slate-200 rounded w-96 p-1"
              />
            </div>
            <div className="flex flex-col">
              <label for="marital" className="text-lg pl-2">
                Marital Status:
              </label>
              <select
                name="marital"
                id="marital"
                className="p-1 bg-slate-200 rounded"
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
