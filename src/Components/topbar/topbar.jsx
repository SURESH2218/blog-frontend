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
  return (
    <div className="top">
      <div className="topleft">
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-twitter"></i>
        <i class="topIcon fa-brands fa-instagram"></i>
        <i class="topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className=" toplistitem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className=" toplistitem">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className=" toplistitem">
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className=" toplistitem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className=" toplistitem" onClick={handleLogout}>
            {user && "logout"}
          </li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <Link to="/settings">
            <img className="myImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
              <Link
                to="/register"
                style={{ marginLeft: "20px" }}
                className="link"
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
