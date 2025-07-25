import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const scrollToEnroll = (e) => {
  e.preventDefault();
  const enrollSection = document.getElementById("enroll-title");
  if (enrollSection) {
    enrollSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* Header */}
      <div className="programs-header" id="program">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>
      <div className="program-categories">
        {programsData.map((program, idx) => (
          <div className="category" key={idx} onClick={scrollToEnroll} style={{ cursor: "pointer" }}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="#" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
