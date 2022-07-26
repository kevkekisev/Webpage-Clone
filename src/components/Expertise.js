import React from "react";
import { Link } from "react-router-dom";

function Expertise() {
  return (
    <div className="expertise-section">
      <h1>Our Expertise</h1>
      <div className="expertise-list">
        <Link to="/development">
          <button className="expertise">Financial Software Development</button>
        </Link>
        <Link to="/development">
          <button className="expertise">Software for Telecoms</button>
        </Link>

        <Link to="/development">
          <button className="expertise">
            Startup Development Acceleration
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Expertise;
