import { useState } from "react";
import { Header } from "../../components/Header";
import { Navigation_Bar } from "../../components/NavigationBar";
import { Sub_Nav } from "../../components/SubNav";
import "./dashboard.css";
import { Select } from "../../components/buttons-inputs/Select";

export const Admin_Dashboard = () => {
  const [activeSection, setActiveSection] = useState("enrollmentOverview");

  const [schoolYear, setSchoolYear] = useState("");
  const [grade, setGrade] = useState("");
  const [studentDistributionGrade, setStudentDistributionGrade] = useState("");
  const [studentDistributionSection, setStudentDistributionSection] = useState("");
  const [facultyAssignmentGrade, setFacultyAssignmentGrade] = useState("");
  const [facultyAssignmentSub, setFacultyAssignmentSub] = useState("");
  const [gradingSummaryQuarter, setGradingSummaryQuarter] = useState("");
  const [gradingSummaryGrade, setGradingSummaryGrade] = useState("");
  const [topSectionQuarter, setTopSectionQuarter] = useState("");
  const [topSectionGrade, setTopSectionGrade] = useState("");

  return (
    <>
      <Header />
      <Navigation_Bar userRole="super_admin" />
      <Sub_Nav activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="dashboard-container">

        {activeSection === "enrollmentOverview" && (
          <div className="enrollmentOverview">

            <div className="overview">
              <div className="sort-SY">
                <label>Select School Year</label>
                <Select value={schoolYear} onChange={(e) => setSchoolYear(e.target.value)}>
                  <option value="" disabled>School Year</option>
                  <option>2024–2025</option>
                  <option>2025–2026</option>
                </Select>
              </div>

              <div className="sort-Grade">
                <h1>Enrollment Overview</h1>

                <div className="sorter-Grade">
                  <label>Select Grade Level</label>
                  <Select value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="">All Grade</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                  </Select>
                </div>
              </div>

              <div className="enrollment-stat-cards">
                <div className="card">
                  <h2>1200</h2>
                  <p>Total Enrolled Students</p>
                </div>
                <div className="card">
                  <h2>122</h2>
                  <p>Pending Applications</p>
                </div>
              </div>
            </div>

            <div className="enroll_chart">
              <div className="chart">Chart</div>
            </div>

          </div>
        )}

        {activeSection === "studentDistribution" && (
          <div className="studentDistribution">

            <div className="studentDistributionP1">
              <h1>Students by Grade</h1>

              <div className="gradeSection_sorter">
                <div className="sorter-grade">
                  <label>Select Grade Level</label>
                  <Select
                    value={studentDistributionGrade}
                    onChange={(e) => setStudentDistributionGrade(e.target.value)}
                  >
                    <option value="">All Grade</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                  </Select>
                </div>

                <div className="sorter-section">
                  <label>Select Section</label>
                  <Select
                    value={studentDistributionSection}
                    onChange={(e) => setStudentDistributionSection(e.target.value)}
                  >
                    <option value="">All Sections</option>
                    <option>Section A</option>
                  </Select>
                </div>
              </div>

              <div className="table-container">
                <table className="table1">
                  <thead>
                    <tr>
                      <th>Grade Level</th>
                      <th>No. of Sections</th>
                      <th>Total Enrolled</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Grade 7</td><td>8</td><td>200</td></tr>
                    <tr><td>Grade 8</td><td>8</td><td>200</td></tr>
                    <tr><td>Grade 9</td><td>8</td><td>320</td></tr>
                    <tr><td>Grade 10</td><td>12</td><td>300</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="studentDistributionP2">
              <h1>Chart</h1>
            </div>

          </div>
        )}

        {activeSection === "facultyAssignment" && (
          <div className="facultyAssignment">

            <h1>Teacher Load Summary</h1>

            <div className="facultyAssignmentP1">
              <div className="teacherLoadSummary">
                <div className="card overloadedTeacher">
                  <h2>2</h2>
                  <p>Overloaded Teachers</p>
                </div>

                <div className="card vacantCompliance">
                  <h1>Vacant Period Compliance</h1>

                  <div className="complianceStatContainer">
                    <div className="complianceStat">
                      <h2>50</h2>
                      <p>Compliant</p>
                    </div>

                    <div className="complianceStat">
                      <h2>50</h2>
                      <p>Non-Compliant</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="teachersPerGrade">
                <div className="teachersPerGradeChart">Chart</div>
              </div>
            </div>

            <div className="facultyAssignmentP2">
              <div className="facultyAssignmentSorter">

                <div className="facultyAssignment-search-sort">
                  <div className="facultyAssignmentSearch">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input className="search" placeholder="Search..." />
                  </div>

                  <div className="sorter-grade">
                    <label>Select Grade Level</label>
                    <Select
                      value={facultyAssignmentGrade}
                      onChange={(e) => setFacultyAssignmentGrade(e.target.value)}
                    >
                      <option value="">All Grade</option>
                      <option>Grade 7</option>
                      <option>Grade 8</option>
                      <option>Grade 9</option>
                      <option>Grade 10</option>
                    </Select>
                  </div>

                  <div className="sorter-subject">
                    <label>Faculty/Subject</label>
                    <Select
                      value={facultyAssignmentSub}
                      onChange={(e) => setFacultyAssignmentSub(e.target.value)}
                    >
                      <option value="">All Subjects</option>
                      <option>Mathematics</option>
                      <option>English</option>
                      <option>Filipino</option>
                      <option>Science</option>
                    </Select>
                  </div>
                </div>

                <div className="facultyAssignmentTable">
                  <table className="faculty-periods-table">
                    <thead>
                      <tr>
                        <th rowSpan="2">Name</th>
                        <th rowSpan="2">Faculty</th>
                        <th rowSpan="2">Grade Level</th>
                        <th colSpan="5">No. of Periods per day</th>
                        <th rowSpan="2">Total</th>
                      </tr>
                      <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Juan Ayuso</td>
                        <td>Science</td>
                        <td>Grade 7</td>
                        <td>5</td>
                        <td>5</td>
                        <td className="highlight-red">7</td>
                        <td>6</td>
                        <td>4</td>
                        <td>27</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="workChart">Chart</div>
            </div>

          </div>
        )}

        {activeSection === "gradingSummary" && (
          <div className="gradingSummary">

            <h1>Grade Summary</h1>

            <div className="gradingSummaryP1">
              <div className="gradingSummaryQuarterSort">
                <label>Quarter</label>
                <Select
                  value={gradingSummaryQuarter}
                  onChange={(e) => setGradingSummaryQuarter(e.target.value)}
                >
                  <option value="" disabled>Quarter</option>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                </Select>
              </div>

              <div className="gradingSummaryGradeSort">
                <label>Select Grade Level</label>
                <Select
                  value={gradingSummaryGrade}
                  onChange={(e) => setGradingSummaryGrade(e.target.value)}
                >
                  <option value="">All Grade</option>
                  <option>Grade 7</option>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                </Select>
              </div>
            </div>

            <div className="gradingSummaryP2">
              <div className="card teacher-grade-submission">
                <p>Teacher Grades Submission</p>
                <div className="statContainer">
                  <div className="submissionStat">
                    <h2>10%</h2>
                    <p>Has submitted their grades</p>
                  </div>
                  <div className="submissionStat">
                    <h2>10%</h2>
                    <p>Has not yet submitted their grades</p>
                  </div>
                </div>
              </div>

              <div className="card teacher-grade-submission">
                <p>Adviser Grades Verification</p>
                <div className="statContainer">
                  <div className="submissionStat">
                    <h2>10%</h2>
                    <p>Has verified the grades</p>
                  </div>
                  <div className="submissionStat">
                    <h2>10%</h2>
                    <p>Has not yet verified the grades</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradingSummaryP3">
              <div className="passingRateTitle">
                <h1>Passing Rate</h1>
              </div>

              <div className="passingRateChart">
                <div style={{ width: "150px", height: "150px", borderRadius: "90px", backgroundColor: "blue" }}></div>
                <div style={{ width: "150px", height: "150px", borderRadius: "90px", backgroundColor: "blue" }}></div>
                <div style={{ width: "150px", height: "150px", borderRadius: "90px", backgroundColor: "blue" }}></div>
                <div style={{ width: "150px", height: "150px", borderRadius: "90px", backgroundColor: "blue" }}></div>
              </div>
            </div>

            <div className="gradingSummaryP4">
              <div className="topSections">

                <div className="topSectionsSorter">
                  <div className="gradingSummaryQuarterSort">
                    <label>Quarter</label>
                    <Select
                      value={topSectionQuarter}
                      onChange={(e) => setTopSectionQuarter(e.target.value)}
                    >
                      <option value="" disabled>Quarter</option>
                      <option>1st</option>
                      <option>2nd</option>
                      <option>3rd</option>
                      <option>4th</option>
                    </Select>
                  </div>

                  <div className="gradingSummaryGradeSort">
                    <label>Select Grade Level</label>
                    <Select
                      value={topSectionGrade}
                      onChange={(e) => setTopSectionGrade(e.target.value)}
                    >
                      <option value="">All Grade</option>
                      <option>Grade 7</option>
                      <option>Grade 8</option>
                      <option>Grade 9</option>
                      <option>Grade 10</option>
                    </Select>
                  </div>
                </div>

                <div className="topSectionTable">
                  <div className="table-container">
                    <table className="table1">
                      <thead>
                        <tr>
                          <th>Section</th>
                          <th>Average</th>
                          <th>Grade Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Grade Level 7</td>
                          <td>8</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <td>Grade Level 8</td>
                          <td>8</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <td>Grade Level 9</td>
                          <td>8</td>
                          <td>320</td>
                        </tr>
                        <tr>
                          <td>Grade Level 10</td>
                          <td>12</td>
                          <td>300</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="averageGradeChart">
                chart
              </div>
            </div>

          </div>
        )}

      </div>
    </>
  );
};
