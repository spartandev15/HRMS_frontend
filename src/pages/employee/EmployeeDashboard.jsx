// src/EmployeeDashboard.js

import React from "react";
import "./EmployeeDashboard.css";
import { GET_PROFILE } from "../../api/Api";
import userLogo from "../../asset/images/profile.png"

const EmployeeDashboard = () => {
  const userData = JSON.parse(localStorage.getItem("myProfile"));

  const getProfile = async () => {
    try {
      const response = await GET_PROFILE();
      if (response.data.result) {
        console.log(response.data.user);
        localStorage.setItem("myProfile", JSON.stringify(response.data.user));
      }
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shadow sechrcard">
                {/* <h2>Profile Overview</h2> */}
                <div className="profile-info mt-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 profile-images">
                        <img
                          src={userData.profile_photo || userLogo}
                          alt="Profile"
                          className="profile-image"
                        />
                      </div>

                      <div className="col-lg-3">
                        <div className="profile-details ml-3">
                          <p>Name</p>
                          <h6>{userData.name}</h6>
                          <p>Profile</p>
                          <h6>{userData.designation}</h6>
                          <p>Employee ID</p>
                          <h6>{userData.emp_id}</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="profile-details ml-3">
                          <p>Date of Joining</p>
                          <h6>{userData.joining_date}</h6>
                          <p>Email</p>
                          <h6>{userData.email}</h6>
                          <p>Phone</p>
                          <h6>{userData.phone}</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="profile-details ml-3">
                          <p>Company</p>
                          <h6>ABC Technology Pvt. Ltd.</h6>
                          <p>Country</p>
                          <h6>USA</h6>
                          <p>Address</p>
                          <h6>California, USA</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shadow sechrcard">
                <table class="table">
                  <thead>
                    <tr>
                      <th id="1" scope="col">
                        Date
                      </th>
                      <th id="2" scope="col">
                        Day
                      </th>
                      <th id="3" scope="col">
                        Working Time
                      </th>
                      <th id="4" scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">17-08-2024</th>
                      <td>Saturday</td>
                      <td>05:43</td>
                      <td>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </td>
                    </tr>
                    {[
                      { date: 6, day: "Friday" },
                      { date: 5, day: "Thursday" },
                      { date: 4, day: "Wednesday" },
                      { date: 3, day: "Tuesday" },
                      { date: 2, day: "Monday" },
                      { date: 1, day: "Sunday" },
                    ].map((x) => {
                      return (
                        <tr>
                          <th scope="row">1{x.date}-08-2024</th>
                          <td>{x.day}</td>
                          <td>{`${
                            x.day === "Sunday" || x.day === "Saturday"
                              ? "00:00"
                              : "08:30"
                          }`}</td>
                          <td>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadow sechrcard">
                <div>
                  <div className="new_section_inner sechrcard-body">
                    <i className="fas fa-plane new_section_icon"></i>
                    <h5 className="font-weight-bold">Timer</h5>
                    <div className="new_section_t">
                      {/* {punchInData.today_punchin.slice(0, 10)} */}
                      2024-08-13
                    </div>
                  </div>

                  <div class="punch-info mt-3">
                    <div class="punch-hours">
                      <span>
                        <small>
                          {/* {`${String(hours).padStart(2, "0")} : ${String(
                            minutes
                          ).padStart(2, "0")}`} */}
                          04:25:45
                        </small>
                      </span>
                    </div>
                  </div>
                  <div class="punch-btn-section mb-0">
                    <button
                      type="button"
                      // onClick={PunchOut}
                      // class={`btn mybtn punch-btn
                      //   ${!punch ? "d-none" : null}
                      //   `}
                      class={`btn mybtn punch-btn`}
                    >
                      Punch Out
                    </button>
                    <button
                      type="button"
                      // onClick={PunchIn}
                      // class={`btn mybtn punch-btn ${punch ? "d-none" : null}`}
                      class={`btn mybtn punch-btn`}
                    >
                      Punch In
                    </button>
                  </div>
                  <div className="border border-#e5e5e5 bg-white px-4 py-2 mt-1">
                    <div class="punch-det text-start">
                      <h6>Punch In at</h6>
                      <div className="puch_t">
                        {/* <p>{punchInData.today_punchin.slice(0, 10)}</p>{" "}
                          <span>{punchInData.today_punchin.slice(11, 16)}</span> */}
                        <p>2024-08-13</p> <span>09:25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="/profile">View Profile</a>
          </li>
          <li>
            <a href="/tasks">My Tasks</a>
          </li>
          <li>
            <a href="/leave">Leave Request</a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default EmployeeDashboard;
