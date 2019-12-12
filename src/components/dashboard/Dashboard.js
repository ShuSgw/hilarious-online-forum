import React from "react";
import { connect } from "react-redux";

import PostList from "../posts/PostList";
class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <h3>DashBoard</h3>
          <div className="col s12 m6">
            <PostList postsArrays={this.props.connectPosts.posts} />
          </div>
          <div className="col s12 m5 offset-m1">
            <p>Notification</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = st => {
  return {
    connectPosts: st.postReducer
  };
};

export default connect(mapStateToProps)(Dashboard);
