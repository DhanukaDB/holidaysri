import React from "react";
import loader from "../../assets/loader.mp4";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="video-wrapper">
        <video src={loader} className="video" autoPlay loop muted />
      </div>
    </div>
  );
};

export default Loader;
