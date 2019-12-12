import React from "react";
import { Link, NavLink } from "react-router-dom";

const Post = () => {
  return (
    <div className="card z-depth-3 grey lighten-4 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Project Title</span>
        <p>Posted by the Net Ninja</p>
        <p className="grey-text">3rd September</p>
        <div className="input-field right-align">
          <NavLink className="btn grey white-text lighten-0" to="/details">
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Post;
