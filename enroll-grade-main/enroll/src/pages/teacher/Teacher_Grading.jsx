import { Header } from "../../components/Header";
import { Navigation_Bar } from "../../components/NavigationBar";
import './teacher_grading.css'
import { ReusableModalBox } from "../../components/modals/Reusable_Modal"
import { use, useState } from "react";

export const Teacher_Grading = () => {
    const [showViewCard, setShowviewCard] = useState(false);
    const [showEncodeGrade,setShowEncodeGrade] = useState (false);
    const [showSubmitConfirm, setShowSubmitConfirm] = useState (false);
    const [showSubmitNotif, setShowSubmitNotif] = useState (false);

    return (
        <>
            <Header userRole="teacher" />
            <Navigation_Bar userRole="teacher" />
            <div className="teacherGradingContainer">
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
                        <i class="fa fa-archive" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="gradingArea">
                    <div className="gradingCard">
                        <div className="gradingDataContainer">
                            <div className="gradingData">
                                <h2>Subject:</h2>
                                <p>Science</p>
                            </div>
                            <div className="gradingData">
                                <h2>Section:</h2>
                                <p>UY-Scuti</p>
                            </div>
                            <div className="gradingData">
                                <h2>Adviser:</h2>
                                <p>Miguel Soriano</p>
                            </div>
                        </div>
                        <div className="gradingDataContainer">
                            <div className="gradingData">
                                <h2>Shift:</h2>
                                <p>Morning</p>
                            </div>
                            <div className="gradingData">
                                <h2>Time:</h2>
                                <p>6:00 - 7:00</p>
                            </div>
                            <div className="gradingData">
                                <h2>Status:</h2>
                                <p>Approved</p>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button onClick={() => setShowviewCard(true)}>View Here</button>
                        </div>
                    </div>
                    <div className="gradingCard">
                        <div className="gradingDataContainer">
                            <div className="gradingData">
                                <h2>Subject:</h2>
                                <p>Science</p>
                            </div>
                            <div className="gradingData">
                                <h2>Section:</h2>
                                <p>UY-Scuti</p>
                            </div>
                            <div className="gradingData">
                                <h2>Adviser:</h2>
                                <p>Miguel Soriano</p>
                            </div>
                        </div>
                        <div className="gradingDataContainer">
                            <div className="gradingData">
                                <h2>Shift:</h2>
                                <p>Morning</p>
                            </div>
                            <div className="gradingData">
                                <h2>Time:</h2>
                                <p>6:00 - 7:00</p>
                            </div>
                            <div className="gradingData">
                                <h2>Status:</h2>
                                <p>Pending</p>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button onClick={()=> setShowEncodeGrade(true)}>Encode Grade</button>
                        </div>
                    </div>
                </div>
                <ReusableModalBox show={showViewCard} onClose={() => setShowviewCard(false)}>
                    <div className="viewGrade">
                        <div className="gradesTable">
                            <table className="gradesTable">
                                <thead>
                                    <tr>
                                        <th rowSpan="2">LRN</th>
                                        <th rowSpan="2">Name</th>
                                        <th colSpan="4">Quarter</th>
                                        <th rowSpan="2">Final Grade</th>
                                        <th rowSpan="2">Remarks</th>
                                    </tr>
                                    <tr>
                                        <th>1st</th>
                                        <th>2nd</th>
                                        <th>3rd</th>
                                        <th>4th</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>130482917654</td>
                                        <td>1. Baylon, Carlo O.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130593846210</td>
                                        <td>2. Camuigin, Kenneth B.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130728194365</td>
                                        <td>3. Fernandez, Steven B.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130857492601</td>
                                        <td>4. Garcia, Andrew E.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130964581237</td>
                                        <td>5. Lozano, Richard V.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130175983420</td>
                                        <td>6. Mendoza, Andrei I.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130246857913</td>
                                        <td>7. Pascual, Justine E.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130395762841</td>
                                        <td>8. Ramos, Eric D.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130518629074</td>
                                        <td>9. Salazar, Eldrin X.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130679248135</td>
                                        <td>10. Villanueva, Ezra C.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>140751107020</td>
                                        <td>11. Wolaywan, Arnold Q.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </ReusableModalBox>
                <ReusableModalBox show={showEncodeGrade} onClose={() => setShowEncodeGrade(false)}>
                    <div className="viewGrade">
                        <div className="gradesTable">
                            <table className="gradesTable">
                                <thead>
                                    <tr>
                                        <th rowSpan="2">LRN</th>
                                        <th rowSpan="2">Name</th>
                                        <th colSpan="4">Quarter</th>
                                        <th rowSpan="2">Final Grade</th>
                                        <th rowSpan="2">Remarks</th>
                                    </tr>
                                    <tr>
                                        <th>1st</th>
                                        <th>2nd</th>
                                        <th>3rd</th>
                                        <th>4th</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>130482917654</td>
                                        <td>1. Baylon, Carlo O.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130593846210</td>
                                        <td>2. Camuigin, Kenneth B.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130728194365</td>
                                        <td>3. Fernandez, Steven B.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130857492601</td>
                                        <td>4. Garcia, Andrew E.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130964581237</td>
                                        <td>5. Lozano, Richard V.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130175983420</td>
                                        <td>6. Mendoza, Andrei I.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130246857913</td>
                                        <td>7. Pascual, Justine E.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130395762841</td>
                                        <td>8. Ramos, Eric D.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130518629074</td>
                                        <td>9. Salazar, Eldrin X.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>130679248135</td>
                                        <td>10. Villanueva, Ezra C.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td>140751107020</td>
                                        <td>11. Wolaywan, Arnold Q.</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td></td><td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="encodeBtns">
                            <button className="import">Import CSV</button>
                            <button onClick={() => setShowSubmitConfirm(true)}>Submit</button>
                        </div>
                    </div>
                </ReusableModalBox>
                <ReusableModalBox show={showSubmitConfirm} onClose={() => setShowSubmitConfirm(false)}>
                    <div className="confirmSubmit">
                        <p>You're about to submit the grades for this section.Proceed?</p>
                        <div className="btnContainer">
                            <button className="cancel">Cancel</button>
                            <button onClick={() => setShowSubmitNotif(true)}>Proceed</button>
                        </div>
                    </div>
                </ReusableModalBox>
                <ReusableModalBox show={showSubmitNotif} onClose={() => setShowSubmitNotif(false)}>
                    <div className='notif'>
                                <div className='img' style={{ paddingTop: "10px" }}>
                                    <img src="checkImg.png" style={{ height: "50px", width: "50px" }} />
                                </div>
                                <h2>Successfully Submitted!</h2>
                            </div>
                </ReusableModalBox>
            </div>
        </>
    )
}