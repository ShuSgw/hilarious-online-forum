import React from "react";
import { Link, NavLink } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <p>
              <NavLink to="/project/">Project List</NavLink>
            </p>
            <p>
              <NavLink to="/project/">Project List</NavLink>
            </p>
            <p>
              <NavLink to="/project/">Project List</NavLink>
            </p>
          </div>
          <div className="col s12 m5 offset-m1">
            <p>Notification</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
