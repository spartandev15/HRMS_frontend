import React, { useState } from 'react';
import orpectLogo from "../asset/images/orpect1.png";
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    organisation: '',
    organisation_id: '',
    address: '',
    email: '',
    password: '',
    confirm_password: '',
    payment: 1
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/hrms_project/public/api/register', formData);
      console.log('Response:', response.data);
      setSuccessMessage('Signup successful!');
      setError(null);
      // Clear form data after successful submission if needed
      setFormData({
        first_name: '',
        last_name: '',
        organisation: '',
        organisation_id: '',
        address: '',
        email: '',
        password: '',
        confirm_password: '',
        payment: ''
      });
    } catch (error) {
      console.error('Error:', error.response.data);
      setError(error.response.data.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="signup-container">
        <img src={orpectLogo} alt="Logo" height="50px" />
      <h2>Signup Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
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
      </form>
    </div>
  );
};

export default Signup;
