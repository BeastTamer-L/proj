import { Header } from "../../components/Header";
import { Navigation_Bar } from "../../components/NavigationBar";
import './student_homepage.css'
import { useNavigate } from "react-router-dom";

export const Student_Homepage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header userRole="student" />
            <Navigation_Bar userRole="student" />
            <div className="studentHomepageContainer">
                <div className="studentWelcoming">
                    <p>
                        Welcome, AYUSO JUAN BONINA (1136310046)
                    </p>
                </div>
                <div className="studentCard">
                    <div className="studentDataContainer">
                        <div className="studentData">
                            <h2>Student Name:</h2>
                            <p>Juan B. Ayuso</p>
                        </div>
                        <div className="studentData">
                            <h2>LRN:</h2>
                            <p>1136310046</p>
                        </div>
                        <div className="studentData">
                            <h2>Gender:</h2>
                            <p>Male</p>
                        </div>
                    </div>
                    <div className="studentDataContainer">
                        <div className="studentData">
                            <h2>School Year:</h2>
                            <p>2026-2027</p>
                        </div>
                        <div className="studentData">
                            <h2>Grade Level:</h2>
                            <p>7</p>
                        </div>
                        <div className="studentData">
                            <h2>Section:</h2>
                            <p>UY-Scuti</p>
                        </div>
                    </div>
                </div>
                <div className="noticeBoxContainer">
                    <div className="noticeBox">
                        <div className="notice">
                            <h2>NOTICE OF ENROLLMENT</h2>
                            <p>This is to formally inform all parents/guardians that the Enrollment System is open and currently accepting applications for the upcoming school year.
                                You may proceed by completing the online enrollment form and uploading all required documents through this system. Please be reminded that applications will be processed on a first come, first served basis, subject to the availability of slots.
                                <br />Thank you for your continued trust and support.
                            </p>
                        </div>
                        <div className="buttonContainer">
                            <button onClick={() => navigate("/Student_Enrollment")}>
                                Proceed to enrollment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}