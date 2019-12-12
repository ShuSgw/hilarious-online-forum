import React from "react";

const Post = () => {
  return (
    <div className="card z-depth-3 grey lighten-4 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Project Title</span>
        <p>Posted by the Net Ninja</p>
        <p className="grey-text">3rd September</p>
        <div className="input-field right-align">
          <button className="btn grey white-text lighten-0 z-depth-0">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
