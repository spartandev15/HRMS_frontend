import React, { useState, useEffect } from 'react';
import './LeaveApplicationForm.css'; // Import custom styles

// Mock data for leave applications
const mockApplications = [
  {
    id: 1,
    employeeName: 'John Doe',
    leaveType: 'Annual Leave',
    startDate: '2024-08-21',
    endDate: '2024-08-23',
    reason: 'Vacation with family',
    status: 'Approved'
  },
  {
    id: 2,
    employeeName: 'Jane Smith',
    leaveType: 'Sick Leave',
    startDate: '2024-08-20',
    endDate: '2024-08-20',
    reason: 'Flu',
    status: 'Pending'
  },
  // Add more applications as needed
];

const LeaveBalance = () => {
  const [applications, setApplications] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    // In a real app, fetch data from an API
    setApplications(mockApplications);
  }, []);

  return (
    <div className="leave-applications">
      <h2>Leave Applications</h2>
      {applications.length === 0 ? (
        <p>No leave applications available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.leaveType}</td>
                <td>{app.startDate}</td>
                <td>{app.endDate}</td>
                <td>{app.reason}</td>
                <td>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaveBalance;
