import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blog-mo1e.onrender.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  // Construct the image URL
  const imageUrl =
    user && user.profilePic
      ? `${PF}${user.profilePic}?v=${Date.now()}`
      : "https://via.placeholder.com/40";

  return (
    <div className="top">
      <div className="topleft">
        <i className="topIcon fa-brands fa-facebook" aria-label="Facebook"></i>
        <i className="topIcon fa-brands fa-twitter" aria-label="Twitter"></i>
        <i
          className="topIcon fa-brands fa-instagram"
          aria-label="Instagram"
        ></i>
        <i
          className="topIcon fa-brands fa-pinterest"
          aria-label="Pinterest"
        ></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="toplistitem">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="toplistitem">
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className="toplistitem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          {user && (
            <li className="toplistitem" onClick={handleLogout}>
              Logout
            </li>
          )}
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <Link to="/settings">
            <img
              className="myImg"
              src={imageUrl}
              alt="User profile"
              onError={(e) => (e.target.src = "https://via.placeholder.com/40")} // Fallback image
            />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
              <Link
                to="/register"
                className="link"
                style={{ marginLeft: "20px" }}
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="fa-solid fa-magnifying-glass" aria-label="Search"></i>
      </div>
    </div>
  );
};

export default Topbar;
