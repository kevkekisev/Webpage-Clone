import React, { useState } from "react";
import corporate from "../corpoTeam.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function NewsLetter() {
  const [valid, setValid] = useState(false);

  function handleChange() {
    setValid((prevState) => !prevState);
  }
  return (
    <div className="contact-email">
      <div className="sub-email-section">
        <div className="email-section">
          <h2>We may already be just one Email away from working together!</h2>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <form action="submit" method="post">
            <input
              type="email"
              name="email"
              className="email"
              placeholder="Your Email address*"
              required
            />
            <textarea
              type="text"
              name="message"
              className="message"
              placeholder="Your message*"
              required
            />
            <div className="subscription">
              <span className="radio-span">
                <input
                  onClick={handleChange}
                  type="radio"
                  id="radio"
                  className="radio-btn"
                  checked={valid}
                />
              </span>
              <label htmlFor="radio" className="newsletter">
                I want to receive information about products and services of
                Software Mind by e-mail.
              </label>
            </div>

            <button type="submit" className="submit-btn">
              SEND
            </button>
          </form>
        </div>
        <div className="img-container">
          <img src={corporate} className="team-img" alt="team" />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
