

import React from "react";
import "./Join.css";
import EnrollNow from "./EnrollNow";
import heroImg from "../../assets/hero-img-removebg-preview.png";

const Join = () => {
  return (
    <div className="join" id="join-us">
      <div className="join-left">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
        <div className="join-image-container">
          <img src={heroImg} alt="Ready to level up your body with us" className="join-image" />
        </div>
      </div>
      <div className="join-right">
        <EnrollNow />
      </div>
    </div>
  );
};

export default Join;
