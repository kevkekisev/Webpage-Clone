import React from "react";
import { Link } from "react-router-dom";
import { HEADER } from "../Constants/Index";

function FrontSlide() {
  return (
    <div className="front-slide">
      <div className="front-child">
        <h1 className="front-title">{HEADER}</h1>
        <Link to="/development">
          <button className="front-btn">DISCOVER REVIEWS</button>
        </Link>
      </div>
    </div>
  );
}
export default FrontSlide;
