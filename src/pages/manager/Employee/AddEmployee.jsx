import React from "react";
import Coming_soon from "../../../component/Coming_soon";

const AddEmployee = () => {
  return (
    <>
      <div className="modal-content p-4">
        <div className="d-flex justify-content-between">
          <h5>Add Employee</h5>
          <p type="button" 
          // onClick={close}
          >
            <i class="fa fa-x"></i>
          </p>
        </div>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-outline">
                <input type="text" id="first_name" name="first_name" required />
                <label className="form-label" for="typeText">
                  {" "}
                  First Name<span className=" required">*</span>
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-outline">
                <input type="text" id="last_name" name="last_name" required />
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
                <input type="text" id="user_name" name="user_name" required />
                <label className="form-label" for="typeText">
                  {" "}
                  User Name<span className=" required">*</span>
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-outline">
                <input type="email" id="email" name="email" required />
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
                <input type="date" name="dateOfJoining" required />
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
    </>
  );
};

export default AddEmployee;
