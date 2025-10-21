import { Header } from "../../components/Header";
import { Navigation_Bar } from "../../components/NavigationBar";
import './teacher_homepage.css'
import { MasterList } from "../../components/teacher_comp/MasterList";
import { useState } from "react";

export const Teacher_Homepage = () => {
    const [showMasterList, setShowMasterList] = useState(false);

    return (
        <>
        <Header userRole="teacher" />
        <Navigation_Bar userRole="teacher" />
        <div className="teacherHomepageContainer">
            <div className="sorters">
                <div className="search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input className="Searchbar" placeholder="Search..." />
                </div>
                <div className="sorter">
                    <label>Select Grade Level</label>
                    <select>
                        <option>Grade 7</option>
                        <option>Grade 8</option>
                        <option>Grade 9</option>
                        <option>Grade 10</option>
                    </select>
                </div>
                <div className="sorter">
                    <label>Faculty/Subject</label>
                    <select></select>
                </div>
                <div className="archive">
                    <i className="fa fa-archive" aria-hidden="true"></i>
                </div>
            </div>
            <div className="classesArea">
                <div className="classesCard">
                    <div className="classesDataContainer">
                        <div className="classesData">
                            <h2>Subject:</h2>
                            <p>Science</p>
                        </div>
                        <div className="classesData">
                            <h2>Section:</h2>
                            <p>UY-Scuti</p>
                        </div>
                        <div className="classesData">
                            <h2>Adviser:</h2>
                            <p>Miguel Soriano</p>
                        </div>
                    </div>
                    <div className="classesDataContainer">
                        <div className="classesData">
                            <h2>Shift:</h2>
                            <p>Morning</p>
                        </div>
                        <div className="classesData">
                            <h2>Time:</h2>
                            <p>6:00 - 7:00</p>
                        </div>
                    </div>
                    <div className="buttonContainer">
                        <button onClick={() => setShowMasterList(true)}>View Masterlist</button>
                    </div>
                </div>
            </div>
            <MasterList showMasterList={showMasterList} closeMasterList = {() => setShowMasterList(false)}/>    
        </div>
        </>
    )
}