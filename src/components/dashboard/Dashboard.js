import React from "react";
import { Link, NavLink } from "react-router-dom";
import PostList from "../posts/PostList";
class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <h3>DashBoard</h3>
          <div className="col s12 m6">
            <PostList />
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
