import React, { useState } from 'react';
import orpectLogo from "../asset/images/orpect1.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication (replace with actual authentication logic)
    if (username === 'admin' && password === 'password') {
      console.log("Login successful!");
      // Redirect to dashboard after successful login
      // history.push('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <img src={orpectLogo} alt="Logo" height="50px" width="180px"/>
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
        <div><button type="submit">Login</button>
        <button onClick={() => navigate("/signup")}>signup</button></div>
        
      </form>
    </div>
  );
};

export default Login;
