import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../asset/images/orpect1.png";
import user from "../../asset/images/account.png";
import "../../asset/css/dashboard.css";
import { LOGOUT_API } from "../../api/Api";
import { useDispatch } from "react-redux";
import { isLoader } from "../../store/actions";

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogout = async () => {
    try {
      dispatch(isLoader(true))
      const response = await LOGOUT_API();
      if(response.data.result){
        dispatch(isLoader(false))
        localStorage.removeItem("token")
        navigate("/login")
      }
    } catch (err) {
      dispatch(isLoader(false))
      console.log(err);
    }
  };

  return (
    <header className="navheader">
      <nav className="navbar navbar-expand-lg sticky-top navbar-light navbar-fixed-top">
        <div className="container">
          <Link className="navbar-brand logobar" href="/">
            {" "}
            <img src={logo} alt="Orpect" width={150} />
          </Link>

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
              <li className="nav-item ">
                <NavLink activeclassname="active" className="nav-link" to=" ">
                  Employees
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to=" ">
                  Checklists
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to=" ">
                  Time Off
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" className="nav-link" to=" ">
                  {" "}
                  Attendance
                </NavLink>
              </li>

              <li>
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
                src={user}
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
                  to=" "
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
