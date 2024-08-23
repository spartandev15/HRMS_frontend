import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../asset/images/orpect1.png";
import user from "../../asset/images/account.png";
import "../../asset/css/dashboard.css";
import { GET_PROFILE, LOGOUT_API } from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { isLoader, userDetail } from "../../store/actions";

const Header = () => {
  const Profile_data = useSelector((s) => s.user_detail)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dashboardType, setDashboardType] = useState("Employee");
  const getProfile = async () => {
    try {
      const response = await GET_PROFILE();
      if (response.data.result) {
        dispatch(userDetail(response.data.user))
        // console.log(response.data.user);
        localStorage.setItem("myProfile", JSON.stringify(response.data.user));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const setRole = () => {
    const role = localStorage.getItem("role");
    if (role == "HR") {
      setDashboardType("Manager");
    } else {
      setDashboardType("Employee");
    }
  };
  const onLogout = async () => {
    try {
      dispatch(isLoader(true));
      const response = await LOGOUT_API();
      if (response.data.result) {
        dispatch(isLoader(false));
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        navigate("/login");
      }
    } catch (err) {
      dispatch(isLoader(false));
      console.log(err);
    }
  };

  useEffect(() => {
    setRole();
    getProfile();
  }, []);

  return (
    <header className="navheader">
      <nav className="navbar navbar-expand-lg sticky-top navbar-light navbar-fixed-top">
        <div className="container">
          <div
            className="navbar-brand logobar"
            onClick={() =>
              navigate(
                `/${
                  dashboardType == "Employee" ? "employee" : "admin"
                }_dashboard`
              )
            }
          >
            <img src={logo} alt="Orpect" width={150} />
          </div>

          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar1"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbar1"
          >
            {/* Manager Dashboard Menu */}
            <ul
              className={`navbar-nav navlink ${
                dashboardType === "Manager" ? "" : "d-none"
              }`}
              id="navmenu"
            >
              <li className="nav-item">
                <div activeClassName="active" className="nav-link" to="#">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Employee
                    </button>
                    <div className="nav-dropdown-menu dropdown-menu">
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("add_employee")}
                      >
                        Add Employee
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("all_employee")}
                      >
                        All Employee
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("employee_birthday")}
                      >
                        Employee Birthday
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("employee_work_anniversary")}
                      >
                        Employee Work Anniversary
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("provisional_employee")}
                      >
                        Provisional Employee
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("category")}
                      >
                        Category
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("documents")}
                      >
                        Documents
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div activeClassName="active" className="nav-link" to="#">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Leave
                    </button>
                    <div className="nav-dropdown-menu dropdown-menu">
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("pending_leave")}
                      >
                        Pending Leave
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("paid_leave")}
                      >
                        Paid Leave
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("unpaid_leave")}
                      >
                        Unpaid Leave
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div activeClassName="active" className="nav-link">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => navigate("over_time")}
                    >
                      Over Time
                    </button>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div activeClassName="active" className="nav-link" to="#">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Events
                    </button>
                    <div className="nav-dropdown-menu dropdown-menu">
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("add_event")}
                      >
                        Add Event
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("all_events")}
                      >
                        All Events
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div activeClassName="active" className="nav-link">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Recruitment
                    </button>
                    <div className="nav-dropdown-menu dropdown-menu">
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("vacancy")}
                      >
                        Vacancy
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("schedule_interview")}
                      >
                        Schedule Interview
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* Manager Dashboard Menu */}

            {/* Employee Dashboard Menu */}

            <ul
              className={`navbar-nav navlink ${
                dashboardType === "Employee" ? "" : "d-none"
              }`}
              id="navmenu"
            >
              <li className="nav-item">
                <div activeClassName="active" className="nav-link" to="#">
                  <div className="btn-group p-0">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </button>
                    <div className="nav-dropdown-menu dropdown-menu">
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("announcements")}
                      >
                        Announcements
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("calendar")}
                      >
                        Calendar
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div activeClassName="active" className="nav-link" to="#">
                  <div className="btn-group p-0">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Profile
                    </button>
                    <div className="nav-dropdown-menu dropdown-menu">
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("personal_information")}
                      >
                        Personal Information
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("contact_information")}
                      >
                        Contact Information
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("emergency_contacts")}
                      >
                        Emergency Contacts
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div activeClassName="active" className="nav-link">
                  <div className="btn-group p-0">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Leave & Attendance
                    </button>
                    <div className="nav-dropdown-menu dropdown-menu">
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("apply_for_leave")}
                      >
                        Apply for Leave
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("leave_balance")}
                      >
                        Leave Balance
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("leave_history")}
                      >
                        Leave History
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("attendance_history")}
                      >
                        Attendance History
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div activeClassName="active" className="nav-link ">
                  <div className="btn-group p-0">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Payroll & Benefits
                    </button>
                    <div className="nav-dropdown-menu dropdown-menu">
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("view_payslips")}
                      >
                        View Payslips
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("tax_information")}
                      >
                        Tax Information
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("view_benefits_package")}
                      >
                        View Benefits Package
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div activeClassName="active" className="nav-link ">
                  <div className="btn-group p-0">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Support & Settings
                    </button>
                    <div className="nav-dropdown-menu dropdown-menu">
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("contact_hr")}
                      >
                        Contact HR
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("submit_support_ticket")}
                      >
                        Submit Support Ticket
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("faqs")}
                      >
                        FAQs
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("update_login_information")}
                      >
                        Update Login Information
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("notification_preferences")}
                      >
                        Notification Preferences
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* Employee Dashboard Menu */}
          </div>

          <div className="nav-item d-flex justify-content-center dropdown userdropdown  ">
            <a
              className="action-btns-bell"
              data-bs-toggle="tooltip"
              aria-label="Delete"
            >
              <i class="fa-solid fa-bell" style={{ color: "#F6A21E" }}></i>
            </a>
            <div
              className="nav-link dropdownicon"
              id="navbarDropdown"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-bs-expanded="false"
            >
              <img
                // src={profile_photo ? profile_photo : user}
                src={Profile_data.profile_photo || user}
                className="droplogin"
                alt="user"
                height={35}
                width={35}
              />
            </div>
            <ul className="dropdown-menu dropdown-menu-end droplogin1">
              <li>
                <NavLink
                  activeClassName="active"
                  className="dropdown-item dropbtn-txt"
                  to="myProfile"
                >
                  Profile
                </NavLink>
              </li>
              <li onClick={onLogout}>
                <Link className="dropdown-item dropbtn-txt" to=" ">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
