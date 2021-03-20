import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import AboutScreen from "./screens/AboutScreen";
import SkillScreen from "./screens/SkillScreen";
import ContactScreen from "./screens/ContactScreen";

export default function App() {
  return (
    <div className="root">
      <Router>
        <div class="header">
          <Link class="logo" to="/">
            My Logo
          </Link>
          <div className="navigate-link">
            <Link class="nav-link" to="/about">
              About
            </Link>
            <Link class="nav-link" to="/skill">
              portfolio
            </Link>
            <Link class="nav-link" to="/skill">
              blog
            </Link>
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <LandingScreen />
          </Route>
          <Route path="/about">
            <AboutScreen />
          </Route>
          <Route path="/skill">
            <SkillScreen />
          </Route>
          <Route path="/contact">
            <ContactScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
