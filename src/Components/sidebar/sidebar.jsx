import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <p className="sidebarTitle">About Me</p>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/17305195/pexels-photo-17305195/free-photo-of-coffee-cup-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Coffee cup on table"
        />
        <p className="lorem">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          accusamus repellat minima corporis sed ducimus nihil.
        </p>
      </div>
      <div className="sidebarItem">
        <p className="sidebarTitle">CATEGORIES</p>
        <ul className="sidebarList">
          {categories.map((category) => (
            <li key={category._id}>
              <Link
                to={`/?category=${category.name}`}
                className="link sidebarListItem"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <p className="sidebarTitle">FOLLOW US</p>
        <ul className="sidebarSocial">
          <li>
            <i className="sidebarIcon fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
