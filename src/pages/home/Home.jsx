import React, { useEffect, useState } from "react";
import "./home.css";
import Sidebar from "../../Components/sidebar/sidebar";
import Posts from "../../Components/posts/Posts";
import axios from "axios";
// import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchposts = async () => {
      const res = await axios.get("https://blog-mo1e.onrender.com/api/posts");
      console.log(res.data);
      setPosts(res.data);
    };
    fetchposts();
  }, []);
  return (
    <>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
