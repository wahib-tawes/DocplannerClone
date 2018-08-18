import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

import "./style.css";

export default class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav
            className="navbar navbar-expand-md navbar-light bg-light sticky-top"
            id="home"
          >
            <NavLink to="/Home" className="Docplanner-title">
              <span>Docplanner</span> Group
            </NavLink>
            <div className="nav-link">
              <NavLink to="/Home" className="About">
                About-us
              </NavLink>
              <NavLink to="/Home" className="Career">
                Career
              </NavLink>
            </div>
          </nav>
        </div>
      </BrowserRouter>
    );
  }
}
