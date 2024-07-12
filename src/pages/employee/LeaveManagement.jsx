import React, { useState } from 'react';
import LeaveBalanceCard from '../../component/LeaveBalanceCard'; // Adjust the import path as per your project structure

const LeaveManagement = () => {
  const [leaveBalance, setLeaveBalance] = useState({
    annual: 12,
    sick: 12,
    maternity: 60,
    paternity: 7,
  });

  const [leaveForm, setLeaveForm] = useState({
    type: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeaveForm({
      ...leaveForm,
      [name]: value,
    });
  };

  const isLeaveOverlap = (newStartDate, newEndDate) => {
    for (let leave of Object.keys(leaveBalance)) {
      if (leaveBalance[leave] <= 0 || leave === leaveForm.type) continue;

      const start = new Date(newStartDate);
      const end = new Date(newEndDate);

      const leaveStartDate = new Date(leaveForm.startDate);
      const leaveEndDate = new Date(leaveForm.endDate);

      if (
        (leaveStartDate <= start && start <= leaveEndDate) ||
        (leaveStartDate <= end && end <= leaveEndDate) ||
        (start <= leaveStartDate && leaveStartDate <= end) ||
        (start <= leaveEndDate && leaveEndDate <= end)
      ) {
        return true; // There is an overlap
      }
    }
    return false; // No overlap found
  };

  const handleApplyLeave = (e) => {
    e.preventDefault();

    const { startDate, endDate } = leaveForm;

    // Check if there is an overlap
    if (isLeaveOverlap(startDate, endDate)) {
      setError('You have already applied leave for these days.');
      return;
    }

    // Calculate number of days between start date and end date
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dayCount = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1; // Add 1 to include both start and end dates

    console.log('Leave application submitted:', leaveForm);
    setLeaveBalance({
      ...leaveBalance,
      [leaveForm.type]: leaveBalance[leaveForm.type] - dayCount,
    });

    setLeaveForm({
      type: '',
      startDate: '',
      endDate: '',
      reason: '',
    });

    setError(''); // Clear any previous error messages
  };

  return (
    <div className="leave-management">
      <h2>Leave Management</h2>

      <div className="leave-balance-cards">
        <LeaveBalanceCard type="Annual" balance={leaveBalance.annual} />
        <LeaveBalanceCard type="Sick" balance={leaveBalance.sick} />
        <LeaveBalanceCard type="Maternity" balance={leaveBalance.maternity} />
        <LeaveBalanceCard type="Paternity" balance={leaveBalance.paternity} />
      </div>

      <div className="leave-application">
        <h3>Apply for Leave:</h3>
        <form onSubmit={handleApplyLeave}>
          {error && <p className="error">{error}</p>}
          <label>
            Leave Type:
            <select name="type" value={leaveForm.type} onChange={handleInputChange} required>
              <option value="">Select Leave Type</option>
              <option value="annual">Annual Leave</option>
              <option value="sick">Sick Leave</option>
              <option value="maternity">Maternity Leave</option>
              <option value="paternity">Paternity Leave</option>
            </select>
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={leaveForm.startDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={leaveForm.endDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Reason:
            <textarea
              name="reason"
              value={leaveForm.reason}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default LeaveManagement;
