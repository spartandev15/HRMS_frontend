import React, { useEffect, useState } from "react";
import user from "../../../asset/images/profile.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_EMPLOYEE, GET_EMPLOYEE, GET_PROFILE } from "../../../api/Api";
import { useDispatch } from "react-redux";
import { isLoader, IsToast } from "../../../store/actions";

const AllEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const Arraytopopulate = [1, 2, 3, 4, 5, 6];

  const data = JSON.parse(localStorage.getItem("allEmployeeData")) || [];

  console.log(data);

  const getData = async () => {
    dispatch(isLoader(true));
    try {
      const response = await GET_EMPLOYEE();
      if (response.data.result) {
        console.log(response.data.employee);
        localStorage.setItem(
          "allEmployeeData",
          JSON.stringify(response.data.employee)
        );
        dispatch(isLoader(false));
        dispatch(IsToast("Success"));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
  };

  const onViewUserDetails = async (id) => {
    try {
      dispatch(isLoader(true));
      const response = await GET_PROFILE(id);
      if (response.data.result) {
        dispatch(isLoader(false));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log("Employee Profile data: ", response.data.user);
        navigate("/admin_dashboard/employee_detail");
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
      console.log(err);
    }
  };

  const onDelete = async (ID) => {
    dispatch(isLoader(true));
    try {
      const response = await DELETE_EMPLOYEE(ID);
      if (response.data.result) {
        console.log(response.data);
        // localStorage.setItem(
        //   "allEmployeeData",
        //   JSON.stringify(response.data.employee)
        // );
        dispatch(isLoader(false));
        dispatch(IsToast("Success"));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
    // dispatch(IsToast("Delete Employee Functionality is Coming Soon!"));
    // dispatch(isLoader(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row py-3">
            <div className="col-4  text-start">
              <div class="heading-text-msg">
                <h5 class="m-0">Employee</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 ">
              <input
                type="search"
                class="form-control"
                placeholder="Employee Id"
              />
            </div>
            <div className="col-lg-3 col-md-3 ">
              <input
                type="search"
                class="form-control"
                placeholder="Employee Name"
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <select className="form-control">
                <option selected disabled>
                  Select
                </option>
                <option>Web Designer</option>
                <option>Web Development</option>
              </select>
            </div>
            <div className="col-lg-3 col-md-3 text-end">
              <button className="btn mybtn">Search</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-4">
          <div className="row">
            {data
              ? data.map((x) => {
                  return (
                    <div
                      className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4"
                      key={x}
                      // onClick={() => navigate("/")}
                    >
                      <div className="profile-widget">
                        <div className="profile-img profile-images">
                          <a className="avatarimg" href="#">
                            <img src={x.employeeprofile || user} className="" alt="" />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
                          <a
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <i class="fa fa-ellipsis-v "></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#">
                              <span
                                onClick={() => onViewUserDetails(x.user_id)}
                              >
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </span>
                            </Link>
                            <Link className="dropdown-item" to="#">
                              <span onClick={() => onDelete(x.id)}>
                                <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                                Delete
                              </span>
                            </Link>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 p-1 text-ellipsis">
                          {x.first_name + " " + x.last_name}
                        </h4>
                        <h6 className="user-name m-t-6 mb-0 text-ellipsis">
                          {x.employee_id}
                        </h6>
                        <div className="small text-muted">{x.designation}</div>
                        <div className="small text-muted">
                          <i className="fa fa-phone"></i>&nbsp;{x.phone}
                        </div>
                        <div
                          className="small text-muted"
                          href={`mailto:${x.email}`}
                        >
                          <i className="fa fa-envelope"></i>&nbsp;
                          {x.email}
                        </div>
                        <hr
                          class="hr"
                          style={{ marginBlock: "0.5rem", opacity: "0.1" }}
                        />
                        <div className="small text-muted">
                          Line Manager - {x.line_manager}
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllEmployee;
