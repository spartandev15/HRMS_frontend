import React, { useState } from "react";
import orpectLogo from "../asset/images/orpect1.png";
import { Await, useNavigate } from "react-router-dom";
import { LOGIN_API } from "../api/Api";
import { useDispatch } from "react-redux";
import { IsToast } from "../store/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: username,
        password: password,
      };
      const response = await LOGIN_API(data);
      console.log("Aagya data, ", response);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.log("aagya data: ", err);
    }

    if (username === "admin" && password === "admin") {
      dispatch(IsToast("Hi Admin, welcome to the HRMS"));
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <img src={orpectLogo} alt="Logo" height="50px" width="180px" />
        <h2>Login to HRMS</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
          <button onClick={() => navigate("/signup")}>signup</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
