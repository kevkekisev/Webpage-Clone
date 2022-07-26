import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Development() {
  return (
    <div>
      <Navbar />
      <div className="const-div">
        <h1>This page is under development</h1>
        <p>
          This is a demo page, to demonstrate the use of React Routing
          throughout the web page.
        </p>

        <h2>About this project</h2>
        <p className="about-description">
          The idea behind this project was to take on a much bigger main page
          and clone it to practice both React.JS and CSS skills.
        </p>
        <span className="construction-logo">
          <FontAwesomeIcon icon={faPersonDigging} />
        </span>
        <Link to="/">
          <button className="front-btn">GO BACK</button>
        </Link>
      </div>
    </div>
  );
}

export default Development;
