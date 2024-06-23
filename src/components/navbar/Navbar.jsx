import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Employee List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-links">
              Add Employee
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;