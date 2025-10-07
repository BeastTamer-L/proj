import { NavLink } from "react-router-dom";
import "./navigationbar.css";

export const Navigation_Bar = ({ userRole,activeSection, onSectionChange }) => {
  if (userRole === "student") {
    return (
      <div className="nav-bar">
        <div className="navigation-bar">
          <span className="nav-item">Enrollment</span>
          <span className="nav-item">Schedule</span>
          <span className="nav-item">Grades</span>
        </div>
      </div>
    );
  }

  if (userRole === "applicant") {
    return (
      <div className="nav-bar">
        <div className="navigation-bar">
          <span className="nav-item">Home</span>
        </div>
      </div>
    );
  }

  if (userRole === "teacher") {
    return (
      <div className="navigation-bar">
        <span className="nav-item">Classes</span>
        <span className="nav-item">Grading</span>
        <span className="nav-item">Evaluation</span>
        <span className="nav-item">Class schedule</span>
      </div>
    );
  }

  if (userRole === "super_admin") {
    return (
      <>
      <div className="nav-bar">
        <div className="navigation-bar">
          <NavLink to="/Dashboard" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} style={{textDecoration:"none"}}>Dashboard</NavLink>
          <span className="nav-item">Analytics</span>
          <NavLink to="/Admin-Enrollment" className={({ isActive }) => isActive ? "nav-item active" :"nav-item"} style={{textDecoration:"none"}}>Enrollment</NavLink>
          <span className="nav-item">Placement</span>
          <span className="nav-item">Scheduling</span>
          <span className="nav-item">Grades</span>
          <span className="nav-item">Manage</span>
        </div>
        
      </div>
      </>
    );
  }

  if (userRole === "admin") {
    return (
      <>
      <div className="nav-bar">
        <div className="navigation-bar">
          <span className="nav-item">Dashboard</span>
          <span className="nav-item">Analytics</span>
          <span className="nav-item">Enrollment</span>
          <span className="nav-item">Placement</span>
          <span className="nav-item">Scheduling</span>
          <span className="nav-item">Grades</span>
        </div>
        <div className="dashboard-sub-nav">
          <span
            className={`sub-nav-item ${activeSection === "" ? "active" : ""}`}
            onClick={() => onSectionChange("enrollmentOverview")}
          >
            Enrollment Overview
          </span>
          <span
            className={`sub-nav-item ${activeSection === "studentDistribution" ? "active" : ""}`}
            onClick={() => onSectionChange("studentDistribution")}
          >
            Student Distribution
          </span>
          <span
            className={`sub-nav-item ${activeSection === "faculty" ? "active" : ""}`}
            onClick={() => onSectionChange("faculty")}
          >
            Faculty Assignment
          </span>
          <span
            className={`subNavItem ${activeSection === "grading" ? "active" : ""}`}
            onClick={() => onSectionChange("grading")}
          >
            Grading Summary
          </span>
        </div>
      </div>
      </>
    );
  }


  return null;
};
