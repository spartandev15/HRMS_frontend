import React, { useEffect, useState } from "react";
import user from "../../../asset/images/profile.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import { DELETE_EMPLOYEE, GET_EMPLOYEE } from "../../../api/Api";
import { useDispatch } from "react-redux";
import { isLoader, IsToast } from "../../../store/actions";

const AllEmployee = () => {
  const dispatch = useDispatch();
  // const Arraytopopulate = [1, 2, 3, 4, 5, 6];

  const data = JSON.parse(localStorage.getItem("allEmployeeData")) || [];

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

  const onDelete = async () => {
    dispatch(isLoader(true));
    // try {
    //   const response = await DELETE_EMPLOYEE(ID);
    //   if (response.data.result) {
    //     console.log(response.data);
    //     // localStorage.setItem(
    //     //   "allEmployeeData",
    //     //   JSON.stringify(response.data.employee)
    //     // );
    //     dispatch(isLoader(false));
    //     dispatch(IsToast("Success"));
    //   } else {
    //     dispatch(isLoader(false));
    //   }
    // } catch (err) {
    //   dispatch(isLoader(false));
    // }
    dispatch(IsToast("Delete Employee Functionality is Coming Soon!"))
    dispatch(isLoader(false));
  }

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
            {/* <div className="col-8 text-end">
              <div>
                <Popup
                  trigger={<button className="btn mybtn">Add Employee</button>}
                  className="popup_div"
                  position="top center"
                  modal
                  closeOnDocumentClick
                >
                  {(close) => (
                    <div className="modal-content p-4">
                      <div className="d-flex justify-content-between">
                        <h5>Add Employee</h5>
                        <p type="button" onClick={close}>
                        <i class="fa fa-x"></i>
                        </p>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                required
                              />
                              <label className="form-label" for="typeText">
                                {" "}
                                First Name<span className=" required">*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                required
                              />
                              <label className="form-label" for="typeText">
                                {" "}
                                Last Name
                              </label>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                required
                              />
                              <label className="form-label" for="typeText">
                                {" "}
                                User Name<span className=" required">*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-outline">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                required
                              />
                              <label className="form-label" for="typeText">
                                {" "}
                                Email<span className=" required">*</span>
                              </label>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-outline">
                              <input type="password" required />
                              <label className="form-label" for="typeText">
                                {" "}
                                Password<span className=" required">*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-outline">
                              <input type="password" required />
                              <label className="form-label" for="typeText">
                                {" "}
                                Confirm Password
                                <span className=" required">*</span>
                              </label>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-outline">
                              <input type="text" required />
                              <label className="form-label" for="typeText">
                                {" "}
                                Employee Id<span className=" required">*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-outline">
                              <input
                                type="date"
                                name="dateOfJoining"
                                required
                              />
                              <label className="form-label">
                                {" "}
                                Joining Date<span className=" required">*</span>
                              </label>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-outline">
                              <input type="text" required />
                              <label className="form-label" for="typeText">
                                {" "}
                                Phone Number<span className=" required">*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-outline">
                              <input type="password" required />
                              <label className="form-label" for="typeText">
                                {" "}
                                Designation<span className=" required">*</span>
                              </label>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="row">
                          <div className="col-lg-12 text-center">
                            <button className="btn mybtn">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </Popup>
              </div>
            </div> */}
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
                    >
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a className="avatarimg" href="#">
                            <img src={user} alt="" />
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
                            <Link
                              className="dropdown-item"
                              to="viewPersonalDetails"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                            >
                              <i className="fa-regular fa-trash-can m-r-5" onClick={onDelete()}></i>{" "}
                              Delete
                            </Link>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 p-1 text-ellipsis">
                          <a href="#">{x.first_name + " " + x.last_name}</a>
                        </h4>
                        <h6 className="user-name m-t-6 mb-0 text-ellipsis">
                          <a href="#">{x.employee_id}</a>
                        </h6>
                        <div className="small text-muted">{x.designation}</div>
                        <div
                          className="small text-muted"
                          href="tel:+1-7807114210"
                        >
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
