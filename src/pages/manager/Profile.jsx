import React from "react";
import user from "../../asset/images/profile.png";
import $ from "jquery";

const Profile = () => {
  //  // Event Listner function for form
  $(document).ready(function () {
    $("#editButton1").click(function () {
      $(".editable-form1").show();
      $(".readonly-form1").hide();
      $("#editButton1").hide();
      $("#cancelButton1").show();
    });

    $("#cancelButton1").click(function () {
      $(".editable-form1").hide();
      $(".readonly-form1").show();
      $("#editButton1").show();
      $("#cancelButton1").hide();
    });
  });

  return (
    <>
      <section>
        <div className="container">
          <div className="row py-3">
            <div className="col-12  text-start">
              <div class="heading-text-msg">
                <h5 class="m-0">Profile</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="viewsinglem">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 pd-4 ">
              <div className="viewem border">
                <div className="employebox">
                  <div className="profile-pic-wrapper">
                    <div className="pic-holder">
                      <img className="pic" src={user} alt="profile" />
                    </div>
                  </div>
                  <div className="profileimgboxdetail">
                    <h5 style={{ textTransform: "capitalize" }}>John dee</h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12"></div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <h6
                        className="profileimgboxcompanydetail1 text-capitalize"
                        style={{ color: "#76C74B", font: "bold" }}
                      >
                        Active
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-9 col-sm-12 ">
              <div class="viewem border pd-4">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12  ">
                    <h5 class="infoedit">
                      <i class="fa  fa-address-card"></i> &nbsp; Information
                    </h5>
                    <div class="infoedit1">
                      <button id="editButton1" class="infoedit3">
                        Edit
                      </button>
                    </div>
                  </div>
                  <div class="editable-form1" style={{ display: "none" }}>
                    <form novalidate="">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="form-outline">
                            <input
                              type="text"
                              name="empName"
                              class="form-control"
                              required=""
                              value="Mohit"
                            />
                            <label
                              class="form-label"
                              style={{ background: "#fff" }}
                            >
                              Full Name &nbsp;
                              <span class=" required">*</span>
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="form-outline">
                            <input
                              type="text"
                              name="email"
                              class="form-control"
                              required=""
                              value="Mohit@gmail.com"
                            />
                            <label
                              class="form-label"
                              style={{ background: "#fff" }}
                            >
                              E-Mail &nbsp;<span class=" required">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="form-outline">
                            <input
                              type="text"
                              name="empId"
                              class="form-control"
                              required=""
                              value="16332"
                            />
                            <label
                              class="form-label"
                              style={{ background: "#fff" }}
                            >
                              Employee Id &nbsp;
                              <span class=" required">*</span>
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="form-outline">
                            <input
                              type="date"
                              name="dateOfJoining"
                              class="form-control"
                              required=""
                              value="2023-11-20"
                            />
                            <label
                              class="form-label"
                              style={{ background: "#fff" }}
                            >
                              Date of Joining &nbsp;
                              <span class=" required">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="form-outline">
                            <input
                              type="text"
                              name="pan_number"
                              class="form-control"
                              required=""
                              value="234543"
                            />
                            <label
                              class="form-label"
                              style={{ background: "#fff" }}
                            >
                              Tax Number &nbsp;
                              <span class=" required">*</span>
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="form-outline">
                            <input
                              type="date"
                              name="dateOfBirth"
                              class="form-control"
                              required=""
                              value="1998-06-29"
                            />
                            <label
                              class="form-label"
                              style={{ background: "#fff" }}
                            >
                              Date of Birth &nbsp;
                              <span class=" required">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="form-outline">
                            <input
                              type="text"
                              name="phone"
                              class="form-control"
                              required=""
                              value="2344565442"
                            />
                            <label
                              class="form-label"
                              style={{ background: "#fff" }}
                            >
                              Phone Number &nbsp;
                              <span class=" required">*</span>
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="form-outline">
                            <select
                              class="form-control main_inner_dropdown"
                              name="position"
                            >
                              <option value="Content Writer">
                                Content Writer
                              </option>
                              <option value="Human Resource Executive">
                                Human Resource Executive
                              </option>
                              <option value="Laravel Expert">
                                Laravel Expert
                              </option>
                              <option value="React Developer">
                                React Developer
                              </option>
                              <option value="React Developer1">
                                React Developer1
                              </option>
                              <option value="New designer">New designer</option>
                              <option value="Team lead">Team lead</option>
                              <option value="Web Development">
                                Web Development
                              </option>
                              <option value="web design">web design</option>
                              <option value="Front-End-Developer">
                                Front-End-Developer
                              </option>
                              <option value="Ceo">Ceo</option>
                            </select>
                            <label
                              class="form-label"
                              for="typeText"
                              style={{ background: "#fff" }}
                            >
                              Position &nbsp;
                              <span class=" required">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div class="row mt-2">
                        <div class="col-lg-12 text-start">
                            <button type="submit" class="btn infoedit3">
                              Save
                            </button>
                            &nbsp;
                            <p
                              id="cancelButton1"
                              class="btn infoedit4"
                              style={{margin: "0px"}}
                            >
                              Cancel
                            </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="readonly-form1">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Full Name</p>
                        <h6
                          class="profileimgboxcompanydetail2"
                          style={{ textTransform: "capitalize" }}
                        >
                          Mohit
                        </h6>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">E-Mail</p>
                        <h6 class="profileimgboxcompanydetail2">
                          Mohit@gmail.com
                        </h6>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Employee Id</p>
                        <h6 class="profileimgboxcompanydetail2">16332</h6>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Date of Joining</p>
                        <h6 class="profileimgboxcompanydetail2">20-11-2023</h6>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Tax Number</p>
                        <h6 class="profileimgboxcompanydetail2">234543</h6>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Date of Birth</p>
                        <h6 class="profileimgboxcompanydetail2">29-06-1998</h6>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Phone Number</p>
                        <h6 class="profileimgboxcompanydetail2">2344565442</h6>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Position</p>
                        <h6 class="profileimgboxcompanydetail2">
                          React Developer
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="viewem mt-4 border">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12  ">
                    <h5 className="infoedit">
                      <svg height="1em" viewBox="0 0 384 512">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>{" "}
                      &nbsp; Address
                    </h5>
                    <div className="infoedit1">
                      <button id="editButton2" className="infoedit3">
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="editable-form2" style={{ display: "none" }}>
                    <form noValidate="noValidate">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-outline">
                            <textarea
                              className="form-control"
                              name="permanentAddress"
                              placeholder=" "
                              value="values"
                              required
                            ></textarea>
                            <label
                              className="form-label"
                              for="typeText"
                              style={{ background: "#fff" }}
                            >
                              Address&nbsp;
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-outline"></div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-outline"></div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-outline">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <label
                              className="form-label"
                              style={{ background: "#fff" }}
                            >
                              First Name
                              <span className=" required">*</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-outline">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <label
                              className="form-label"
                              style={{ background: "#fff" }}
                            >
                              First Name
                              <span className=" required">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-12">
                          <button type="submit">Save</button>
                          &nbsp;
                          <p
                            id="cancelButton2"
                            className="btn infoedit4"
                            style={{ margin: "0" }}
                          >
                            Cancel
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="readonly-form2">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="addlabelcard2">Address</p>
                      <h6
                        className="profileimgboxcompanydetail2"
                        style={{ textAlign: "left" }}
                      >
                        My address
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <p className="addlabelcard2">ABC</p>
                      <h6 className="profileimgboxcompanydetail2">dsddsdsds</h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <p className="addlabelcard2">ABC</p>
                      <h6 className="profileimgboxcompanydetail2">dsddsdsds</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
