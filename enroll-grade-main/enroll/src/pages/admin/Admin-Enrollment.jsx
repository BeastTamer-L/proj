import './enrollment.css'
import { Header } from '../../components/Header'
import { Navigation_Bar } from '../../components/NavigationBar'
import { Confirmation_Modal } from '../../components/modals/Confirmation_Modal'
import { useState } from 'react'

export const Admin_Enrollment = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <>
      <Header />
      <Navigation_Bar userRole="super_admin" activeSection="enrollment" />
      {showConfirmation && (
        <Confirmation_Modal
          show={showConfirmation}
          onClose={() => setShowConfirmation(false)}
        />
      )}

      <div className="admin-enrollment-container">
        <div className="stats-container">
          <div className="stat-card">
            <h2>112</h2>
            <p>Pending Applications</p>
          </div>
          <div className="stat-card">
            <h2>2700</h2>
            <p>Total Enrolled Students</p>
          </div>
        </div>

        <div className="enrollmentFilter">
          <div className="search-bar">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search..." />
          </div>

          <div className="enrollmentFilters">
            <div className="filter">
              <label>Application Date</label>
              <select>
                <option>Sort by</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
            <div className="filter">
              <label>Select Grade Level</label>
              <select>
                <option>Grade</option>
                <option>Grade 7</option>
                <option>Grade 8</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
              </select>
            </div>
            <div className="filter">
              <label>Gender</label>
              <select>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="table-controls">
          <div className="left-controls">
            <input type="checkbox" /> <span>Select All</span>
            <span className="doc-completeness">Document Completeness</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>

          <button className="bulk-accept" onClick={() => setShowConfirmation(true)}>Bulk Accept</button>
        </div>

        <div className="table-container">
          <table className="enrollment-table">
            <thead>
              <tr>
                <th></th>
                <th>Application Date</th>
                <th>Name</th>
                <th>LRN</th>
                <th>Student Status</th>
                <th>Grade Level</th>
                <th>PSA/Birthcert</th>
                <th>Report Card</th>
                <th>SF10</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>December 12, 2023</td>
                <td>Jeffrey Bonina</td>
                <td>1123457891054</td>
                <td>New</td>
                <td>Grade 7</td>
                <td><a href="#">view(png,pdf)</a></td>
                <td><a href="#">view(png,pdf)</a></td>
                <td><a href="#">view(png,pdf)</a></td>
                <td>Pending</td>
                <td><button className="accept-btn" onClick={() => setShowConfirmation(true)}>Accept</button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>December 12, 2023</td>
                <td>Kelvin Manalad</td>
                <td>1134814614521</td>
                <td>New</td>
                <td>Grade 8</td>
                <td><a href="#">view(png,pdf)</a></td>
                <td><a href="#">view(png,pdf)</a></td>
                <td><a href="#">view(png,pdf)</a></td>
                <td>Pending</td>
                <td><button className="accept-btn" onClick={() => setShowConfirmation(true)}>Accept</button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>December 13, 2023</td>
                <td>Leo Atay</td>
                <td>345841454482</td>
                <td>Former</td>
                <td>Grade 9</td>
                <td><a href="#">view(png,pdf)</a></td>
                <td><a href="#">view(png,pdf)</a></td>
                <td><a href="#">view(png,pdf)</a></td>
                <td>Approved</td>
                <td><button className="accept-btn" onClick={() => setShowConfirmation(true)}>Accept</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};