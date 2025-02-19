import React, { useEffect, useState } from "react";
import "./home.css";
import Sidebar from "../../Components/sidebar/sidebar";
import Posts from "../../Components/posts/Posts";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://blog-mo1e.onrender.com/api/posts");
        setPosts(res.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="home">
      <Posts posts={posts} />
      <Sidebar />
    </div>
  );
};

export default Home;
