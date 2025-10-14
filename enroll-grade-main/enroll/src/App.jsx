import { Route,Routes } from "react-router-dom";
import { Landing_page } from "./pages/Landing_page";
import { Register_ph1 } from "./pages/Register_ph1";
import { Applicant_Homepage } from "./pages/applicant/Applicant_Homepage";
import { Applicant_Enroll1 } from "./pages/applicant/Applicant_Enroll";
import { Admin_Dashboard } from "./pages/admin/Admin-Dashboard";
import { Admin_Analytics } from "./pages/admin/Admin-Analytics";
import { Admin_Enrollment } from "./pages/admin/Admin-Enrollment";
import { Admin_Placement } from "./pages/admin/Admin-Placement";
import { Admin_Scheduling } from "./pages/admin/Admin-Scheduling";
import { Admin_Grades } from "./pages/admin/Admin-Grades";
import { Admin_Manage } from "./pages/admin/Admin-Manage";
import { Student_Homepage } from "./pages/student/Student_Homepage";
import { Student_Schedule } from "./pages/student/Student_Schedule";
import { Student_Grades } from "./pages/student/Student_Grades";
import { Student_Enrollment } from "./pages/student/Student_Enrollment";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/Register_ph1" element={<Register_ph1 />} />
        {/*Applicant*/}
        <Route path="/Applicant_Homepage" element={<Applicant_Homepage />} />
        <Route path="/Applicant_Enroll" element={<Applicant_Enroll1 />} />
        {/*Student*/}
        <Route path="/Student_Homepage" element={<Student_Homepage />} />
        <Route path="/Student_Schedule" element={<Student_Schedule />} />
        <Route path="/Student_Grades" element={<Student_Grades />} />
        <Route path="/Student_Enrollment" element={<Student_Enrollment />} />
        {/*Admin*/}
        <Route path="/Dashboard" element={<Admin_Dashboard />}/>
        <Route path="/Analytics" element={<Admin_Analytics />} />
        <Route path="/Admin-Enrollment" element={<Admin_Enrollment />} />
        <Route path="/Placement" element={<Admin_Placement />} />
        <Route path="/Scheduling" element={<Admin_Scheduling />} />
        <Route path="/Admin-Grades" element={<Admin_Grades />} />
        <Route path="/Manage" element={<Admin_Manage />} />
      </Routes>
    </>
  );
}

export default App;
