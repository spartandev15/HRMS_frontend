import React, { useEffect, useState } from "react";
import user from "../../asset/images/profile.png";
import $ from "jquery";
import {
  GET_PROFILE,
  UPDATE_PROFILE_IMAGE,
  UPDATE_PROFILE_INFORMATION,
} from "../../api/Api";
import { useDispatch } from "react-redux";
import { isLoader, IsToast, updateProfile } from "../../store/actions";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("")

  const navigate = useNavigate();

  const [profileImageFile, setprofileImageFile] = useState();

  const oldData = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState({
    fullname: oldData.name || "",
    email: oldData.email || "",
    employee_id: oldData.emp_id || "",
    date_of_joining: oldData.joining_date || "",
    tax_number: oldData.tax_number || "",
    date_of_birth: oldData.dob || "",
    phone_number: oldData.phone_number || "",
    position: oldData.job_title || "",
    address: oldData.address || "",
    profile_photo: oldData.profile_photo || "",
  });

  const getProfile = async () => {
    try {
      const response = await GET_PROFILE();
      if (response.data.result) {
        console.log(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSave = async (e) => {
    e.preventDefault();
    const postData = {
      name: data.fullname,
      email: data.email,
      emp_id: data.employee_id,
      joining_date: data.date_of_joining,
      tax_number: data.tax_number,
      dob: data.date_of_birth,
      phone: data.phone_number,
      job_title: data.position,
      profile_photo: data.profile_photo,
      address: data.address,
    };
    try {
      dispatch(isLoader(true));
      const response = await UPDATE_PROFILE_INFORMATION(postData);
      if (response.data.status) {
        $(".editable-form1").hide();
        $("#editButton1").show();
        $(".readonly-form1").show();
        $(".readonly-form2").show();
        $("#editButton2").show();
        $("#cancelButton2").hide();
        dispatch(isLoader(false));
        console.log(response.data.message);
      }
      dispatch(isLoader(false));
    } catch (err) {
      dispatch(isLoader(false));
      console.log(err);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const Value = e.target.value;
    setData({ ...data, [name]: Value });
  };

  //  // Event Listner function for form
  $(document).ready(function () {
    $("#editButton1").click(function () {
      $(".editable-form1").show();
      $(".readonly-form1").hide();
      $(".readonly-form2").hide();
      $("#editButton1").hide();
      $("#cancelButton1").show();
      $("#cancelButton2").show();
    });

    // $("#cancelButton1").click(function () {
    //   $(".editable-form1").hide();
    //   $(".readonly-form1").show();
    //   $("#editButton1").show();
    //   $("#cancelButton1").hide();
    // });
  });

  //  // Event Listner function for form
  $(document).ready(function () {
    // $("#editButton2").click(function () {
    //   $(".editable-form2").show();
    //   $(".readonly-form2").hide();
    //   $("#editButton2").hide();
    //   $("#cancelButton2").show();
    // });

    $("#cancelButton2").click(function () {
      $(".editable-form1").hide();
      $("#editButton1").show();
      $(".readonly-form1").show();
      $(".readonly-form2").show();
      $("#editButton2").show();
      $("#cancelButton2").hide();
    });
  });

  const profileUpload = async (e) => {
    // dispatch(isLoader(true))
    setprofileImageFile(e.target.files[0]);
    const [file] = document.getElementById("newProfilePhoto").files;
    if (file) {
      dispatch(isLoader(true));
      try {
        const postData = {
          profile_photo: e.target.files[0],
        };
        const response = await UPDATE_PROFILE_IMAGE(postData);
        if (response.data.status) {
          console.log(response.data.user.profile_photo);
          dispatch(updateProfile(response.data.user));
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }
      } catch (err) {
        console.log(err);
      }

      // const customConfig = {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     // "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
      // let postImage = {
      //   profile_photo: e.target.files[0],
      // }
      // dispatch(isLoader(true))
      // await axios
      //   .post(
      //     `${process.env.REACT_APP_API_URL}/api/update-profile-photo-admin`,
      //     postImage,
      //     customConfig
      //   )
      //   .then((res) => {
      //     axios
      //       .get(`${process.env.REACT_APP_API_URL}/api/get-user`, {
      //         headers: { Authorization: `Bearer ${token}` },
      //       })
      //       .then((res) => {
      //         dispatch(userData(res.data.user))
      //       })
      //       .catch((err) => {
      //         dispatch(isLoader(false))
      //         // navigate("/login")
      //       })
      //   })
      //   .catch((err) => {
      //     dispatch(isLoader(false))
      //     console.log(err)
      //   })
      let image_url = URL.createObjectURL(file);
      dispatch(IsToast("Profile picture updated Successfully!"));
      setData({ ...data, profile_photo: image_url });
      dispatch(isLoader(false));
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

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
                  <div className="d-flex justify-content-center">
                    <div className="pic-holder-account">
                      <img
                        src={data.profile_photo}
                        alt="UploadPhoto"
                        id="blah1"
                        className="pic"
                      />
                      <label
                        htmlFor="newProfilePhoto"
                        className="upload-file-block"
                      >
                        <input
                          id="newProfilePhoto"
                          className="form-control"
                          type="file"
                          onChange={profileUpload}
                          accept="image/*"
                        />
                        <span className="text-center">
                          <i className="fa fa-camera fa-2x"></i>
                          <br />
                          Update <br /> Profile Photo
                        </span>
                      </label>
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
                        style={{ color: "#134d75", font: "bold" }}
                      >
                        S0001
                      </h6>
                    </div>
                  </div>
                  <hr
                    class="hr"
                    style={{ marginBlock: "0.2rem", opacity: "0.1" }}
                  />
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div class="small text-muted" href="tel:+1-7807114210">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        &nbsp;+1-7807114210
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div
                        class="small text-muted"
                        href="mailto:himanshu@spartanbots.com"
                      >
                        <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
                        himanshu@spartanbots.com
                      </div>
                    </div>
                  </div>
                  <hr
                    class="hr"
                    style={{ marginBlock: "0.2rem", opacity: "0.1" }}
                  />
                  <div className="row mt-2">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <h6
                        className="profileimgboxcompanydetail1 text-capitalize"
                        style={{ color: "#134d75", font: "bold" }}
                      >
                        Department
                      </h6>
                      <div class="small text-muted">Admin</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <h6
                        className="profileimgboxcompanydetail1 text-capitalize"
                        style={{ color: "#134d75", font: "bold" }}
                      >
                        Line Manager
                      </h6>
                      <div class="small text-muted">Ramesh Kumar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-9 col-sm-12 ">
              <nav className="navbar navbar-white bg-white mb-3 py-0 px-4  border">
                <div className="d-flex gap-4">
                  <span
                    className={
                      activeTab === "General"
                        ? "profile-nav"
                        : "profile-nav-hover"
                    }
                    onClick={() => setActiveTab("General")}
                  >
                    General
                  </span>
                  <span
                    className={
                      activeTab === "Job" ? "profile-nav" : "profile-nav-hover"
                    }
                    onClick={() => setActiveTab("Job")}
                  >
                    Job
                  </span>
                  <span
                    className={
                      activeTab === "Qualifications"
                        ? "profile-nav"
                        : "profile-nav-hover"
                    }
                    onClick={() => setActiveTab("Qualifications")}
                  >
                    Qualifications
                  </span>
                  <span
                    className={
                      activeTab === "Salary"
                        ? "profile-nav"
                        : "profile-nav-hover"
                    }
                    onClick={() => setActiveTab("Salary")}
                  >
                    Salary
                  </span>
                </div>
              </nav>
              {activeTab === "General" ? (
                <>
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
                                  <option value="New designer">
                                    New designer
                                  </option>
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
                                style={{ margin: "0px" }}
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
                            <h6 class="profileimgboxcompanydetail2">
                              20-11-2023
                            </h6>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="addlabelcard2">Tax Number</p>
                            <h6 class="profileimgboxcompanydetail2">234543</h6>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="addlabelcard2">Date of Birth</p>
                            <h6 class="profileimgboxcompanydetail2">
                              29-06-1998
                            </h6>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="addlabelcard2">Phone Number</p>
                            <h6 class="profileimgboxcompanydetail2">
                              2344565442
                            </h6>
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
                  <div class="editable-form1" style={{ display: "none" }}>
                    <form novalidate="" onSubmit={(e) => e.preventDefault()}>
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="form-outline">
                            <input
                              type="text"
                              name="fullname"
                              onChange={handleInput}
                              class="form-control"
                              required=""
                              value={data.fullname}
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
                              onChange={handleInput}
                              class="form-control"
                              required=""
                              value={data.email}
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
                              name="employee_id"
                              onChange={handleInput}
                              class="form-control"
                              required=""
                              value={data.employee_id}
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
                              name="date_of_joining"
                              onChange={handleInput}
                              class="form-control"
                              required=""
                              value={data.date_of_joining}
                            />
                            <label
                              class="form-label"
                              style={{ background: "#fff" }}
                            >
                              Date of Joining &nbsp;
                              <span class=" required">*</span>
                            </label>
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
                                  Country
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
                                  State
                                  <span className=" required">*</span>
                                </label>
                              </div>
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
                                  City
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
                                  Zip Code
                                  <span className=" required">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div class="col-lg-12 text-start">
                              <button type="submit" class="btn infoedit3">
                                Save
                              </button>
                              &nbsp;
                              <p
                                id="cancelButton2"
                                class="btn infoedit4"
                                style={{ margin: "0px" }}
                              >
                                Cancel
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="form-outline">
                            <input
                              type="text"
                              name="tax_number"
                              onChange={handleInput}
                              class="form-control"
                              required=""
                              value={data.tax_number}
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
                              name="date_of_birth"
                              onChange={handleInput}
                              class="form-control"
                              required=""
                              value={data.date_of_birth}
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
                              name="phone_number"
                              onChange={handleInput}
                              class="form-control"
                              required=""
                              value={data.phone_number}
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
                              onChange={handleInput}
                              value={data.position}
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

                      {/* <div class="row mt-2">
                        <div class="col-lg-12 text-start">
                            <button type="submit" class="btn infoedit3">
                              Save
                            </button>
                            &nbsp;
                            <p
                              id="cancelButton3"
                              class="btn infoedit4"
                              style={{ margin: "0px" }}
                            >
                              Cancel
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div class="readonly-form1">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Full Name</p>
                        <h6
                          class="profileimgboxcompanydetail2"
                          style={{ textTransform: "capitalize" }}
                        >
                          {data.fullname}
                        </h6>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">E-Mail</p>
                        <h6 class="profileimgboxcompanydetail2">
                          {data.email}
                        </h6>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Employee Id</p>
                        <h6 class="profileimgboxcompanydetail2">
                          {data.employee_id}
                        </h6>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Date of Joining</p>
                        <h6 class="profileimgboxcompanydetail2">
                          {data.date_of_joining}
                        </h6>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Tax Number</p>
                        <h6 class="profileimgboxcompanydetail2">
                          {data.tax_number}
                        </h6>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Date of Birth</p>
                        <h6 class="profileimgboxcompanydetail2">
                          {data.date_of_birth}
                        </h6>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Phone Number</p>
                        <h6 class="profileimgboxcompanydetail2">
                          {data.phone_number}
                        </h6>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="addlabelcard2">Position</p>
                        <h6 class="profileimgboxcompanydetail2">
                          {data.position}
                        </h6>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

              <div className="viewem mt-4 border">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12  ">
                    <h5 className="infoedit">
                      <svg height="1em" viewBox="0 0 384 512">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>{" "}
                      &nbsp; Address
                    </h5>
                    {/* <div className="infoedit1">
                      <button id="editButton2" className="infoedit3">
                        Edit
                      </button>
                    </div> */}
                  </div>
                  <div className="editable-form1" style={{ display: "none" }}>
                    <form noValidate="noValidate" onSubmit={onSave}>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-outline">
                            <textarea
                              className="form-control"
                              name="address"
                              onChange={handleInput}
                              placeholder=" "
                              value={data.address}
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

                      {/* <div className="row">
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
                      </div> */}
                      <div className="row mt-4">
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            class="btn infoedit3"
                            onClick={onSave}
                          >
                            Save
                          </button>
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
                        {data.address}
                      </h6>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <p className="addlabelcard2">ABC</p>
                      <h6 className="profileimgboxcompanydetail2">dsddsdsds</h6>
                    </div>
                  </div>
                </>
              )  : activeTab === "Salary" ? (
                <div className="viewem pd-4 border  ">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12  ">
                      <h5 className="infoedit">
                      <i class="fa fa-wallet"></i>{" "}
                        &nbsp; Salary Detail 
                      </h5>
                      <div className="infoedit1">
                        <button id="editButton3" className="infoedit3">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="editable-form3" style={{ display: "none" }}>
                      <form noValidate="noValidate">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="text"
                                class="form-control"
                                required=""
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                               Salary Component
                               &nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="date"
                                name="phone"
                                class="form-control"
                                required=""
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Pay Frequency
                                &nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="text"
                                name="phone"
                                class="form-control"
                                required=""
                                value="Development"
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Currency &nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                            <input
                                type="text"
                                name="phone"
                                class="form-control"
                                required=""
                                value="Development"
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Amount &nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="text"
                                class="form-control"
                                required=""
                                value="01236547895"
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Account Number
                                &nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="text"
                                class="form-control"
                                required=""
                                value="Saving"
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Account Type&nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="text"
                                class="form-control"
                                required=""
                                value="HDFC Bank"
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Bank Name
                                &nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="text"
                                class="form-control"
                                required=""
                                value="HDFC0000125"
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                               IFSC Code&nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div class="col-lg-12 text-start">
                            <button type="submit" class="btn infoedit3">
                              Save
                            </button>
                            &nbsp;
                            <p
                              id="cancelButton3"
                              class="btn infoedit4"
                              style={{ margin: "0px" }}
                            >
                              Cancel
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="readonly-form3">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Salary Component</p>
                        <h6 className="profileimgboxcompanydetail2">
                          ABC
                        </h6>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Pay Frequency  </p>
                        <h6 className="profileimgboxcompanydetail2">
                          Monthly
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Currency</p>
                        <h6 className="profileimgboxcompanydetail2">
                        INR
                        </h6>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Amount</p>
                        <h6 className="profileimgboxcompanydetail2">
                          15000
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Account Number</p>
                        <h6 className="profileimgboxcompanydetail2">
                        1236547890
                        </h6>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Account Type</p>
                        <h6 className="profileimgboxcompanydetail2">
                        Saving
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Bank Name</p>
                        <h6 className="profileimgboxcompanydetail2">
                       HDFC Bank
                        </h6>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">IFSC Code</p>
                        <h6 className="profileimgboxcompanydetail2">
                       HDFC0136542
                        </h6>
                      </div>
                    </div>
                  </div> */}
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
