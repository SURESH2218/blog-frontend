import React from "react";
import "./single.css";
import Sidebar from "../../../Components/sidebar/sidebar";
import Singlepost from "../../../Components/singlepost/Singlepost";

const Single = () => {
  return (
    <div className="single">
      <>
        <Singlepost />
        <Sidebar />
      </>
    </div>
  );
};

export default Single;
