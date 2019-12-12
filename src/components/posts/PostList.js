import React from "react";
import Post from "./Post";

const ProjectList = props => {
  const posts = props.postsArrays;
  return (
    <div className="project-list section">
      {posts.map(post => {
        return <Post key={post.id} title={post.title} />;
      })}
    </div>
  );
};

export default ProjectList;
