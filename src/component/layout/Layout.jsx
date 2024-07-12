import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../asset/images/orpect1.png";
import user from "../../asset/images/account.png";
import "../../asset/css/dashboard.css";

const Layout = () => {
  return (
    // <header id="header">
    //     <nav className="navbar navbar-expand-lg">
    //       <div className="container">

    //         <Link className="navbar-brand" to="/hrms">
    //           <img src={logo} alt="logo" width={150} />
    //         </Link>

    //         <button
    //           className="navbar-toggler navbar-toggler-right"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbar1"
    //         >
    //           <span></span>
    //           <span></span>
    //           <span></span>
    //         </button>

    //         <div className="collapse navbar-collapse" id="navbar1">
    //           <ul className="navbar-nav mx-auto mb-2 mb-lg-0 menu-item">
    //             <li className="nav-item ">
    //               <NavLink
    //                 activeclassname="active"
    //                 className="nav-link"
    //                 to=" "
    //               >
    //                 Employees
    //               </NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <NavLink
    //                 activeclassname="active"
    //                 className="nav-link"
    //                 to=" "
    //               >
    //                 Checklists
    //               </NavLink>
    //             </li>

    //             <li className="nav-item">
    //               <NavLink
    //                 activeclassname="active"
    //                 className="nav-link"
    //                 to=" "
    //               >
    //                 Time Off
    //               </NavLink>
    //             </li>
    //             <li>
    //             <NavLink
    //                 activeclassname="active"
    //                 className="nav-link"
    //                 to=" "
    //               > Attendance
    //                </NavLink>

    //               </li>
    //               <li>
    //             <NavLink
    //                 activeclassname="active"
    //                 className="nav-link"
    //                 to=" "
    //               >Performance
    //                </NavLink>

    //               </li>
    //               <li>
    //             <NavLink
    //                 activeclassname="active"
    //                 className="nav-link"
    //                 to=" "
    //               >Recruitment
    //                </NavLink>

    //               </li>
    //           </ul>
    //         </div>
    //         <span className="d-flex align-items-center ">

    //           <ul className="navbar-nav ms-auto user-profile d-md-inline-block">
    //             <li className="nav-item dropdown">
    //               <div
    //                 className="nav-link"
    //                 id="navbarDropdown"
    //                 to="#"
    //                 role="button"
    //                 data-bs-toggle="dropdown"
    //                 aria-expanded="false"
    //                 style={{ margin: "0" }}
    //               >
    //                 <div className="profile-user">
    //                   <div className="profile-user-h">
    //                     <a to="">
    //                       <img
    //                         src={user}
    //                         alt="profile"
    //                       />
    //                     </a>
    //                   </div>
    //                 </div>
    //               </div>
    //               <ul
    //                 className="dropdown-menu dropdown-menu-end profiledr  opdown"
    //                 aria-labelledby="navbarDropdown"
    //               >
    //                 <li>
    //                   <Link className="dropdown-item mydropdown" to=" ">
    //                     My Profile
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link
    //                     className="dropdown-item mydropdown"

    //                   >
    //                     Logout
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </li>
    //           </ul>
    //         </span>

    //       </div>
    //     </nav>
    //   </header>

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
                <ul
                  className="dropdown-menu dropdown-menu-end droplogin1"
                >
                  <li>
                    <NavLink
                      activeClassName="active" 
                  className="dropdown-item dropbtn-txt"    to=" "
                    > 
                Profile
                    </NavLink>
                  </li>
                  <li>
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

export default Layout;
