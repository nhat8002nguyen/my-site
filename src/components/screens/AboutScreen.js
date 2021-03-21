import React from "react";
import Avatar from "../../images/avatar.jpg";
import { Link } from "react-router-dom";

export default function AboutScreen() {
  return (
    <div className="about-screen">
      <div className="about-image">
        <img src={Avatar}></img>
      </div>
      <div className="about-info">
        <h1>Nhat Nguyen Van</h1>
        <div className="description">
          <p>
            Hello, I’m Nhat. I’m currently a senior CS undergraduate student at
            HCMUT. I love coding and making product. My passion is become a good
            software engineering.{" "}
          </p>
          <p>
            And now I’m ready for an intership or a fresher, with the hope of
            using my knowledge and skill to make contribution to your company.
            So I’m very excited to here some information from you !
          </p>
        </div>

        <Link className="contact-button" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
