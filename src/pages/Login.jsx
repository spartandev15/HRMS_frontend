import React, { useState } from "react";
import orpectLogo from "../asset/images/orpect1.png";
import { Await, Link, useNavigate } from "react-router-dom";
import { LOGIN_API } from "../api/Api";
import { useDispatch } from "react-redux";
import { IsToast } from "../store/actions";
import "../asset/css/auth-page.css";

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
      console.log("Error: ", err.message);
    }

    if (username === "admin" && password === "admin") {
      dispatch(IsToast("Hi Admin, welcome to the HRMS"));
      navigate("admin");
    } else if (username === "test" && password === "test") {
      dispatch(IsToast("Hi Test user, welcome to the HRMS"));
      navigate("employee");
    }
  };

  return (
    <div
    className="login-container"
    >
      {/* <form className="login-form" onSubmit={handleLogin}>
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

 */}

      <div className="container">
        <div className="row">
          <div className="col-lg-6 contact_form11">
            <div className="signupform2">
              <h5>Welcome to ORPECT!</h5>
              <p>
                Enter your Organization details and start your journey with us.
              </p>
              <Link to="/signup">
                <button className="btn signupbtn">Sign Up</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 contact_form12  ">
            <div className="row">
              <div className="col-lg-2 col-sm-12"></div>
              <div className="col-lg-8 col-sm-12">
                <form
                  className="text-center signin_pd_inner "
                  onSubmit={handleLogin}
                >
                  <h3>Login to HRMS</h3>
                  {error && <p className="error-message">{error}</p>}
                  <div className="form-outline"> 
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                     <label
                                className="form-label"
                                for="typeText"
                                style={{ background: "#fff" }}   
                              >        
                                E-Mail
                              </label>
                  </div>
                  <div className="form-outline">
                   
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                      <label
                                className="form-label"
                                for="typeText"
                                style={{ background: "#fff" }}   
                              >        
                               Password
                              </label>
                  </div>
                  {/* <div>
                    <button type="submit">Login</button>
                    <button onClick={() => navigate("/signup")}>signup</button>
                  </div> */}
                  <div className="row proceedbtn"  >
                    <div
                      className="auth_page_padding mx-auto"
                      
                    >
                      <button   className="btn mybtn">
                        Proceed
                      </button>
                      <p class="submitcontent mb-0">
                        Don't have an account.
                        <a
                          onClick={() => navigate("/signup")}
                          style={{ color: "#134d75", fontWeight: "600" }}

                          >
                          Sign Up
                        </a>
                      </p>
                      <p>
                        <a
                          href=" "
                          style={{ color: "#134d75", fontWeight: "600" }}
                        > 
                          Forget Password
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-2 col-sm-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
