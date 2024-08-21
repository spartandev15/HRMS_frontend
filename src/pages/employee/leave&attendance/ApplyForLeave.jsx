import React, { useEffect, useState } from "react";
import "./LeaveApplicationForm.css"; // Import custom styles
import { ADD_LEAVE, GET_LEAVES } from "../../../api/Api";
import { useDispatch } from "react-redux";
import { isLoader } from "../../../store/actions";

const ApplyForLeave = () => {
  const dispatch = useDispatch();
  const [applications, setApplications] = useState([]);

  const getLeaves = async () => {
    dispatch(isLoader(true));
    try {
      const response = await GET_LEAVES();
      if (response.data.result) {
        dispatch(isLoader(false));
        setApplications(response.data.data);
        console.log(response.data.data);
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Simulate fetching data
  useEffect(() => {
    // In a real app, fetch data from an API
    getLeaves();
  }, []);

  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form input
    if (!leaveType || !startDate || !endDate || !reason) {
      alert("Please fill out all fields.");
      return;
    }

    dispatch(isLoader(true));

    const data = {
      leave_type: leaveType,
      start_date: startDate,
      end_date: endDate,
      reason: reason,
    };

    try {
      const response = await ADD_LEAVE(data);
      if (response.data.result) {
        getLeaves()
        dispatch(isLoader(false));
        console.log(response.data);
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
      console.log(err);
    }

    // In a real application, you would send this data to a server
    // console.log("Leave Application Submitted:", {
    //   leaveType,
    //   startDate,
    //   endDate,
    //   reason,
    // });

    // Show confirmation message
    setSubmitted(true);

    // Clear form
    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setReason("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="shadow sechrcard mt-4">
              <div>
              <h4>Leave Applications</h4>
                <div className="leaves_table">
                  
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
                            <td>{app.leave_type}</td>
                            <td>{app.start_date}</td>
                            <td>{app.end_date}</td>
                            <td>{app.reason}</td>
                            <td>{app.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="shadow sechrcard mt-4">
              <div>
                <h4>Apply for Leave</h4>
                {submitted ? (
                  <div className="confirmation">
                    <h3>
                      Your leave application has been submitted successfully!
                    </h3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="leaveType">Leave Type:</label>
                      <select
                        id="leaveType"
                        value={leaveType}
                        onChange={(e) => setLeaveType(e.target.value)}
                        required
                      >
                        <option value="">Select Leave Type</option>
                        <option value="Annual">Annual Leave</option>
                        <option value="Sick">Sick Leave</option>
                        <option value="Personal">Personal Leave</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="startDate">Start Date:</label>
                      <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="endDate">End Date:</label>
                      <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="reason">Reason:</label>
                      <textarea
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <button type="submit">Submit Leave Application</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyForLeave;
