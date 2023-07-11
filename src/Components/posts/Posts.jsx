import React from "react";
import "./posts.css";
import Post from "../post/post";
// import Post from "../post/post";

const Posts = ({ posts }) => {
  return (
    <div className="Posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
