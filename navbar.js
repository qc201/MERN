import React from "react";
import { Route, Routes } from "react-router-dom";
// We use Route in order to define the different routes of our application
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import RecordList from "./recordList";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div class="container-sm">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            <img
              style={{ width: 25 + "%" }}
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/zh/thumb/4/48/CTI_News_Logo.jpg/200px-CTI_News_Logo.jpg"
            ></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">
                  Add New Topic
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/record">
                  View Previous Topics
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
