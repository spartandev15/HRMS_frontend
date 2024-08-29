import React from "react";
import moment from "moment"; // Import Moment.js
import "../css/EmployeeWorkAnniversary.css"; // Import the custom CSS file

// Sample data for demonstration
const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    work_anniversary: "2015-09-05",
    employee_id: "E001",
    designation: "Software Engineer",
  },
  {
    id: 2,
    name: "Bob Smith",
    work_anniversary: "2018-08-30",
    employee_id: "E002",
    designation: "Project Manager",
  },
  {
    id: 3,
    name: "Charlie Brown",
    work_anniversary: "2016-09-15",
    employee_id: "E003",
    designation: "UX Designer",
  },
  // Add more employees as needed
];

// Function to get work anniversaries within the current month
const getWorkAnniversaries = (employees) => {
  const today = moment();
  const startOfMonth = today.clone().startOf("month");
  const endOfMonth = today.clone().endOf("month");

  return employees
    .filter((employee) => {
      const anniversary = moment(employee.work_anniversary, "YYYY-MM-DD").year(
        today.year()
      );
      return anniversary.isBetween(startOfMonth, endOfMonth, "day", "[]");
    })
    .sort((a, b) =>
      moment(a.work_anniversary).diff(moment(b.work_anniversary))
    );
};

const EmployeeWorkAnniversary = () => {
  const upcomingAnniversaries = getWorkAnniversaries(employees);

  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="sechrcard shadow">
                <div className="container">
                  <div className="row pb-3">
                    <div className="col-4  text-start">
                      <div class="heading-text-msg">
                        <h5 class="m-0">Employee Work Anniversary</h5>
                      </div>
                    </div>
                  </div>
                </div>
                {upcomingAnniversaries.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead className="thead-light">
                        <tr>
                          <th>Employee ID</th>
                          <th>Name</th>
                          <th>Designation</th>
                          <th>Work Anniversary</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingAnniversaries.map((employee) => (
                          <tr key={employee.id}>
                            <td>{employee.employee_id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                            <td>
                              {moment(employee.work_anniversary).format(
                                "MMMM D"
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted">
                    No work anniversaries this month!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeWorkAnniversary;
