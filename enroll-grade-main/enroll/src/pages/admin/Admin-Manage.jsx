import { Header } from "../../components/Header"
import { Navigation_Bar } from "../../components/NavigationBar"
import './admin_manage.css'
import { useState } from "react"
import { ReusableModalBox} from '../../components/modals/Reusable_Modal'

export const Admin_Manage = () => {
    const [userType, setUserType] = useState("");
    const [userTypeTable, setUserTypeTable] = useState("allUser");
    const [selectUsers, setSelectUsers] = useState("");
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [showDeleteNotif, setShowDeleteNotif] = useState(false)
    const [showAddUser,setShowAddUser] = useState(false);
    const [showAddUserConfirm,setShowAddUserConfirm] = useState(false)
    const [showAddUserNotif,setShowAddUserNotif] = useState(false);

    return (
        <>
            <Header />
            <Navigation_Bar userRole="super_admin" />
            <div className="userManagementContainer">
                <h2>Manage Users</h2>
                <div className="userManageSorter">
                    <div className="userManageSearch">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input className="userManageSearchbar" placeholder="Search..." />
                    </div>
                    <div className="userManageSort">
                        <label>Select Users</label>
                        <select
                            value={userType}
                            onChange={(e) => { setUserType(e.target.value); setUserTypeTable(e.target.value); }}
                        >
                            <option value="allUser">All Users</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select>
                    </div>
                    {userType === "teacher" && (
                        <div className="userManageSort">
                            <label>Faculty/Subject</label>
                            <select>
                                <option>Science</option>
                                <option>Mathematics</option>
                                <option>English</option>
                                <option>Filipino</option>
                            </select>
                        </div>
                    )}

                    {userType === "student" && (
                        <div className="userManageSort">
                            <label>Grade Level</label>
                            <select>
                                <option>Grade 7</option>
                                <option>Grade 8</option>
                                <option>Grade 9</option>
                                <option>Grade 10</option>
                            </select>
                        </div>
                    )}
                    <div className="userManageSort">
                        <label>Status</label>
                        <select>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
                <div className="userManageTableContainer">
                    <div className="userManageBtnContainer">
                        <div className="userSelectAll">
                            {selectUsers && (
                                <>
                                    <input type="checkbox"></input>
                                    <label>Select All</label>
                                    <i className="fa fa-trash" aria-hidden="true" onClick={()=>setShowConfirmDelete(true)}></i>
                                </>
                            )}  
                        </div>
                        <div className="userManageBtns">
                            <button onClick={() => setShowAddUser(true)}>Add New User</button>
                        </div>
                    </div>
                    <div className="userManageTable">
                        {userTypeTable === "teacher" && (
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Faculty</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>    
                                    <tr>
                                        <td><input
                                            type="checkbox"
                                            checked={selectUsers}
                                            onChange={(e) => setSelectUsers(e.target.checked)}
                                        />
                                        </td>
                                        <td>Jeffrey Bonnie</td>
                                        <td>Teacher</td>
                                        <td>Mathematics</td>
                                        <td>Active</td>
                                        <td className="actionButtons"><button>Edit</button><button className="removeBtn">Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        )}

                        {userTypeTable === "student" && (
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Grade Level</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input
                                            type="checkbox"
                                            checked={selectUsers}
                                            onChange={(e) => setSelectUsers(e.target.checked)}
                                        />
                                        </td>
                                        <td>Jeffrey Bonnie</td>
                                        <td>Student</td>
                                        <td>Grade 7</td>
                                        <td>Active</td>
                                        <td className="actionButtons"><button>Edit</button><button className="removeBtn">Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        )}

                        {userTypeTable === "allUser" && (
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Department / Level</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>    
                                    <tr>
                                        <td><input
                                            type="checkbox"
                                            checked={selectUsers}
                                            onChange={(e) => setSelectUsers(e.target.checked)}
                                        />
                                        </td>
                                        <td>Jeffrey Bonnie</td>
                                        <td>Student</td>
                                        <td>Grade 7</td>
                                        <td>Active</td>
                                        <td className="actionButtons"><button>Edit</button><button className="removeBtn">Remove</button></td>
                                    </tr>
                                    <tr>
                                        <td><input
                                            type="checkbox"
                                            checked={selectUsers}
                                            onChange={(e) => setSelectUsers(e.target.checked)}
                                        />
                                        </td>
                                        <td>Kelvin Manalad</td>
                                        <td>Teacher</td>
                                        <td>Science</td>
                                        <td>Active</td>
                                        <td className="actionButtons"><button>Edit</button><button className="removeBtn">Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
                <ReusableModalBox show={showConfirmDelete} onClose={() => setShowConfirmDelete(false)}>
                    <div className="deleteConfirmation">
                        <h2>Are you sure that you want to delete this users?</h2>
                        <div className="confirmDelBtn">
                            <button style={{backgroundColor:"transparent", border:"1px solid black", color:"black"}}>Cancel</button>
                            <button onClick={() => setShowDeleteNotif(true)}>Confirm</button>
                        </div>
                    </div>
                </ReusableModalBox>
                <ReusableModalBox show={showAddUser} onClose={()=>setShowAddUser(false)}>
                    <div className="addNewUser">
                        <div className="addNewUserBackButton">
                        <i className="fa fa-chevron-left" aria-hidden="true" onClick={() => setShowAddUser(false)}/>
                        </div>    
                        <div className="addNewInputs">
                            <div className="addNewUserInput">
                                <div className="newUserInput">
                                    <label>Last Name</label>
                                    <input></input>
                                </div>
                                <div className="newUserInput">
                                    <label>First Name</label>
                                    <input></input>
                                </div>
                                <div className="newUserInput">
                                    <label>Middle Name</label>
                                    <input></input>
                                </div>
                                <div className="newUserInput">
                                    <label>Suffix</label>
                                    <input className="suffix"></input>
                                </div>
                            </div>
                            <div className="addNewUserInput">
                                <div className="newUserInput">
                                    <label>Select Role</label>
                                    <select>
                                        <option>Student</option>
                                        <option>Teacher</option>
                                    </select>
                                </div>
                                <div className="newUserInput">
                                    <label>Faculty/Subject</label>
                                    <select></select>
                                </div>
                            </div>
                            <div className="addNewUserInput">
                                <div className="newUserInput">
                                    <label>Password</label>
                                    <input type="password" />
                                </div>
                                <div className="newUserInput">
                                    <label>Confirm Password</label>
                                    <input type="password" />
                                </div>
                            </div>
                        </div>
                        <div className="createAccountButton">
                            <button onClick={() => setShowAddUserConfirm(true)}>Create Account</button>  
                        </div>
                    </div>
                </ReusableModalBox>
                <ReusableModalBox show={showAddUserConfirm} onClose={() => setShowAddUserConfirm(false)}>
                    <div className="addConfirmation">
                        <h2>Are you sure that you all details are correct?</h2>
                        <div className="confirmAddBtn">
                            <button style={{backgroundColor:"transparent", border:"1px solid black", color:"black"}}>Cancel</button>
                            <button onClick={() => setShowAddUserNotif(true)}>Confirm</button>
                        </div>
                    </div>
                </ReusableModalBox>
                <ReusableModalBox show={showAddUserNotif} onClose={() => setShowAddUserNotif(false)}>
                    <div className='notif'>
                        <div className='img' style={{ paddingTop: "10px" }}>
                            <img src="checkImg.png" style={{ height: "50px", width: "50px" }} />
                        </div>
                        <div className='notifMessage'>
                            <span>Account Created </span>
                            <span>Successfully!</span>
                        </div>
                    </div>
                </ReusableModalBox>
                <ReusableModalBox show={showDeleteNotif} onClose={() => setShowDeleteNotif(false)}>
                    <div className='notif'>
                        <div className='img' style={{ paddingTop: "10px" }}>
                            <img src="checkImg.png" style={{ height: "50px", width: "50px" }} />
                        </div>
                        <div className='notifMessage'>
                            <span>Account Deleted </span>
                            <span>Successfully!</span>
                        </div>
                    </div>
                </ReusableModalBox>
            </div>
            
        </>
    )
}