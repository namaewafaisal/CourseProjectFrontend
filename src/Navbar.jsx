import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
function Navbar() {
  const location = useLocation();
  return (
    <>
        <div className="navlink">
          <Link to="/" className={`nav-btn ${location.pathname === '/' ? "active" : ""}`}>Home</Link>
          <Link to="/careers" className={`nav-btn ${location.pathname === '/careers' ? "active" : ""}`}>Careers</Link>
          <Link to="/courses" className={`nav-btn ${location.pathname === '/courses' ? "active" : ""}`}>Courses</Link>
          <Link to="/about" className={`nav-btn ${location.pathname === '/about' ? "active" : ""}`}>About</Link>
        </div>
    </>
  )
}

export default Navbar