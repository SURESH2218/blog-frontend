import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <p className="sidebarTitle">About Me</p>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/17305195/pexels-photo-17305195/free-photo-of-coffee-cup-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/"
          alt=""
        />
        <p className="lorem">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          accusamus repellat minima corporis sed ducimus nihil,
        </p>
      </div>
      <div className="sidebarItem">
        <p className="sidebarTitle">CATEGORIES</p>
        <ul className="sidebarList">
          {categories.map((category) => (
            <Link to={`/?category=${category.name}`} className="link">
              <li className="sidebarlistITEM">{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <p className="sidebarTitle">FOLLOW US</p>
        <ul className="sidebarSocial">
          <i class="sidebarIcon fa-brands fa-facebook"></i>
          <i class="sidebarIcon fa-brands fa-twitter"></i>
          <i class="sidebarIcon fa-brands fa-instagram"></i>
          <i class="sidebarIcon fa-brands fa-pinterest"></i>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
