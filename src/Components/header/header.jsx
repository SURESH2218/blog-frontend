import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <div className="smallHeader">React & Node</div>
        <div className="lgheader">Blog</div>
      </div>
      <img
        className="PImg"
        src="https://images.pexels.com/photos/17210725/pexels-photo-17210725/free-photo-of-cappadocia-balloon-landscape-tourists.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
};
