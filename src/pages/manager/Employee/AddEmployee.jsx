import React, { useState } from "react";
import Coming_soon from "../../../component/Coming_soon";
import { isLoader, IsToast } from "../../../store/actions";
import { ADD_EMPLOYEE, UPDATE_SALARY } from "../../../api/Api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Profile_data = JSON.parse(localStorage.getItem("employeeData")) || {};

  const [data, setData] = useState({
    first_name: Profile_data.first_name ? Profile_data.first_name : "",
    last_name: Profile_data.last_name ? Profile_data.last_name : "",
    line_manager: Profile_data.line_manager ? Profile_data.line_manager : "",
    email: Profile_data.email ? Profile_data.email : "",
    password: Profile_data.password ? Profile_data.password : "",
    confirm_password: Profile_data.confirm_password
      ? Profile_data.confirm_password
      : "",
    employee_id: Profile_data.employee_id ? Profile_data.employee_id : "",
    joining_date: Profile_data.joining_date ? Profile_data.joining_date : "",
    phone: Profile_data.phone ? Profile_data.phone : "",
    designation: Profile_data.designation ? Profile_data.designation : "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const Value = e.target.value;
    setData({ ...data, [name]: Value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!data.first_name) {
      dispatch(IsToast("Please enter First Name"));
    } else if (!data.last_name) {
      dispatch(IsToast("Please enter Last Name"));
    } else if (!data.line_manager) {
      dispatch(IsToast("Please enter Line Manager"));
    } else if (!data.email) {
      dispatch(IsToast("Please enter Email"));
    } else if (!data.password) {
      dispatch(IsToast("Please enter Password"));
    } else if (!data.confirm_password) {
      dispatch(IsToast("Please enter Confirm Password"));
    } else if (data.password !== data.confirm_password) {
      dispatch(IsToast("Password & Confirm Password should match"));
    } else if (!data.employee_id) {
      dispatch(IsToast("Please enter Employee ID"));
    } else if (!data.joining_date) {
      dispatch(IsToast("Please enter Joining Date"));
    } else if (!data.phone) {
      dispatch(IsToast("Please enter Phone Number"));
    } else if (data.phone && data.phone.length != 10) {
      dispatch(IsToast("Please enter a valid Phone Number"));
    } else if (!data.designation) {
      dispatch(IsToast("Please enter Designation"));
    } else {
      try {
        dispatch(isLoader(true));
        const response = await ADD_EMPLOYEE(data);
        if (response.data.result) {
          dispatch(isLoader(false));
          navigate("/admin_dashboard/all_employee");
          // getProfile();
          dispatch(IsToast("Success"));
        } else {
          dispatch(isLoader(false));
        }
      } catch (err) {
        dispatch(isLoader(false));
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shadow sechrcard mt-4">
              
                <section>
                  <div className="container">
                    <div className="row pb-3">
                      <div className="col-4 p-0 text-start">
                        <div class="heading-text-msg">
                          <h5 class="m-0">Add Employee</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        onChange={handleInputs}
                        value={data.first_name}
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
                        onChange={handleInputs}
                        value={data.last_name}
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
                        id="line_manager"
                        name="line_manager"
                        onChange={handleInputs}
                        value={data.line_manager}
                        required
                      />
                      <label className="form-label" for="typeText">
                        {" "}
                        Line Manager<span className=" required">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-outline">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleInputs}
                        value={data.email}
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
                      <input
                        type="password"
                        name="password"
                        onChange={handleInputs}
                        value={data.password}
                        required
                      />
                      <label className="form-label" for="typeText">
                        {" "}
                        Password<span className=" required">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-outline">
                      <input
                        type="password"
                        name="confirm_password"
                        onChange={handleInputs}
                        value={data.confirm_password}
                        required
                      />
                      <label className="form-label" for="typeText">
                        Confirm Password
                        <span className=" required">*</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="employee_id"
                        onChange={handleInputs}
                        value={data.employee_id}
                        required
                      />
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
                        name="joining_date"
                        onChange={handleInputs}
                        value={data.joining_date}
                        required
                      />
                      <label className="form-label">
                        {" "}
                        Joining Date<span className=" required">*</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="phone"
                        onChange={handleInputs}
                        value={data.phone}
                        required
                      />
                      <label className="form-label" for="typeText">
                        {" "}
                        Phone Number<span className=" required">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-outline">
                      <input
                        type="password"
                        name="designation"
                        onChange={handleInputs}
                        value={data.designation}
                        required
                      />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
