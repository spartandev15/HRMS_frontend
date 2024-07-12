import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard'; // Example EmployeeCard component
import LeaveBalanceCard from './LeaveBalanceCard'; // Example LeaveBalanceCard component
import EmployeeForm from './EmployeeForm'; // Example EmployeeForm component
import LeaveForm from './LeaveForm'; // Example LeaveForm component
import WorkingTimeForm from './WorkingTimeForm'; // Example WorkingTimeForm component

const EmployeeManagement = () => {
  // Example data for employee management
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', department: 'HR', position: 'Manager' },
    { id: 2, name: 'Jane Smith', department: 'IT', position: 'Developer' },
    { id: 3, name: 'Michael Johnson', department: 'Finance', position: 'Analyst' },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [showLeaveForm, setShowLeaveForm] = useState(false);
  const [showWorkingTimeForm, setShowWorkingTimeForm] = useState(false);

  // Example data for leave balances
  const [leaveBalances, setLeaveBalances] = useState([
    { employeeId: 1, type: 'annual', balance: 20 },
    { employeeId: 2, type: 'sick', balance: 10 },
    { employeeId: 3, type: 'maternity', balance: 12 },
    { employeeId: 1, type: 'paternity', balance: 5 },
  ]);

  // Example data for working times
  const [workingTimes, setWorkingTimes] = useState([
    { employeeId: 1, days: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
    { employeeId: 2, days: 'Monday - Friday', hours: '10:00 AM - 6:00 PM' },
    { employeeId: 3, days: 'Monday - Friday', hours: '8:00 AM - 4:00 PM' },
  ]);

  // Function to handle selecting an employee
  const handleEmployeeSelect = (employeeId) => {
    const employee = employees.find(emp => emp.id === employeeId);
    setSelectedEmployee(employee);
  };

  // Function to handle editing employee details
  const handleEditEmployee = (employeeData) => {
    const updatedEmployees = employees.map(emp =>
      emp.id === employeeData.id ? { ...emp, ...employeeData } : emp
    );
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
    setShowEmployeeForm(false);
  };

  // Function to handle deleting an employee
  const handleDeleteEmployee = (employeeId) => {
    const updatedEmployees = employees.filter(emp => emp.id !== employeeId);
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
  };

  // Function to handle submitting leave application
  const handleApplyLeave = (leaveData) => {
    // Example: Logic to update leave balances
    const updatedLeaveBalances = leaveBalances.map(balance => {
      if (balance.employeeId === leaveData.employeeId && balance.type === leaveData.type) {
        return {
          ...balance,
          balance: balance.balance - leaveData.days, // Adjust based on your logic
        };
      }
      return balance;
    });
    setLeaveBalances(updatedLeaveBalances);
    setShowLeaveForm(false);
  };

  // Function to handle submitting working time
  const handleSaveWorkingTime = (workingTimeData) => {
    // Example: Logic to update working times
    const updatedWorkingTimes = workingTimes.map(time =>
      time.employeeId === workingTimeData.employeeId ? { ...time, ...workingTimeData } : time
    );
    setWorkingTimes(updatedWorkingTimes);
    setShowWorkingTimeForm(false);
  };

  return (
    <div className="employee-management">
      <h2>Employee Management</h2>

      <div className="employee-list">
        <h3>Employee List</h3>
        <div className="employee-cards">
          {employees.map(employee => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onSelect={handleEmployeeSelect}
              onDelete={handleDeleteEmployee}
            />
          ))}
        </div>
      </div>

      {selectedEmployee && (
        <div className="employee-details">
          <h3>Employee Details</h3>
          <p><strong>Name:</strong> {selectedEmployee.name}</p>
          <p><strong>Department:</strong> {selectedEmployee.department}</p>
          <p><strong>Position:</strong> {selectedEmployee.position}</p>
          <button onClick={() => setShowEmployeeForm(true)}>Edit Employee</button>
        </div>
      )}

      {showEmployeeForm && (
        <EmployeeForm
          employee={selectedEmployee}
          onSave={handleEditEmployee}
          onCancel={() => setShowEmployeeForm(false)}
        />
      )}

      {selectedEmployee && (
        <div className="leave-balance">
          <h3>Leave Balances</h3>
          {leaveBalances
            .filter(balance => balance.employeeId === selectedEmployee.id)
            .map(balance => (
              <LeaveBalanceCard
                key={balance.type}
                type={balance.type}
                balance={balance.balance}
              />
            ))}
          <button onClick={() => setShowLeaveForm(true)}>Apply for Leave</button>
        </div>
      )}

      {showLeaveForm && (
        <LeaveForm
          employeeId={selectedEmployee.id}
          onSave={handleApplyLeave}
          onCancel={() => setShowLeaveForm(false)}
        />
      )}

      {selectedEmployee && (
        <div className="working-time">
          <h3>Working Time</h3>
          {workingTimes
            .filter(time => time.employeeId === selectedEmployee.id)
            .map(time => (
              <div key={time.employeeId}>
                <p><strong>Days:</strong> {time.days}</p>
                <p><strong>Hours:</strong> {time.hours}</p>
              </div>
            ))}
          <button onClick={() => setShowWorkingTimeForm(true)}>Edit Working Time</button>
        </div>
      )}

      {showWorkingTimeForm && (
        <WorkingTimeForm
          employeeId={selectedEmployee.id}
          onSave={handleSaveWorkingTime}
          onCancel={() => setShowWorkingTimeForm(false)}
        />
      )}

    </div>
  );
};

export default EmployeeManagement;
