import React, { useEffect, useState } from "react";
import Coming_soon from "../../../component/Coming_soon";
import { isLoader } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { GET_LEAVES } from "../../../api/Api";

const PendingLeave = () => {
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
                            <td>{app.leave_type}</td>
                            <td>{app.start_date}</td>
                            <td>{app.end_date}</td>
                            <td>{app.reason}</td>
                            <td>{app.status}</td>
                            <td>
                              <div className="d-flex flex-column justify-content-center">
                                <button>Approve</button>
                                <button className="mt-3">Reject</button>
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
