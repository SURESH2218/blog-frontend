import React, { useEffect, useState } from "react";
import "./home.css";
import Sidebar from "../../Components/sidebar/sidebar";
import Posts from "../../Components/posts/Posts";
import { Header } from "../../Components/header/header";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchposts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchposts();
  }, [search]);
  return (
    <>
      {/* <Header /> */}
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
