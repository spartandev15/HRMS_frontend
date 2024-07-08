import React, { useState } from "react";
import orpectLogo from "../asset/images/orpect1.png";
import { useNavigate } from "react-router-dom";
import { SIGNUP_API } from "../api/Api";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    organisation: "",
    organisation_id: "",
    address: "",
    email: "",
    password: "",
    confirm_password: "",
    payment: 1,
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    SIGNUP_API(formData);
    setFormData({
      first_name: "",
      last_name: "",
      organisation: "",
      organisation_id: "",
      address: "",
      email: "",
      password: "",
      confirm_password: "",
      payment: "",
    });
  };

  return (
    <div className="signup-container">
      <img src={orpectLogo} alt="Logo" height="50px" />
      <h2>Signup Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="organisation">Organisation</label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="organisation_id">Organisation ID</label>
          <input
            type="text"
            id="organisation_id"
            name="organisation_id"
            value={formData.organisation_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Signup</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </form>
    </div>
  );
};

export default Signup;
