import React from "react";
import { Link } from "react-router-dom";
import "../../css/App.css";
import Contact from "./ContactScreen";

const LandingScreen = () => {
  return (
    <div class="landing-page">
      <div class="entry">
        <h1>Nhat Nguyen</h1>
        <p> Cool software developer ! </p>
        <Link to="/about">
          <button type="submit">See more</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingScreen;
