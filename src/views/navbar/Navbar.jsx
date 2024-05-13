import React from "react";
import "./navbar.styles.css";
import logo from "../../assets/logo.svg";

function Navbar() {
  const navbarData = ["Features", "About Us", "Support", "Pricing & Plans"];

  return (
    <div className="navbar">
      <a className="navbar-logo" href="#">
        <img src={logo} alt="logo" />
      </a>
      <ul className="navbar-menu">
        {navbarData.map((menu, index) => {
          return (
            <li key={index} className="navbar-menu-item">
              {menu}
            </li>
          );
        })}
      </ul>
      <button className="navbar-button">Contact us</button>
    </div>
  );
}

export default Navbar;
