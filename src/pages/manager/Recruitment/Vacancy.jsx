import React, { useState } from "react";
import "./AddVacancy.css"; // Import custom CSS

const Vacancy = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    department: "",
    location: "",
    description: "",
    requirements: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API or process it)
    console.log("Vacancy data submitted:", formData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="shadow sechrcard mt-4">
            <section>
              <div className="container">
                <div className="row pb-3">
                  <div className="col-4  text-start">
                    <div class="heading-text-msg">
                      <h5 class="m-0">Add New Vacancy</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="jobTitle" className="form-label">
                          Job Title
                        </label>
                      </div>
                      <div className="col-md-8 mb-3">
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          className="form-control"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="department" className="form-label">
                          Department
                        </label>
                      </div>
                      <div className="col-md-8 mb-3">
                        <input
                          type="text"
                          id="department"
                          name="department"
                          className="form-control"
                          value={formData.department}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="location" className="form-label">
                          Location
                        </label>
                      </div>
                      <div className="col-md-8 mb-3">
                        <input
                          type="text"
                          id="location"
                          name="location"
                          className="form-control"
                          value={formData.location}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="salary" className="form-label">
                          Salary
                        </label>
                      </div>
                      <div className="col-md-8 mb-3">
                        <input
                          type="text"
                          id="salary"
                          name="salary"
                          className="form-control"
                          value={formData.salary}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="description" className="form-label">
                          Job Description
                        </label>
                      </div>
                      <div className="col-md-8 mb-3">
                        <textarea
                          id="description"
                          name="description"
                          className="form-control"
                          rows="4"
                          value={formData.description}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="requirements" className="form-label">
                          Requirements
                        </label>
                      </div>
                      <div className="col-md-8 mb-3">
                        <textarea
                          id="requirements"
                          name="requirements"
                          className="form-control"
                          rows="4"
                          value={formData.requirements}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary">
                          Add Vacancy
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
