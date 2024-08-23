import React, { useState } from "react";
import "./css/AddEvent.css"; // Import custom CSS
import { ADD_EVENT } from "../../api/Api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoader } from "../../store/actions";

const AddEvent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    eventDate: "",
    eventTime: "",
    location: "",
    description: "",
    members: "",
    status: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try{
      dispatch(isLoader(true))
      const response = await ADD_EVENT(formData);
      if(response.data.result){
        dispatch(isLoader(false))
        console.log(response.data)
      } else {
        dispatch(isLoader(false))
      }
     } catch(err){
      dispatch(isLoader(false))
      console.log(err)
     }
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="shadow sechrcard">
              <div className="container">
                <section>
                  <div className="container">
                    <div className="row pb-3">
                      <div className="col-4 p-0 text-start">
                        <div class="heading-text-msg">
                          <h5 class="m-0">Add New Event</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                    </div>
                    <div className="col-md-8 mb-3">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="eventDate" className="form-label">
                        Event Date
                      </label>
                    </div>
                    <div className="col-md-8 mb-3">
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        className="form-control"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="eventTime" className="form-label">
                        Event Time
                      </label>
                    </div>
                    <div className="col-md-8 mb-3">
                      <input
                        type="time"
                        id="eventTime"
                        name="eventTime"
                        className="form-control"
                        value={formData.eventTime}
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
                      <label htmlFor="description" className="form-label">
                        Description
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
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        Add Event
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
