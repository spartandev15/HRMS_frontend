import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import userLogo from "../../asset/images/account.png";
import User from "../../asset/images/profile.png";
import { isLoader } from "../../store/actions";
import { useDispatch } from "react-redux";
import {
  GET_HR_DASHBOARD,
  GET_LEAVES,
  GET_TIMER,
  PUNCH_IN,
  PUNCH_OUT,
  RUN_TIMER,
  STORE_TIMER,
} from "../../api/Api";
import Notification from "../../component/NotificationPopup";

const AdminHome = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  // const name = localStorage.getItem("userName");

  const punchInData = JSON.parse(localStorage.getItem("punchInData")) || {};

  const [punch, setPunch] = useState(false);
  const [leaves, setLeaves] = useState([]);
  const [dashboardData, setDashboardData] = useState();
  const [isTimerRunning, setTimerRunning] = useState(false);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  let timerInterval = useRef(null);

  const startTimer = () => {
    timerInterval.current = setInterval(() => {
      setMinutes((prevMinutes) => {
        if (prevMinutes === 59) {
          setHours((prevHours) => Math.floor(prevHours) + 1);
          return 0;
        }
        return Math.floor(prevMinutes) + 1;
      });
    }, 60000);
  };

  const stopTimer = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const PunchOut = async () => {
    try {
      dispatch(isLoader(true));
      const response = await PUNCH_OUT();
      if (response.data.result) {
        stopTimer();
        setPunch(false);
        getTimer();
        dispatch(isLoader(false));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
  };

  const getTimer = async () => {
    try {
      dispatch(isLoader(true));
      const response = await GET_TIMER();
      if (response.data.result) {
        dispatch(isLoader(false));
        if (response.data.data.timer.status == "running") {
          setPunch(true);
          setTimerRunning(true);
          if (response.data.data.timer.running_duration.length == 4) {
            setHours(response.data.data.timer.running_duration.slice(0, 1));
            setMinutes(response.data.data.timer.running_duration.slice(2, 4));
            startTimer();
          } else if (response.data.data.timer.running_duration.length == 5) {
            setHours(response.data.data.timer.running_duration.slice(0, 2));
            setMinutes(response.data.data.timer.running_duration.slice(3, 5));
            startTimer();
          }
        } else {
          setPunch(false);
          setTimerRunning(false);
          if (response.data.data.timer.running_duration.length == 4) {
            setHours(response.data.data.timer.running_duration.slice(0, 1));
            setMinutes(response.data.data.timer.running_duration.slice(2, 4));
            stopTimer();
          } else if (response.data.data.timer.running_duration.length == 5) {
            setHours(response.data.data.timer.running_duration.slice(0, 2));
            setMinutes(response.data.data.timer.running_duration.slice(3, 5));
            stopTimer();
          }
        }

        console.log("length", response.data.data.timer.running_duration.length);
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
  };

  const PunchIn = async () => {
    const postData = {
      name: "name",
    };
    try {
      dispatch(isLoader(true));
      const response = await PUNCH_IN();
      if (response.data.result) {
        setPunch(true);
        localStorage.setItem(
          "punchInData",
          JSON.stringify(response.data.data.timer)
        );
        startTimer();
        dispatch(isLoader(false));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
  };

  const getLeaves = async () => {
    dispatch(isLoader(true));
    try {
      const response = await GET_LEAVES();
      if (response.data.result) {
        dispatch(isLoader(false));
        setLeaves(response.data.data);
        console.log(response.data.data);
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  useEffect(() => {
    getLeaves();
    getTimer();
  }, []);

  const getDashboard = async () => {
    try {
      dispatch(isLoader(true));
      const response = await GET_HR_DASHBOARD();
      if (response.data.result) {
        dispatch(isLoader(false));
        setDashboardData(response.data.data);
        console.log(response.data.data);
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDashboard();
  }, []);

  useEffect(() => {
    // Cleanup interval on component unmount
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <>
    <section>
      <div className="container">
        {/* <div className="row mt-4">
          <div className="col-lg-12">
            <div className="new_section shadow"> */}
              <Notification/>
            {/* </div>
          </div>
        </div> */}
      </div>
    </section>
      <section>
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="new_section shadow">
                <div className="">
                  <tbody>
                    <tr className="border-bottom">
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className=" hravatar">
                            <img
                              src={userLogo}
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="me-3 mt-0 mt-sm-1 d-block">
                            <h6 className="mb-0">Faith Harris</h6>
                            <div className="clearfix"></div>
                            <small className="text-muted">UI designer</small>
                          </div>
                        </div>
                      </td>
                      <td className="text-start fs-13">5 years</td>
                      <td className="text-start fs-13">
                        <i className="feather feather-map-pin text-muted me-2"></i>
                        USA
                      </td>
                      <td className="text-end">
                        <a
                          className="action-btns"
                          data-bs-toggle="tooltip"
                          aria-label="Delete"
                        >
                          <i className="fa fa-eye text-danger"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-start">
              <div class="heading-text-msg">
                <h3 className="mt-3">Welcome {user.name}!</h3>
                <h5>
                  <i class="fa  fa-gauge"></i> HRMS Dashboard
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="new_section shadow">
                <div className="new_section_inner">
                  <i className="fas fa-calendar new_section_icon"></i>
                  <h5 className="font-weight-bold">Upcoming Events</h5>
                  <a href="#" className="new_section_t">
                    View All
                  </a>
                </div>
                <div className="row">
                  {dashboardData
                    ? dashboardData.upcoming_events
                        .filter((item, idx) => idx < 5)
                        .map((x) => {
                          return (
                            <div className="col-lg-12">
                              <div className="border d-flex justify-content-between align-items-center bg-white px-4 py-2">
                                <div className="d-flex align-items-center ">
                                  <a href="#" className="hravatar">
                                    <img src={userLogo} alt="userimg" />
                                  </a>
                                  <div className="hrmr-3">
                                    <h6 className="mb-0 font-weight-bold">
                                      Jens Brincker{" "}
                                      <p className="hrtext-muted-5">
                                        (HR Specialist)
                                      </p>
                                    </h6>

                                    <p className="hrtext-muted-5">
                                      <i class="fas fa-cake-candles"></i>{" "}
                                      Birthday
                                    </p>
                                    <p className="hrtext-muted-6">
                                      Monday, 7 Aug 2023
                                    </p>
                                  </div>
                                </div>
                                <div className="text-end">
                                  <button
                                    type="button"
                                    className="hrdetailbtn rounded"
                                  >
                                    Wish Them
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })
                    : null}

                  {/* <div className="col-lg-12 mt-3">
                    <div className="border d-flex justify-content-between align-items-center bg-white px-4 py-2">
                      <div className="d-flex align-items-center ">
                        <a href="#" className="hravatar">
                          <img src={userLogo} alt="userimg" />
                        </a>
                        <div className="hrmr-3">
                          <h6 className="mb-0 font-weight-bold">
                            Jens Brincker{" "}
                            <p className="hrtext-muted-5">(HR Specialist)</p>
                          </h6>

                          <p className="hrtext-muted-5">
                            <i className="fa fa-cake-candles"></i> Birthday
                          </p>
                          <p className="hrtext-muted-6">Monday, 7 Aug 2023</p>
                        </div>
                      </div>
                      <div className="text-end">
                        <button type="button" className="hrdetailbtn rounded">
                          Wish Them
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-md-0">
              <div className="shadow sechrcard">
                <div>
                  <div className="new_section_inner sechrcard-body">
                    <i className="fas fa-plane new_section_icon"></i>
                    <h5 className="font-weight-bold">Timesheet</h5>
                    <a href="#" className="new_section_t">
                      {punchInData.today_punchin.slice(0, 10)}
                      {/* 2024-08-13 */}
                    </a>
                  </div>

                  <div class="punch-info mt-3">
                    <div class="punch-hours">
                      <span>
                        <small>{`${String(hours).padStart(2, "0")} : ${String(
                          minutes
                        ).padStart(2, "0")}`}</small>
                      </span>
                    </div>
                  </div>
                  <div class="punch-btn-section mb-0">
                    <button
                      type="button"
                      onClick={PunchOut}
                      class={`btn mybtn punch-btn ${!punch ? "d-none" : null}`}
                    >
                      Punch Out
                    </button>
                    <button
                      type="button"
                      onClick={PunchIn}
                      class={`btn mybtn punch-btn ${punch ? "d-none" : null}`}
                    >
                      Punch In
                    </button>
                  </div>
                  <div className="border border-#e5e5e5 bg-white px-4 py-2 mt-1">
                    <div class="punch-det text-start">
                      <h6>Punch In at</h6>
                      <div className="puch_t">
                        <p>{punchInData.today_punchin.slice(0, 10)}</p>{" "}
                        <span>{punchInData.today_punchin.slice(11, 16)}</span>
                        {/* <p>2024-08-13</p> <span>09:25</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="sechrcard shadow">
                <div className="sechrcard-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="font-weight-bold">Pending / approval</h5>
                    <span className="badge-sec">
                      <p>5</p>
                    </span>
                  </div>
                </div>
                {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      data-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Time-off
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      data-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Time Attendance
                    </button>
                  </li>
                </ul> */}
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="table-responsive recent_jobs pt-2 pb-2 ps-2 pe-2 card-body">
                      <table className="table mb-0 text-nowrap">
                        <tbody>
                          {[1, 2, 3, 4].map((x) => {
                            return (
                              <tr className="border-bottom">
                                <td>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className=" hravatar">
                                      <img
                                        src={userLogo}
                                        alt="img"
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="me-3 mt-0 mt-sm-1 d-block">
                                      <h6 className="mb-0">Faith Harris</h6>
                                      <div className="clearfix"></div>
                                      <small className="text-muted">
                                        UI designer
                                      </small>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-start fs-13">5 years</td>
                                <td className="text-start fs-13">
                                  <i className="feather feather-map-pin text-muted me-2"></i>
                                  USA
                                </td>
                                <td className="text-end">
                                  <a
                                    className="action-btns"
                                    data-bs-toggle="tooltip"
                                    aria-label="Delete"
                                  >
                                    <i className="fa fa-eye text-danger"></i>
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <ul className="list-group">
                      {[1, 2, 3, 4].map(() => (
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center"
                          style={{ background: "transparent" }}
                        >
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="hravatar">
                              <img src={user} alt="img" className="img-fluid" />
                            </div>
                            <div className="me-3 mt-0 mt-sm-1 d-block">
                              <h6 className="mb-0" style={{ color: "black" }}>
                                Faith Harris
                              </h6>
                              <div className="clearfix"></div>
                              <small
                                className="text-muted"
                                style={{ color: "black" }}
                              >
                                UI designer
                              </small>
                            </div>
                          </div>
                          <span>1 day • Unpaid Time Off</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="table-responsive recent_jobs pt-2 pb-2 ps-2 pe-2 card-body">
                      <table className="table mb-0 text-nowrap">
                        <tbody>
                          <tr
                            className="border-bottom"
                            style={{ verticalAlign: "middle" }}
                          >
                            <td>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className=" hravatar">
                                  <img
                                    src={user}
                                    alt="img"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="me-3 mt-0 mt-sm-1 d-block">
                                  <h6 className="mb-0">Faith Harris</h6>
                                  <div className="clearfix"></div>
                                  <small className="text-muted">
                                    UI designer
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td className="text-start fs-13">5 years</td>
                            <td className="text-start fs-13">
                              <i className="feather feather-map-pin text-muted me-2"></i>
                              USA
                            </td>
                            <td className="text-end">
                              <a
                                className="action-btns"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Contact"
                                aria-label="Contact"
                              >
                                <i
                                  className="fa fa-phone text-primary"
                                  style={{ rotate: "90deg" }}
                                ></i>
                              </a>
                              <a
                                className="action-btns"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Mail"
                                aria-label="Mail"
                              >
                                <i className="fa fa-envelope text-primary"></i>
                              </a>
                              <a
                                className="action-btns"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i className="fa fa-trash text-danger"></i>
                              </a>
                            </td>
                          </tr>
                          <tr
                            className="border-bottom"
                            style={{ verticalAlign: "middle" }}
                          >
                            <td>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className=" hravatar">
                                  <img
                                    src={user}
                                    alt="img"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="me-3 mt-0 mt-sm-1 d-block">
                                  <h6 className="mb-0">Faith Harris</h6>
                                  <div className="clearfix"></div>
                                  <small className="text-muted">
                                    UI designer
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td className="text-start fs-13">5 years</td>
                            <td className="text-start fs-13">
                              <i className="feather feather-map-pin text-muted me-2"></i>
                              USA
                            </td>
                            <td className="text-end">
                              <a
                                className="action-btns"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Contact"
                                aria-label="Contact"
                              >
                                <i
                                  className="fa fa-phone text-primary"
                                  style={{ rotate: "90deg" }}
                                ></i>
                              </a>
                              <a
                                className="action-btns"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Mail"
                                aria-label="Mail"
                              >
                                <i className="fa fa-envelope text-primary"></i>
                              </a>
                              <a
                                className="action-btns"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i className="fa fa-trash text-danger"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-0">
              <div className="sechrcard shadow">
                <div className="sechrcard-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="font-weight-bold">Who's off today</h5>
                    <span className="badge-sec">
                      <p>
                        {dashboardData ? dashboardData.whos_off_today_count : 0}
                      </p>
                    </span>
                  </div>
                  {/* content part */}
                  {dashboardData
                    ? dashboardData.whos_off_today
                        .filter((item, i) => i < 3)
                        .map((x) => {
                          return (
                            <div className="border border-#e5e5e5 bg-white px-4 py-2 mt-3">
                              <div className="d-flex align-items-center">
                                <a href="#" className="hravatar">
                                  <img
                                    src={userLogo}
                                    alt="userimg"
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="hrmr-3">
                                  <h6 className="mb-0 font-weight-bold">
                                    {x.employee_detail.name}
                                  </h6>
                                  <span className="text-muted">
                                    {x.employee_detail.designation}
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center text-start mt-3">
                                <div className="w-50">
                                  <h6 className="mb-0">{x.start_date}</h6>
                                  <span className="text-sm text-muted">
                                    Leave Date
                                  </span>
                                </div>
                                <div className="w-50 text-end">
                                  <span className="d-inline-block py-1 px-3 text-sm text-white mybtn">
                                    {x.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })
                    : 0}

                  {/* load more button  */}
                  <div className="mt-4 text-center">
                    <button type="button" className="hrloadbtn rounded">
                      {" "}
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="col-lg-4">
              <div className="sechrcard shadow">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="font-weight-bold"> Notice Board</h5>
                  <span className="badge-sec">
                    <p>5</p>
                  </span>
                </div>

                <div className="border border-#e5e5e5 bg-white px-4 py-2 mt-3">
                  <div className="d-flex align-items-center">
                    <a href="#" className="hravatar">
                      <img src={userLogo} alt="userimg" />
                    </a>
                    <div className="hrmr-3">
                      <h6 className="mb-0 font-weight-bold">John Doe</h6>
                      <p className="hrtext-muted-5">
                        Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.
                      </p>
                      <p className="hrtext-muted-6">7 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="border border-#e5e5e5 bg-white px-4 py-2 mt-3">
                  <div className="d-flex align-items-center">
                    <a href="#" className="hravatar">
                      <img src={userLogo} alt="userimg" />
                    </a>
                    <div className="hrmr-3">
                      <h6 className="mb-0 font-weight-bold">John Doe</h6>
                      <p className="hrtext-muted-5">
                        Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.
                      </p>
                      <p className="hrtext-muted-6">7 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="border border-#e5e5e5 bg-white px-4 py-2 mt-3">
                  <div className="d-flex align-items-center">
                    <a href="#" className="hravatar">
                      <img src={userLogo} alt="userimg" />
                    </a>
                    <div className="hrmr-3">
                      <h6 className="mb-0 font-weight-bold">John Doe</h6>
                      <p className="hrtext-muted-5">
                        Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.
                      </p>
                      <p className="hrtext-muted-6">7 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-md-0">
              <div className="sechrcard shadow">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="font-weight-bold">Leave Requests</h5>
                  <span className="badge-sec">
                    <p>
                      {dashboardData ? dashboardData.leave_requests_count : 0}
                    </p>
                  </span>
                </div>
                {dashboardData
                  ? dashboardData.leave_requests
                      .filter((item, i) => i < 3)
                      .map((x) => {
                        return (
                          <div className="border border-#e5e5e5 bg-white px-4 py-2 mt-3">
                            <div className="d-flex align-items-center ">
                              <a href="#" className="hravatar">
                                <img src={userLogo} alt="userimg" />
                              </a>
                              <div className="hrmr-3">
                                <h6 className="mb-0 font-weight-bold">
                                  {x.employee_detail.name}
                                </h6>
                                <p className="hrtext-muted-5">{x.leave_type}</p>
                                <p className="hrtext-muted-6 text-start ">
                                  Leave From: {x.start_date} <br /> Leave to:{" "}
                                  {x.end_date}
                                </p>
                              </div>
                            </div>
                            <div className="text-end">
                              <button
                                type="button"
                                className="hrdetailbtn rounded"
                              >
                                View Detail
                              </button>
                            </div>
                          </div>
                        );
                      })
                  : null}
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-md-0">
              <div className="sechrcard shadow">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="font-weight-bold">My Time Off</h5>
                </div>
                {dashboardData
                  ? dashboardData.my_time_off.map((x) => {
                      return (
                        <div className="border border-#e5e5e5 bg-white px-4 py-2 mt-3">
                          <div className="d-flex align-items-center ">
                            <a href="#" className="hravatar">
                              <img src={userLogo} alt="userimg" />
                            </a>
                            <div className="hrmr-3">
                              <h6 className="mb-0 font-weight-bold">
                                {x.employee_detail.name}
                                <p className="hrtext-muted-5">
                                  (HR Specialist)
                                </p>
                              </h6>
                              <p className="hrtext-muted-5">
                                {/* <i className="fa fa-cake-candles"></i> */}
                                {x.leave_type}
                                (Unpaid)
                              </p>
                              <p className="hrtext-muted-6 text-start">
                                Monday, {x.start_date}
                              </p>
                            </div>
                          </div>
                          <div className="text-end">
                            <button
                              type="button"
                              className="hrdetailbtn rounded"
                            >
                              {" "}
                              {x.status}
                            </button>
                          </div>
                        </div>
                      );
                    })
                  : null}

                {/* <div className="border border-#e5e5e5 bg-white px-4 py-2 mt-3">
                  <div className="d-flex align-items-center ">
                    <a href="#" className="hravatar">
                      <img src={userLogo} alt="userimg" />
                    </a>
                    <div className="hrmr-3">
                      <h6 className="mb-0 font-weight-bold">
                        Jens Brincker{" "}
                        <p className="hrtext-muted-5">(Designer)</p>
                      </h6>

                      <p className="hrtext-muted-5">Unpaid Time Off</p>
                      <p className="hrtext-muted-6 text-start ">
                        Monday, 7 May 2023
                      </p>
                    </div>
                  </div>
                  <div className="text-end">
                    <button type="button" className="hrdetailbtn rounded">
                      {" "}
                      Pending=
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminHome;
