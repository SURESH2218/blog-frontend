import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "https://blog-mo1e.onrender.com/images/";

  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={`${PF}${post.photo}`} alt="Post visual" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories?.map((category) => (
            <span key={category._id} className="postCat">
              {category.name}
            </span>
          ))}
        </div>

        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
