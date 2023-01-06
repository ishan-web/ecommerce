import React from "react";
import "./Footer.css";
import logo from "../../../images/log.PNG";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
      <img src={logo} alt="Logo" />

        
      </div>

      <div className="midFooter">
        <h1>GuitarStation</h1>
        <p>Customer Satisfaction is our motto</p>

        <p>Copyrights 2022 &copy; GuitarStation</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/test">Instagram</a>
        <a href="http://youtube.com/test">Youtube</a>
        <a href="http://instagram.com/test">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
