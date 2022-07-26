import React from "react";
import webdev01 from "../webdev01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function SecondSlide() {
  return (
    <div className="second-slide-frame">
      <div className="second-slide-main ">
        <div className="main-description ">
          <h1>Software House.</h1>
          <h1>Human Touch.</h1>
          <p>
            To offer quality software development services, you need to master
            technology.
          </p>
          <p>
            To make it top-notch, you need to master people interactions and let
            your team go beyond.
          </p>
          <p>We have been doing that for 22 years.</p>

          <Link to="/development" className="main-link">
            See more about us
          </Link>
        </div>
        <img src={webdev01} className="second-slide-img" />
      </div>
      <div className="sub-section ">
        <div className="desc-block ">
          <span className="desc-icons">
            <FontAwesomeIcon icon={faUsers} />
          </span>
          <h2>Dedicated developement teams</h2>
          <p>Expand your IT capabilites</p>
          <Link to="/development">Learn More</Link>
        </div>
        <div className="desc-block ">
          <span>
            <FontAwesomeIcon icon={faScrewdriverWrench} />
          </span>
          <h2>Product Engineering</h2>
          <p>From ideation and desing to released product</p>
          <Link to="/development">Check it out</Link>
        </div>
        <div className="desc-block ">
          <span>
            <FontAwesomeIcon icon={faMicrochip} />
          </span>
          <h2>Digital transformation</h2>
          <p>Transform your IT to stay competitive</p>
          <Link to="/development">Find out more</Link>
        </div>
        <div className="desc-block services ">
          <h2>Check out our services</h2>
          <Link to="/development">Find out more</Link>
        </div>
      </div>
    </div>
  );
}

export default SecondSlide;
