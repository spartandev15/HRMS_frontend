import React from 'react';

const LeaveBalanceCard = ({ type, balance }) => {
  return (
    <div className="leave-balance-card">
      <h3>{type} Leave</h3>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default LeaveBalanceCard;
