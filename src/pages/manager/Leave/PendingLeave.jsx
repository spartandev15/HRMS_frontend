import React, { useEffect, useState } from "react";
import Coming_soon from "../../../component/Coming_soon";
import { isLoader } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { GET_ALL_LEAVES, GET_LEAVES, UPDATE_LEAVE_STATUS } from "../../../api/Api";

const PendingLeave = () => {
  const dispatch = useDispatch();
  const [applications, setApplications] = useState([]);

  const getPendingLeaves = async () => {
    dispatch(isLoader(true));
    try {
      const response = await GET_ALL_LEAVES("pending");
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

  const onApprove = async (id) => {
    try{
      dispatch(isLoader(true))
      const data = {
        id: id,
        status: "approved"
      }
      const response = await UPDATE_LEAVE_STATUS(data)
      if(response.data.result){
        dispatch(isLoader(false))
        console.log(response.data)
      } else {
        dispatch(isLoader(false))
      }
    } catch(err){
      dispatch(isLoader(false))
      console.log(err)
    }
  }

  const onReject = async (id) => {
    try{
      dispatch(isLoader(true))
      const data = {
        id: id,
        status: "rejected"
      }
      const response = await UPDATE_LEAVE_STATUS(data)
      if(response.data.result){
        dispatch(isLoader(false))
        console.log(response.data)
      } else {
        dispatch(isLoader(false))
      }
    } catch(err){
      dispatch(isLoader(false))
      console.log(err)
    }
  }

  // Simulate fetching data
  useEffect(() => {
    // In a real app, fetch data from an API
    getPendingLeaves();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shadow sechrcard mt-4">
              <div>
                <section>
                  <div className="container">
                    <div className="row pb-3">
                      <div className="col-4  text-start">
                        <div class="heading-text-msg">
                          <h5 class="m-0">Pending Leave Applications</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="leaves_table">
                  {applications.length === 0 ? (
                    <p>No leave applications available.</p>
                  ) : (
                    <table>
                      <thead>
                        <tr>
                        <th>Name</th>
                        <th>Emp. ID</th>
                          <th>Leave Type</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Reason</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app) => (
                          <tr key={app.id}>
                            <td>{app.employee_detail.name}</td>
                            <td>{app.employee_detail.employee_id}</td>
                            <td>{app.leave_type}</td>
                            <td>{app.start_date}</td>
                            <td>{app.end_date}</td>
                            <td>{app.reason}</td>
                            <td>{app.status}</td>
                            <td>
                              <div className="d-flex flex-column justify-content-center">
                                <button onClick={() => onApprove(app.id)}>Approve</button>
                                <button onClick={() => onReject(app.id)} className="mt-3">Reject</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingLeave;
