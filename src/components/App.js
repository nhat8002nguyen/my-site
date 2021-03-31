import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import BlogScreen from "./screens/BlogScreen";
import ContactScreen from "./screens/ContactScreen";
import MainScreen from "./screens/MainScreen";

export default function App() {
  return (
    <div className="root">
      <Router>
        
        <Switch>
          <Route exact path="/">
            <MainScreen />
          </Route>
          <Route path="/about">
            <AboutScreen />
          </Route>
          <Route path="/blog">
            <BlogScreen />
          </Route>
          <Route path="/contact">
            <ContactScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
