import React from "react";
import "./aboutSection.css";

import logo from "../../../images/log.PNG";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h1>About Us</h1>

        <div>
          <div>
          <img src={logo} alt="Logo" />
           
            <span>Find High Quality Guitar, Bass and Ukulele here.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
