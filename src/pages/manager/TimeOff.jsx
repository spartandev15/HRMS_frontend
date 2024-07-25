import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const TimeOff = () => {
  const [activeTab, setActiveTab] = useState("MyTimeOff");
  const Tabledata = [1, 2, 3, 4,5,6,7,8];
  return (
    <>
      <section className="head-text">
        <div className="container">
          <div className="row">
            <div className="col-12 time-off-head text-start">
              <div class="heading-text-msg ">
                <h5 class="m-0">
                  {" "}
                  <i class="fa fa-plane-up"></i> &nbsp;Time Off
                </h5>
              </div>
              <nav className="navbar py-0">
                <div className="d-flex gap-4">
                  <span
                    className={
                      activeTab === "MyTimeOff"
                        ? "profile-nav"
                        : "profile-nav-hover"
                    }
                    onClick={() => setActiveTab("MyTimeOff")}
                  >
                    My Time Off
                  </span>
                  <span
                    className={
                      activeTab === "TeamTimeOff"
                        ? "profile-nav"
                        : "profile-nav-hover"
                    }
                    onClick={() => setActiveTab("TeamTimeOff")}
                  >
                    Team Time Off
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {activeTab === "MyTimeOff" ? (
        <>
          <section>
            <div className="container mt-4">
              <div className="row">
                <div className="col-lg-12">
                  <div class="sub-heading-text-msg  text-start">
                    <h5>Balance</h5>
                  </div>
                </div>
              </div>
              <div className="row  g-2">
                <div className="col-lg-4">
                  <div class="card text-start">
                    <div class="card-body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 class="card-title">Annual Time Off</h5>
                          <p class="card-text">12 Days</p>
                        </div>
                        <div>
                          <Popup
                            trigger={<i class="fa-solid fa-circle-info"></i>}
                            position="right center"
                            on="hover"
                          >
                            <div>
                              Annual leave is a paid time off benefit that
                              allows employees to take vacation days for
                              personal use, leisure, or relaxation. It promotes
                              work-life balance and well-being.
                            </div>
                          </Popup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div class="card text-start">
                    <div class="card-body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 class="card-title">Personal Time Off</h5>
                          <p class="card-text">12 Days</p>
                        </div>
                        <div>
                          <Popup
                            trigger={<i class="fa-solid fa-circle-info"></i>}
                            position="right center"
                            on="hover"
                          >
                            <div>
                              Personal leave provides employees with time off
                              for personal matters, such as family emergencies
                              or personal issues that require attention. It
                              supports employees in managing their personal
                              responsibilities.
                            </div>
                          </Popup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div class="card text-start">
                    <div class="card-body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 class="card-title">Sick Leave</h5>
                          <p class="card-text">12 Days</p>
                        </div>
                        <div>
                          <Popup
                            trigger={<i class="fa-solid fa-circle-info"></i>}
                            position="left center"
                            on="hover"
                          >
                            <div>
                              Sick leave is a type of leave that allows
                              employees to take time off due to illness or
                              medical conditions. It ensures that employees can
                              recover without the stress of work obligations.
                            </div>
                          </Popup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : activeTab === "TeamTimeOff" ? (
        <>
          <section>
            <div className="container mt-4">
              <div className="row ">
                <div className="col-lg-4">
                  <div class="card text-start">
                    <div class="card-body">
                      <h5 class="card-title">Paid Leave</h5>

                      <p class="card-text">12 Days</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div class="card text-start">
                    <div class="card-body">
                      <h5 class="card-title">UnPaid Leave</h5>
                      <p class="card-text">12 Days</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div class="card text-start">
                    <div class="card-body">
                      <h5 class="card-title">SicdLeave</h5>
                      <p class="card-text">12 Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}

      <section className="bg-white mt-4 ">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-12">
              <div class="sub-heading-text-msg  text-start">
                <h5 className="d-flex align-items-center">
                  {" "}
                  <i class="fa fa-pen-to-square"></i>&nbsp;Request
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3">
              <div className="form-outline">
                <input type="date" required />
                <label>From</label>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-outline">
                <input type="date" required />
                <label>To</label>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-outline">
                <select>
                  <option selected disabled>
                    Type
                  </option>
                  <option>Approve</option>
                  <option>Rejected</option>
                </select>
                <label>Type</label>
              </div>
            </div>
            <div className="col-lg-1"> </div>
            <div className="col-lg-3 text-center">
              <div className="form-outline">
                <Popup
                  trigger={
                    <button type="text" className="btn mybtn w-100 m-0">
                      + New Request
                    </button>
                  }
                  position="top center"
                  modal
                  closeOnDocumentClick
                >
                  {(close) => (
                    <div className=" px-4 py-3">
                      <div className="d-flex justify-content-between">
                        <h5>Add Leave</h5>
                        <p type="button" onClick={close}>
                          <i class="fa fa-x"></i>
                        </p>
                      </div>
                      <form class="mb-2 mt-3">
                        <div class="form-outline">
                          <select>
                            <option selected disabled>
                              Leave Type
                            </option>
                            <option value="Male">Sick Leave(Unpaid)</option>
                            <option value="Female">Casual Leave</option>
                            <option value="Other">Medical Leave</option>
                          </select>
                          <label>Leave Type</label>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <div class="form-outline">
                              <input
                                type="date"
                                name="Employee"
                                class="form-control"
                                required=""
                              />
                              <label>From</label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div class="form-outline">
                              <input
                                type="date"
                                name="Employee"
                                class="form-control"
                                required=""
                              />
                              <label>To</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            required
                          />
                          <label className="form-label" for="typeText">
                            {" "}
                            Number of Days
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="d-flex justify-content-between">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  Half Day
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                  checked
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault2"
                                >
                                  Full Day
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-outline mt-4">
                          <textarea
                            type="text"
                            name="Employee"
                            class="form-control"
                            required=""
                            rows="4"
                          ></textarea>
                          <label for="typeText">
                            {" "}
                            Leave Reason<span className=" required">*</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <button type="submit" class="btn mybtn m-0">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div id="table-scroll" className="table-scroll">
                <table id="main-table" className="main-table table">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className=" column-1"
                        style={{ background: "#e1e9ed" }}
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="sticky-column-2"
                        style={{ background: "#e1e9ed" }}
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="sticky-column-3"
                        style={{ background: "#e1e9ed" }}
                      >
                        Duration
                      </th>
                      <th scope="col" style={{ background: "#e1e9ed" }}>
                        Type
                      </th>
                      <th scope="col" style={{ background: "#e1e9ed" }}>
                        Attachment
                      </th>
                      <th scope="col" style={{ background: "#e1e9ed" }}>
                        Status
                      </th>
                      <th
                        scope="col"
                        className="sticky-column-last"
                        style={{ background: "#e1e9ed" }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                  {Tabledata.map((x) => {
              return (
                    <tr className="table_data_background">
                      <td className=" column-1">12-01-2022 </td>
                      <td className="sticky-column-2 "> 15-01-2022</td>
                      <td className="sticky-column-3">3 Days</td>
                      <td>Annual Leave</td>
                      <td><Link to="file.pdf" download >file.pdf</Link></td>
                      <td>Pending</td>
                      <td className="sticky-column-last">
                        <i className="far fa-trash-alt"></i>
                      </td>
                    </tr>
              );
            })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimeOff;
