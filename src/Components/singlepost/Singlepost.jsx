import React, { useContext, useEffect, useState, useCallback } from "react";
import "./singlepost.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../Context/Context";

const Singlepost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://blog-mo1e.onrender.com/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const getPost = useCallback(async () => {
    try {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    } catch (err) {
      console.error("Failed to fetch post", err);
    }
  }, [path]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  const handleDelete = useCallback(async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.error("Failed to delete post", err);
    }
  }, [post._id, user.username]);

  const handleUpdate = useCallback(async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
      getPost(); // Refresh post data
    } catch (err) {
      console.error("Failed to update post", err);
    }
  }, [post._id, user.username, title, desc, getPost]);

  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        {post.photo && (
          <img
            className="singlepostimg"
            src={`${PF}${post.photo}`}
            alt="Post visual"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlepostedit">
                <i
                  className="singlepostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlepostIcon fa-sharp fa-solid fa-trash"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlepostInfo">
          <span className="singlepostAuth">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlepostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlepostDateInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlepageDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default Singlepost;
