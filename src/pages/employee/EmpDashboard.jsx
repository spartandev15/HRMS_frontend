import React, { useState } from "react";
import Layout from "../../component/layout/Layout";
import user from "../../asset/images/profile.png";
const EmpDashboard = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row py-3">
            <div className="col-lg-6 text-start">
              <div class="heading-text-msg">
                <h3 class="m-0">Employee</h3>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div>
                <button className="btn mybtn">Add Employee</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <input
                type="search"
                class="form-control"
                placeholder="Employee Id"
              />
            </div>
            <div className="col-lg-3">
              <input
                type="search"
                class="form-control"
                placeholder="Employee Name"
              />
            </div>
            <div className="col-lg-3">
              <select className="form-control">
                <option selected disabled>
                  Select
                </option>
                <option>Web Designer</option>
                <option>Web Development</option>
              </select>
            </div>
            <div className="col-lg-3 text-end">
              <button className="btn mybtn">Search</button>
            </div>
          </div>
        </div>
      </section>  
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-4">
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
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee"
                      href="#"
                    >
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                      href="#"
                    >
                      <i className="fa-regular fa-trash-can m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 p-1 text-ellipsis">
                  <a href="#">John Doe</a>
                </h4>
                <h6 className="user-name m-t-6 mb-0 text-ellipsis">
                  <a href="#">SP1234</a>
                </h6>
                <div className="small text-muted">Web Designer</div>
                <div className="small text-muted" href="tel:+1-7807114210">
                  <i className="fa fa-phone"></i>&nbsp;+1-7807114210
                </div>
                <div
                  className="small text-muted"
                  href="mailto:himanshu@spartanbots.com"
                >
                  <i className="fa fa-envelope"></i>&nbsp;
                  himanshu@spartanbots.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmpDashboard;
