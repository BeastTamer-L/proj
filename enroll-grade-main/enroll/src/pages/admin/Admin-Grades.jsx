import './admin_grades.css'
import { Header } from '../../components/Header'
import { Navigation_Bar } from '../../components/NavigationBar'


export const Admin_Grades = () => {
    return (
        <>
        <Header />
        <Navigation_Bar userRole="super_admin"/>
        <div className='gradingContainer'>
            <h2>Grading</h2>
            <div className='gradingSearch'>
                <i class="fa fa-search" aria-hidden="true"></i>
                <input className='gradingSearchBar' />
            </div>
            <div className='gradingSorter'>
                <div className='gradingSorter-quarter'>
                    <label>Quarter</label>
                    <select>
                        <option>1st</option>
                        <option>2nd</option>
                        <option>3rd</option>
                        <option>4th</option>
                    </select>
                </div>
                <div className='gradingSorter-grade'>
                    <label>Grade Level</label>
                    <select>
                        <option>Grade 7</option>
                        <option>Grade 8</option>
                        <option>Grade 9</option>
                        <option>Grade 10</option>
                    </select>
                </div>
                <div className='gradingSorter-section'>
                    <label>Section</label>
                    <select>
                        <option>Sample</option>
                        <option>Sample</option>
                        <option>Sample</option>
                        <option>Sample</option>
                    </select>
                </div>
                <div className='gradingSorter-subject'>
                    <label>Faculty/Subject</label>
                    <select>
                        <option>Sample</option>
                        <option>Sample</option>
                        <option>Sample</option>
                        <option>Sample</option>
                    </select>
                </div>
                <div className='gradingSorter-status'>
                    <label>Quarter</label>
                    <select>
                        <option>Submitted to Adviser</option>
                        <option>Submitted by Adviser</option>
                    </select>
                </div>
            </div>
            <div className='gradingTableContainer'>
                <table>
                    <tbody>
                        <tr>
                            <th>Name of teacher</th>
                            <th>Advisers</th>
                            <th>Grade Level</th>
                            <th>Section</th>
                            <th>Subject</th>
                            <th>Quarter</th>
                            <th>Status</th>
                            <th>Encoding Window</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>Jose Marie Chan</td>
                            <td>Ana Liza Ramirez</td>
                            <td>7</td>
                            <td>Apple</td>
                            <td>English</td>
                            <td>1st</td>
                            <td><div className='status'>Submitted to adviser</div></td>
                            <td><div>Unlocked</div></td>
                            <td><button>Manage Encoding</button></td>
                        </tr>
                        <tr>
                            <td>Jose Marie Chan</td>
                            <td>Ana Liza Ramirez</td>
                            <td>7</td>
                            <td>Apple</td>
                            <td>English</td>
                            <td>1st</td>
                            <td><div className='status'>Submitted by adviser</div></td>
                            <td><div>Locked</div></td>
                            <td><button>Manage Encoding</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}