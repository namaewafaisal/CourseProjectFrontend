import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="login-btn" onClick={() => console.log("Login clicked")}>Login</button>
      </form>
      <p>Don't have an account?</p>
      <Link to="/register" className="signup-btn">Sign Up</Link>
    </div>
  );
}

export default Login