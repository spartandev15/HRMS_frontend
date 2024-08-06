import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../asset/images/orpect1.png";
import user from "../../asset/images/account.png";
import "../../asset/css/dashboard.css";
import { GET_PROFILE, LOGOUT_API } from "../../api/Api";
import { useDispatch } from "react-redux";
import { isLoader } from "../../store/actions";

const Header = () => {
  const [Profile_data, setProfile_data] = useState("") 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const getProfile = async () => {
    try {
      const response = await GET_PROFILE();
      if (response.data.result) {
        console.log(response.data.user);
        setProfile_data(response.data.user.profile_photo)
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onLogout = async () => {
    try {
      dispatch(isLoader(true))
      const response = await LOGOUT_API();
      if(response.data.result){
        dispatch(isLoader(false))
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/login")
      }
    } catch (err) {
      dispatch(isLoader(false))
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile()
  }, [])
  

  return (
    <header className="navheader">
      <nav className="navbar navbar-expand-lg sticky-top navbar-light navbar-fixed-top">
        <div className="container">
          
          <div className="navbar-brand logobar" onClick={() => navigate("/dashboard")}>
            <img src={logo} alt="Orpect" width={150}/>
          </div>
          

          <button
            className="navbar-toggler navbar-toggler-right  "
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
            <ul className="navbar-nav navlink" id="navmenu">
              <li className="nav-item " onClick={() => navigate("/dashboard/manage_employee")}>
                <NavLink activeclassname="active" className="nav-link" to=" ">
                  Employees
                </NavLink>
              </li>
              <li className="nav-item"  onClick={() => navigate("/dashboard/checklist")}>
                <NavLink activeclassname="active" className="nav-link" to=" ">
                  Checklists
                </NavLink>
              </li>

              <li className="nav-item"  onClick={() => navigate("/dashboard/timeoff")}>
                <NavLink activeclassname="active" className="nav-link" to=" ">
                  Time Off
                </NavLink>
              </li>
              <li onClick={() => navigate("/dashboard/attendance")}>
                <NavLink activeclassname="active" className="nav-link" to=" ">
                  {" "}
                  Attendance
                </NavLink>
              </li>

              <li onClick={() => navigate("/dashboard/recruitment")}>
                <NavLink activeclassname="active" className="nav-link" to=" ">
                  Recruitment
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-item dropdown userdropdown  ">
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
                src={Profile_data? Profile_data : user}
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
                  to="viewPersonalDetails"
                >
                  Profile
                </NavLink>
              </li>
              <li onClick={onLogout}>
                <Link className="dropdown-item dropbtn-txt" to=" ">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
