import React from "react";
import "./Reasons.css";
import image1 from "../../assets/coach5-preview.png";
import image2 from "../../assets/coach6-preview.png";
import image3 from "../../assets/coach2-preview.png";
import image4 from "../../assets/coach9.jpeg";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-reasons">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-reasons" id="resons">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>choose us?</span>
        </div>

        <div className="right-details">
          <div>
            <img src={tick} alt="" />
            <span>Certified fitness & nutrition coach</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Customized workout & diet plans</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Proven client transformation results</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Focus on both physical & mental fitness</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Online & offline personal training</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Goal-oriented, science-backed approach</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Affordable and practical fitness solutions</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>24/7 support and follow-ups</span>
          </div>
        </div>
        {/* <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Reasons;
