import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/log.PNG";

const options = {
  burgerColor:"grey",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "10vmax",
  navColor1: "#4F4E4E",
  logoHoverSize: "10px",
  logoHoverColor: "black",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "2vmax",
  profileIconUrl: "/login",
  profileIconColor: "white",
  searchIconColor: "white",
  cartIconColor: "white",
  profileIconColorHover: "blue",
  searchIconColorHover: "black",
  cartIconColorHover: "orange",
  cartIconMargin: "2.5vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
