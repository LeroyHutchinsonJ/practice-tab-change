import React from "react";
import "./nav-bar.css";
import PropTypes from "prop-types";

//A function that takes another function and a number parameter
var NavBar = ({ handleTabChange }) => {
  return (
    <ul className="navBar">
      <li className="pageOne" onClick={() => handleTabChange(0)}>
        Page 1
      </li>
      <li className="pageTwo" onClick={() => handleTabChange(1)}>
        Page 2
      </li>
    </ul>
  );
};

NavBar.PropTypes = {
  activeTab: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired
};
export default NavBar;
