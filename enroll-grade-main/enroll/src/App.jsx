import { Route,Routes } from "react-router-dom";
import { Landing_page } from "./pages/Landing_page";
import { Register_ph1 } from "./pages/Register_ph1";
import { Applicant_Homepage } from "./pages/applicant/Applicant_Homepage";
import { Applicant_Enroll1 } from "./pages/applicant/Applicant_Enroll";
import { Admin_Dashboard } from "./pages/admin/Admin-Dashboard";
import { Admin_Enrollment } from "./pages/admin/Admin-Enrollment";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="Register_ph1" element={<Register_ph1 />} />
        {/*Applicant*/}
        <Route path="Applicant_Homepage" element={<Applicant_Homepage />} />
        <Route path="Applicant_Enroll" element={<Applicant_Enroll1 />} />
        {/*Admin*/}
        <Route path="Dashboard" element={<Admin_Dashboard />}/>
        <Route path="Admin-Enrollment" element={<Admin_Enrollment />} />
      </Routes>
    </>
  );
}

export default App;
