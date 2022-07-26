import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li className="footer-link">
          <Link to="/development">About us</Link>
        </li>
        <li className="footer-link">
          <Link to="/development">Offer</Link>
        </li>
        <li className="footer-link">
          <Link to="/development">Case studies</Link>
        </li>
        <li className="footer-link">
          <Link to="/development">Careers</Link>
        </li>
        <li className="footer-link">
          <Link to="/development">Blog</Link>
        </li>
        <li className="footer-link">
          <Link to="/development">Contact</Link>
        </li>
      </ul>
      <p className="privacy-policy">
        <Link to="/development">Privacy Policy</Link>
      </p>

      <h5 className="copyright">
        Copyright 2022 by Software Mind. All rights reserved.
      </h5>
    </div>
  );
}

export default Footer;
