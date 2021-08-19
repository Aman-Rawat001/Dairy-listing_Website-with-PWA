import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUserAlt,
  faPhone,
} from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="navContainer">
          <div className="logoBox">
            <h4 className="logo ms-4" style={{ marginBottom: "0" }}>
              DairyNeed
            </h4>
          </div>
          <div className="searchBar py-1 px-3 my-1">
            <p>Dehradun, India</p>
            <div className="nearMe">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>Near me</p>
            </div>
          </div>
          <div className="contactUs">
            <FontAwesomeIcon icon={faPhone} />
            <p className="ms-2">9058153667, 7078810568</p>
          </div>

          <div className="me-4 signUp">
            <FontAwesomeIcon icon={faUserAlt} />
            <p>Login/Signup</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
