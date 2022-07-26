import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="title nav-item">
        <h2>
          <Link to="/development">Software Mind</Link>
        </h2>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" htmlFor="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul className="menu">
        <li className="nav-item">
          <Link to="/development">About us</Link>
        </li>
        <li className="nav-item">
          <Link to="/development">Offer</Link>
        </li>
        <li className="nav-item">
          <Link to="/development">Case Studies</Link>
        </li>
        <li className="nav-item">
          <Link to="/development">
            <Link to="/development">Careers</Link>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/development">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/development">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
