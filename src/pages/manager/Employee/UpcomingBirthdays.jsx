import React from "react";
import moment from "moment"; // For date manipulation
import "../css/UpcomingBirthdays.css"; // Import the custom CSS file

// Sample data for demonstration
const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    birthday: "1990-09-05",
    employee_id: "E001",
    designation: "Software Engineer",
  },
  {
    id: 2,
    name: "Bob Smith",
    birthday: "1985-08-30",
    employee_id: "E002",
    designation: "Project Manager",
  },
  {
    id: 3,
    name: "Charlie Brown",
    birthday: "1992-09-15",
    employee_id: "E003",
    designation: "UX Designer",
  },
  // Add more employees as needed
];

// Function to get upcoming birthdays within the next 30 days
const getUpcomingBirthdays = (employees) => {
  const today = moment();
  const endOfMonth = moment().endOf("month");
  return employees
    .filter((employee) => {
      const birthday = moment(employee.birthday, "YYYY-MM-DD");
      birthday.year(today.year());

      return birthday.isBetween(today, endOfMonth, "day", "[]");
    })
    .sort((a, b) => moment(a.birthday).diff(moment(b.birthday)));
};

const UpcomingBirthdays = () => {
  const upcomingBirthdays = getUpcomingBirthdays(employees);

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
                        <h5 class="m-0">Upcoming Employee Birthdays</h5>
                      </div>
                    </div>
                  </div>
                </div>
                {upcomingBirthdays.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead className="thead-light">
                        <tr>
                          <th>Employee ID</th>
                          <th>Name</th>
                          <th>Designation</th>
                          <th>Birthday</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingBirthdays.map((employee) => (
                          <tr key={employee.id}>
                            <td>{employee.employee_id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                            <td>
                              {moment(employee.birthday).format("MMMM D")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted">
                    No upcoming birthdays this month!
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

export default UpcomingBirthdays;
