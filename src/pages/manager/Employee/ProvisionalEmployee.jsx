import React from "react";
import moment from "moment"; // Import Moment.js
import "../css/ProvisionalEmployee.css"; // Import the custom CSS file

// Sample data for demonstration
const employees = [
  {
    id: 1,
    name: "Test Employee 23",
    employee_id: "E001",
    designation: "Software Engineer",
    provision_end_date: "2024-09-05",
  },
  {
    id: 2,
    name: "Test Emp 43",
    employee_id: "E002",
    designation: "Project Manager",
    provision_end_date: "2024-08-30",
  },
  {
    id: 3,
    name: "Test Employee 12",
    employee_id: "E003",
    designation: "UX Designer",
    provision_end_date: "2024-09-15",
  },
  // Add more employees as needed
];

// Function to get employees in the provisional period, sorting by the end date
const getProvisionalEmployees = (employees) => {
  const today = moment();
  return employees
    .filter((employee) => moment(employee.provision_end_date).isAfter(today))
    .sort((a, b) =>
      moment(a.provision_end_date).diff(moment(b.provision_end_date))
    );
};

const ProvisionalEmployee = () => {
  const provisionalEmployees = getProvisionalEmployees(employees);

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
                        <h5 class="m-0">Provisional Employee</h5>
                      </div>
                    </div>
                  </div>
                </div>
                {provisionalEmployees.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead className="thead-light">
                        <tr>
                          <th>Employee ID</th>
                          <th>Name</th>
                          <th>Designation</th>
                          <th>Provision End Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {provisionalEmployees.map((employee) => (
                          <tr key={employee.id}>
                            <td>{employee.employee_id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                            <td>
                              {moment(employee.provision_end_date).format(
                                "MMMM D, YYYY"
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted">
                    No employees in provisional period currently!
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

export default ProvisionalEmployee;
