import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Navigation extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>
            Teachers Backpack
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/create">Create Component</Link>
              </li>
              
              <li className="nav-item active">
                <Link className="nav-link" to="/">Components</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/skill">Skills</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/browser">Browse all components</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/dba">DBA</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
  }

}
