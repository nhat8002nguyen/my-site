import React from "react";
import { Link } from "react-router-dom";
import "../../css/App.css";
import Contact from "./ContactScreen";
import AboutScreen from "./AboutScreen";

const LandingScreen = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <div>
          <Link className="logo" to="/">
            My Logo
          </Link>
        </div>
        <div className="navigate-link">
          <Link class="nav-link" to="/about">
            About
          </Link>
          <Link class="nav-link" to="/project">
            Project
          </Link>
          <Link class="nav-link" to="/blog">
            blog
          </Link>
          <Link class="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="entry">
        <h1>Welcome</h1>
        <p> Cool software developer  </p>
        <Link to="/about">
          <button type="submit">See more</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingScreen;
