import React, { useEffect, useState } from "react";
import user from "../../asset/images/profile.png";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoader, IsToast, myProfile, updateProfile, userDetail } from "../../store/actions";
import {
  GET_PROFILE,
  UPDATE_ADDRESS,
  UPDATE_EDUCATION,
  UPDATE_EMERGENCY_CONTACT,
  UPDATE_JOB_DETAILS,
  UPDATE_PROFILE_IMAGE,
  UPDATE_PROFILE_INFORMATION,
  UPDATE_SALARY,
  UPDATE_WORK_EXPERIENCE,
} from "../../api/Api";

const MyProfile = () => {
  const dispatch = useDispatch();

  const user_role = localStorage.getItem("role") || "";

  const isMyProfile = localStorage.getItem("isMyProfile") || true;

  const Profile_data = useSelector((s) => s.my_profile) || {};

  const navigate = useNavigate();

  const [profileImageFile, setprofileImageFile] = useState();

  const oldData = JSON.parse(localStorage.getItem("myProfile"));

  // const [data, setData] = useState({
  //   fullname: oldData.name || "",
  //   email: oldData.email || "",
  //   employee_id: oldData.emp_id || "",
  //   date_of_joining: oldData.joining_date || "",
  //   tax_number: oldData.tax_number || "",
  //   date_of_birth: oldData.dob || "",
  //   phone_number: oldData.phone_number || "",
  //   position: oldData.job_title || "",
  //   address: oldData.address || "",
  //   profile_photo: Profile_data.profile_photo || "",
  // });

  const [information, setInformation] = useState({
    name: Profile_data.name ? Profile_data.name : "",
    email: Profile_data.email ? Profile_data.email : "",
    emp_id: Profile_data.emp_id ? Profile_data.emp_id : "",
    joining_date: Profile_data.joining_date ? Profile_data.joining_date : "",
    tax_number: Profile_data.tax_number ? Profile_data.tax_number : "",
    dob: Profile_data.dob ? Profile_data.dob : "",
    phone: Profile_data.phone ? Profile_data.phone : "",
    job_title: Profile_data.job_title ? Profile_data.job_title : "",
  });

  const [address, setAddress] = useState({
    address: Profile_data.address ? Profile_data.address : "",
    country: Profile_data.country ? Profile_data.country : "",
    state: Profile_data.state ? Profile_data.state : "",
    city: Profile_data.city ? Profile_data.city : "",
    zipcode: Profile_data.zipcode ? Profile_data.zipcode : "",
  });

  const [emergency_contact, setEmergency_contact] = useState({
    emergency_name: Profile_data.emergency_name
      ? Profile_data.emergency_name
      : "",
    relationship: Profile_data.relationship ? Profile_data.relationship : "",
    emergency_phone: Profile_data.emergency_phone
      ? Profile_data.emergency_phone
      : "",
  });

  const [job_details, setJob_details] = useState({
    job_title: Profile_data.job_title ? Profile_data.job_title : "",
    join_date: Profile_data.join_date ? Profile_data.join_date : "",
    job_category: Profile_data.job_category ? Profile_data.job_category : "",
    employment_status: Profile_data.employment_status
      ? Profile_data.employment_status
      : "",
    line_member: Profile_data.line_member ? Profile_data.line_member : "",
  });

  const [education, setEducation] = useState({
    education_level: Profile_data.education_level
      ? Profile_data.education_level
      : "",
    education_institute: Profile_data.education_institude
      ? Profile_data.education_institude
      : "",
    education_year: Profile_data.education_year
      ? Profile_data.education_year
      : "",
    education_score: Profile_data.education_score
      ? Profile_data.education_score
      : "",
  });

  const [experience, setExperience] = useState({
    work_experience_company: Profile_data.work_experience_company
      ? Profile_data.work_experience_company
      : "",
    work_experience_job_title: Profile_data.work_experience_job_title
      ? Profile_data.work_experience_job_title
      : "",
    work_experience_from: Profile_data.work_experience_from
      ? Profile_data.work_experience_from
      : "",
    work_experience_to: Profile_data.work_experience_to
      ? Profile_data.work_experience_to
      : "",
  });

  const [salary_details, setSalary_details] = useState({
    salary_component: Profile_data.salary_component
      ? Profile_data.salary_component
      : "",
    salary_pay_frequency: Profile_data.salary_pay_frequency
      ? Profile_data.salary_pay_frequency
      : "",
    salary_currency: Profile_data.salary_currency
      ? Profile_data.salary_currency
      : "",
    salary_amount: Profile_data.salary_amount ? Profile_data.salary_amount : "",
    salary_account_number: Profile_data.salary_account_number
      ? Profile_data.salary_account_number
      : "",
    salary_account_type: Profile_data.salary_account_type
      ? Profile_data.salary_account_type
      : "",
    salary_bank_name: Profile_data.salary_bank_name
      ? Profile_data.salary_bank_name
      : "",
    salary_ifsc_code: Profile_data.salary_ifsc_code
      ? Profile_data.salary_ifsc_code
      : "",
  });

  const getProfile = async () => {
    try {
      const response = await GET_PROFILE();
      if (response.data.result) {
        console.log(response.data.user);
        dispatch(myProfile(response.data.user))
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInformation = (e) => {
    const name = e.target.name;
    const Value = e.target.value;
    setInformation({ ...information, [name]: Value });
  };

  const onSubmitInformation = async (e) => {
    e.preventDefault();
    try {
      dispatch(isLoader(true));
      const response = await UPDATE_PROFILE_INFORMATION(information);
      if (response.data.result) {
        dispatch(isLoader(false));
        getProfile();
        dispatch(IsToast("Success"));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
  };

  const handleAddress = (e) => {
    const name = e.target.name;
    const Value = e.target.value;
    setAddress({ ...address, [name]: Value });
  };

  const onSubmitAddress = async (e) => {
    e.preventDefault();
    try {
      dispatch(isLoader(true));
      const response = await UPDATE_ADDRESS(address);
      if (response.data.result) {
        dispatch(isLoader(false));
        getProfile();
        dispatch(IsToast("Success"));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
  };

  const handleEmergency_contact = (e) => {
    const name = e.target.name;
    const Value = e.target.value;
    setEmergency_contact({ ...emergency_contact, [name]: Value });
  };

  const onSubmitEmergency_contact = async (e) => {
    e.preventDefault();
    try {
      dispatch(isLoader(true));
      const response = await UPDATE_EMERGENCY_CONTACT(emergency_contact);
      if (response.data.result) {
        dispatch(isLoader(false));
        getProfile();
        dispatch(IsToast("Success"));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
      console.log(err);
    }
  };

  const handleJob_details = (e) => {
    const name = e.target.name;
    const Value = e.target.value;
    setJob_details({ ...job_details, [name]: Value });
  };

  const onSubmitJob_details = async (e) => {
    e.preventDefault();
    try {
      dispatch(isLoader(true));
      const response = await UPDATE_JOB_DETAILS(job_details);
      if (response.data.result) {
        dispatch(isLoader(false));
        getProfile();
        dispatch(IsToast("Success"));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
  };

  const handleEducation = (e) => {
    const name = e.target.name;
    const Value = e.target.value;
    setEducation({ ...education, [name]: Value });
  };

  const onSubmit_education = async (e) => {
    e.preventDefault();
    try {
      dispatch(isLoader(true));
      const response = await UPDATE_EDUCATION(education);
      if (response.data.result) {
        dispatch(isLoader(false));
        getProfile();
        dispatch(IsToast("Success"));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
  };

  const handleExperience = (e) => {
    const name = e.target.name;
    const Value = e.target.value;
    setExperience({ ...experience, [name]: Value });
  };

  const onSubmit_experience = async (e) => {
    e.preventDefault();
    try {
      dispatch(isLoader(true));
      const response = await UPDATE_WORK_EXPERIENCE(experience);
      if (response.data.result) {
        dispatch(isLoader(false));
        getProfile();
        dispatch(IsToast("Success"));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
  };

  const handleSalary = (e) => {
    const name = e.target.name;
    const Value = e.target.value;
    setSalary_details({ ...salary_details, [name]: Value });
  };

  const onSubmitSalary = async (e) => {
    e.preventDefault();
    try {
      dispatch(isLoader(true));
      const response = await UPDATE_SALARY(salary_details);
      if (response.data.result) {
        dispatch(isLoader(false));
        getProfile();
        dispatch(IsToast("Success"));
      } else {
        dispatch(isLoader(false));
      }
    } catch (err) {
      dispatch(isLoader(false));
    }
  };

  const profileUpload = async (e) => {
    setprofileImageFile(e.target.files[0]);
    const [file] = document.getElementById("newProfilePhoto").files;
    if (file) {
      dispatch(isLoader(true));
      try {
        const postData = {
          profile_photo: e.target.files[0],
        };
        const response = await UPDATE_PROFILE_IMAGE(postData);
        if (response.data.result) {
          getProfile();
          console.log(response.data.user.profile_photo);
          dispatch(updateProfile(response.data.user));
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }
      } catch (err) {
        console.log(err);
      }
      let image_url = URL.createObjectURL(file);
      dispatch(IsToast("Profile picture updated Successfully!"));
      setData({ ...data, profile_photo: image_url });
      dispatch(isLoader(false));
    }
  };

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

    $("#cancelButton1c").click(function () {
      $(".editable-form1").hide();
      $(".readonly-form1").show();
      $("#editButton1").show();
      $("#cancelButton1").hide();
    });
  });

  //  // Event Listner function for form
  $(document).ready(function () {
    $("#editButton2").click(function () {
      $(".editable-form2").show();
      $(".readonly-form2").hide();
      $("#editButton2").hide();
      $("#cancelButton2").show();
    });

    $("#cancelButton2").click(function () {
      $(".editable-form2").hide();
      $(".readonly-form2").show();
      $("#editButton2").show();
      $("#cancelButton2").hide();
    });

    $("#cancelButton2c").click(function () {
      $(".editable-form2").hide();
      $(".readonly-form2").show();
      $("#editButton2").show();
      $("#cancelButton2").hide();
    });
  });

  //  // Event Listner function for form
  $(document).ready(function () {
    $("#editButton3").click(function () {
      $(".editable-form3").show();
      $(".readonly-form3").hide();
      $("#editButton3").hide();
      $("#cancelButton3").show();
    });

    $("#cancelButton3").click(function () {
      $(".editable-form3").hide();
      $(".readonly-form3").show();
      $("#editButton3").show();
      $("#cancelButton3").hide();
    });

    $("#cancelButton3c").click(function () {
      $(".editable-form3").hide();
      $(".readonly-form3").show();
      $("#editButton3").show();
      $("#cancelButton3").hide();
    });
  });

  const [activeTab, setActiveTab] = useState("General");

  useEffect(() => {
    // getProfile();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row py-3">
            <div className="col-12  text-start">
              <div class="heading-text-msg">
                <h5 class="m-0">View {information.name}</h5>
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
                  <div
                    className={`w-100 d-flex justify-content-center ${
                      isMyProfile ? "" : "d-none"
                    }`}
                  >
                    <div className="pic-holder-account">
                      <img
                        src={Profile_data.profile_photo ? Profile_data.profile_photo : user}
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
                  <div
                    className={`profile-pic-wrapper ${
                      !isMyProfile ? "" : "d-none"
                    }`}
                  >
                    <div className="pic-holder">
                      <img
                        className="pic"
                        src={
                          Profile_data.profile_photo
                            ? Profile_data.profile_photo
                            : user
                        }
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="profileimgboxdetail">
                    <h5 style={{ textTransform: "capitalize" }}>
                      {information.name}
                    </h5>
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
                        {information.emp_id}
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
                        &nbsp;91+ {information.phone}
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
                        {information.email}
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
                      <div class="small text-muted">
                        {information.job_title}
                      </div>
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
                      <div class="small text-muted">{job_details.line_member}</div>
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
                        <form novalidate="" onSubmit={onSubmitInformation}>
                          <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  name="name"
                                  onChange={handleInformation}
                                  class="form-control"
                                  required=""
                                  value={information.name}
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
                                  onChange={handleInformation}
                                  class="form-control"
                                  required=""
                                  value={information.email}
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
                                  name="emp_id"
                                  onChange={handleInformation}
                                  class="form-control"
                                  required=""
                                  value={information.emp_id}
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
                                  name="joining_date"
                                  onChange={handleInformation}
                                  class="form-control"
                                  required=""
                                  value={information.joining_date}
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
                                  name="tax_number"
                                  onChange={handleInformation}
                                  class="form-control"
                                  required=""
                                  value={information.tax_number}
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
                                  name="dob"
                                  onChange={handleInformation}
                                  class="form-control"
                                  required=""
                                  value={information.dob}
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
                                  onChange={handleInformation}
                                  class="form-control"
                                  required=""
                                  value={information.phone}
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
                                  name="job_title"
                                  onChange={handleInformation}
                                  value={information.job_title}
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
                              <button
                                id="cancelButton1"
                                type="submit"
                                class="btn infoedit3"
                              >
                                Save
                              </button>
                              &nbsp;
                              <p
                                id="cancelButton1c"
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
                              {information.name}
                            </h6>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="addlabelcard2">E-Mail</p>
                            <h6 class="profileimgboxcompanydetail2">
                              {information.email}
                            </h6>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="addlabelcard2">Employee Id</p>
                            <h6 class="profileimgboxcompanydetail2">
                              {information.emp_id}
                            </h6>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="addlabelcard2">Date of Joining</p>
                            <h6 class="profileimgboxcompanydetail2">
                              {information.joining_date}
                            </h6>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="addlabelcard2">Tax Number</p>
                            <h6 class="profileimgboxcompanydetail2">
                              {information.tax_number}
                            </h6>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="addlabelcard2">Date of Birth</p>
                            <h6 class="profileimgboxcompanydetail2">
                              {information.dob}
                            </h6>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="addlabelcard2">Phone Number</p>
                            <h6 class="profileimgboxcompanydetail2">
                              {information.phone}
                            </h6>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="addlabelcard2">Position</p>
                            <h6 class="profileimgboxcompanydetail2">
                              {information.job_title}
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
                      <div
                        className="editable-form2"
                        style={{ display: "none" }}
                      >
                        <form
                          noValidate="noValidate"
                          onSubmit={onSubmitAddress}
                        >
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-outline">
                                <textarea
                                  className="form-control"
                                  name="address"
                                  onChange={handleAddress}
                                  placeholder=" "
                                  value={address.address}
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
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="country"
                                  onChange={handleAddress}
                                  value={address.country}
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
                                  name="state"
                                  onChange={handleAddress}
                                  value={address.state}
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
                                  name="city"
                                  onChange={handleAddress}
                                  value={address.city}
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
                                  name="zipcode"
                                  onChange={handleAddress}
                                  value={address.zipcode}
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
                              <button
                                id="cancelButton2"
                                type="submit"
                                class="btn infoedit3"
                              >
                                Save
                              </button>
                              &nbsp;
                              <p
                                id="cancelButton2c"
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
                    <div className="readonly-form2">
                      <div className="row">
                        <div className="col-lg-12">
                          <p className="addlabelcard2">Address</p>
                          <h6
                            className="profileimgboxcompanydetail2"
                            style={{ textAlign: "left" }}
                          >
                            {address.address}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">Country</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {address.country}
                          </h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">State</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {address.state}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">City</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {address.city}
                          </h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">Zip COde</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {address.zipcode}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="viewem mt-4 border">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12  ">
                        <h5 className="infoedit">
                          <i class="fa fa-bolt"></i> &nbsp; Emergency Contact
                        </h5>
                        <div className="infoedit1">
                          <button id="editButton3" className="infoedit3">
                            Edit
                          </button>
                        </div>
                      </div>
                      <div
                        className="editable-form3"
                        style={{ display: "none" }}
                      >
                        <form
                          noValidate="noValidate"
                          onSubmit={onSubmitEmergency_contact}
                        >
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="emergency_name"
                                  onChange={handleEmergency_contact}
                                  class="form-control"
                                  required=""
                                  value={emergency_contact.emergency_name}
                                />
                                <label
                                  class="form-label"
                                  style={{ background: "#fff" }}
                                >
                                  Name &nbsp;
                                  <span class=" required">*</span>
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="relationship"
                                  onChange={handleEmergency_contact}
                                  class="form-control"
                                  required=""
                                  value={emergency_contact.relationship}
                                />
                                <label
                                  class="form-label"
                                  style={{ background: "#fff" }}
                                >
                                  Relationship &nbsp;
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
                                  name="emergency_phone"
                                  onChange={handleEmergency_contact}
                                  class="form-control"
                                  required=""
                                  value={emergency_contact.emergency_phone}
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

                            {/* <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
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
                                  Mobile Number &nbsp;
                                  <span class=" required">*</span>
                                </label>
                              </div>
                            </div> */}
                          </div>
                          <div className="row mt-4">
                            <div class="col-lg-12 text-start">
                              <button
                                id="cancelButton3"
                                type="submit"
                                class="btn infoedit3"
                              >
                                Save
                              </button>
                              &nbsp;
                              <p
                                id="cancelButton3c"
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
                          <p className="addlabelcard2">Name</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {emergency_contact.emergency_name}
                          </h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">Relationship</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {emergency_contact.relationship}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">Phone Number</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {emergency_contact.emergency_phone}
                          </h6>
                        </div>
                        {/* <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">Mobile Number</p>
                          <h6 className="profileimgboxcompanydetail2">
                            9874563210
                          </h6>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </>
              ) : activeTab === "Job" ? (
                <div className="viewem pd-4 border  ">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12  ">
                      <h5 className="infoedit">
                        <i class="fa fa-briefcase"></i> &nbsp; Job Details
                      </h5>
                      <div className="infoedit1">
                        <button id="editButton3" className="infoedit3">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="editable-form3" style={{ display: "none" }}>
                      <form
                        noValidate="noValidate"
                        onSubmit={onSubmitJob_details}
                      >
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="text"
                                name="job_title"
                                onChange={handleJob_details}
                                value={job_details.job_title}
                                class="form-control"
                                required=""
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Job Title &nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="date"
                                name="join_date"
                                onChange={handleJob_details}
                                value={job_details.join_date}
                                class="form-control"
                                required=""
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Joined Date &nbsp;
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
                                name="job_category"
                                onChange={handleJob_details}
                                value={job_details.job_category}
                                class="form-control"
                                required=""
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Job Categories &nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <select
                                className="form-control"
                                name="employment_status"
                                onChange={handleJob_details}
                                value={job_details.employment_status}
                              >
                                <option selected disabled>
                                  Select
                                </option>
                                <option>Full-Time</option>
                                <option>Part Time</option>
                                <option>Retired</option>
                                <option>Freelancer/Self-Employed</option>
                                <option>Terminated</option>
                              </select>
                              <label>Employment Status</label>
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
                                name="line_member"
                                onChange={handleJob_details}
                                value={job_details.line_member}
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Line Manager &nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div class="col-lg-12 text-start">
                            <button
                              id="cancelButton3"
                              type="submit"
                              class="btn infoedit3"
                            >
                              Save
                            </button>
                            &nbsp;
                            <p
                              id="cancelButton3c"
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
                        <p className="addlabelcard2">Job Tittle</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {job_details.job_title}
                        </h6>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Joined Date</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {job_details.join_date}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Job Category</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {job_details.job_category}
                        </h6>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Employment Status</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {job_details.employment_status}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Line Manager</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {job_details.line_member}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeTab === "Qualifications" ? (
                <>
                  <div className="viewem pd-4 border">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12  ">
                        <h5 className="infoedit">
                          <i class="fa fa-user-graduate"></i> &nbsp; Education
                        </h5>
                        <div className="infoedit1">
                          <button id="editButton3" className="infoedit3">
                            Edit
                          </button>
                        </div>
                      </div>
                      <div
                        className="editable-form3"
                        style={{ display: "none" }}
                      >
                        <form
                          noValidate="noValidate"
                          onSubmit={onSubmit_education}
                        >
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="education_level"
                                  value={education.education_level}
                                  onChange={handleEducation}
                                  class="form-control"
                                  required=""
                                />
                                <label
                                  class="form-label"
                                  style={{ background: "#fff" }}
                                >
                                  Level &nbsp;
                                  <span class=" required">*</span>
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="education_institute"
                                  value={education.education_institute}
                                  onChange={handleEducation}
                                  class="form-control"
                                  required=""
                                />
                                <label
                                  class="form-label"
                                  style={{ background: "#fff" }}
                                >
                                  Institute &nbsp;
                                  <span class=" required">*</span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
                                <input
                                  type="date"
                                  name="education_year"
                                  value={education.education_year}
                                  onChange={handleEducation}
                                  class="form-control"
                                  required=""
                                />
                                <label
                                  class="form-label"
                                  style={{ background: "#fff" }}
                                >
                                  Year &nbsp;
                                  <span class=" required">*</span>
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
                                <input
                                  type="date"
                                  name="education_score"
                                  value={education.education_score}
                                  onChange={handleEducation}
                                  class="form-control"
                                  required=""
                                />
                                <label
                                  class="form-label"
                                  style={{ background: "#fff" }}
                                >
                                  Score &nbsp;
                                  <span class=" required">*</span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-4">
                            <div class="col-lg-12 text-start">
                              <button
                                id="cancelButton3"
                                type="submit"
                                class="btn infoedit3"
                              >
                                Save
                              </button>
                              &nbsp;
                              <p
                                id="cancelButton3c"
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
                          <p className="addlabelcard2">Level</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {education.education_level}
                          </h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">Institute</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {education.education_institute}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">Year</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {education.education_year}
                          </h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">Score</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {education.education_score}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="viewem pd-4 border mt-4">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12  ">
                        <h5 className="infoedit">
                          <i class="fa fa-briefcase"></i>
                          &nbsp; Work Experience
                        </h5>
                        <div className="infoedit1">
                          <button id="editButton2" className="infoedit3">
                            Edit
                          </button>
                        </div>
                      </div>
                      <div
                        className="editable-form2"
                        style={{ display: "none" }}
                      >
                        <form
                          noValidate="noValidate"
                          onSubmit={onSubmit_experience}
                        >
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="work_experience_company"
                                  value={experience.work_experience_company}
                                  onChange={handleExperience}
                                  class="form-control"
                                  required=""
                                />
                                <label
                                  class="form-label"
                                  style={{ background: "#fff" }}
                                >
                                  Company &nbsp;
                                  <span class=" required">*</span>
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
                                <input
                                  type="type"
                                  name="work_experience_job_title"
                                  value={experience.work_experience_job_title}
                                  onChange={handleExperience}
                                  class="form-control"
                                  required=""
                                />
                                <label
                                  class="form-label"
                                  style={{ background: "#fff" }}
                                >
                                  Profile &nbsp;
                                  <span class=" required">*</span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
                                <input
                                  type="date"
                                  name="work_experience_from"
                                  value={experience.work_experience_from}
                                  onChange={handleExperience}
                                  class="form-control"
                                  required=""
                                />
                                <label
                                  class="form-label"
                                  style={{ background: "#fff" }}
                                >
                                  From &nbsp;
                                  <span class=" required">*</span>
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-outline">
                                <input
                                  type="date"
                                  name="work_experience_to"
                                  value={experience.work_experience_to}
                                  onChange={handleExperience}
                                  class="form-control"
                                  required=""
                                />
                                <label
                                  class="form-label"
                                  style={{ background: "#fff" }}
                                >
                                  To &nbsp;
                                  <span class=" required">*</span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-4">
                            <div class="col-lg-12 text-start">
                              <button
                                id="cancelButton2"
                                type="submit"
                                class="btn infoedit3"
                              >
                                Save
                              </button>
                              &nbsp;
                              <p
                                id="cancelButton2c"
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
                    <div className="readonly-form2">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">Company</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {experience.work_experience_company}
                          </h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">Profile</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {experience.work_experience_job_title}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">From</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {experience.work_experience_from}
                          </h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="addlabelcard2">To</p>
                          <h6 className="profileimgboxcompanydetail2">
                            {experience.work_experience_to}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : activeTab === "Salary" ? (
                <div className="viewem pd-4 border  ">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12  ">
                      <h5 className="infoedit">
                        <i class="fa fa-wallet"></i> &nbsp; Salary Detail
                      </h5>
                      <div className="infoedit1">
                        <button id="editButton3" className="infoedit3">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="editable-form3" style={{ display: "none" }}>
                      <form noValidate="noValidate" onSubmit={onSubmitSalary}>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="text"
                                name="salary_component"
                                onChange={handleSalary}
                                value={salary_details.salary_component}
                                class="form-control"
                                required=""
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Salary Component &nbsp;
                                <span class=" required">*</span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-outline">
                              <input
                                type="date"
                                name="salary_pay_frequency"
                                onChange={handleSalary}
                                value={salary_details.salary_pay_frequency}
                                class="form-control"
                                required=""
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Pay Frequency &nbsp;
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
                                name="salary_currency"
                                onChange={handleSalary}
                                value={salary_details.salary_currency}
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
                                class="form-control"
                                required=""
                                name="salary_amount"
                                onChange={handleSalary}
                                value={salary_details.salary_amount}
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
                                name="salary_account_number"
                                onChange={handleSalary}
                                value={salary_details.salary_account_number}
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Account Number &nbsp;
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
                                name="salary_account_type"
                                onChange={handleSalary}
                                value={salary_details.salary_account_type}
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
                                name="salary_bank_name"
                                onChange={handleSalary}
                                value={salary_details.salary_bank_name}
                              />
                              <label
                                class="form-label"
                                style={{ background: "#fff" }}
                              >
                                Bank Name &nbsp;
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
                                name="salary_ifsc_code"
                                onChange={handleSalary}
                                value={salary_details.salary_ifsc_code}
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
                            <button
                              id="cancelButton3"
                              type="submit"
                              class="btn infoedit3"
                            >
                              Save
                            </button>
                            &nbsp;
                            <p
                              id="cancelButton3c"
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
                          {salary_details.salary_component}
                        </h6>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Pay Frequency </p>
                        <h6 className="profileimgboxcompanydetail2">
                          {salary_details.salary_pay_frequency}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Currency</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {salary_details.salary_currency}
                        </h6>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Amount</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {salary_details.salary_amount}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Account Number</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {salary_details.salary_account_number}
                        </h6>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Account Type</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {salary_details.salary_account_type}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">Bank Name</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {salary_details.salary_bank_name}
                        </h6>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="addlabelcard2">IFSC Code</p>
                        <h6 className="profileimgboxcompanydetail2">
                          {salary_details.salary_ifsc_code}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
