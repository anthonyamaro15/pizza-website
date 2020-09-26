import React from "react";
import { Link } from "react-router-dom";
import box from "../../imgs/box.png";

const FirstNavbar = () => {
  return (
    <div className="FirstNavbar">
      <div className="Navbar-wrapper">
        <nav>
          <div className="Links">
            <Link to="/" className="locations">
              <h3>locations & menus</h3>
            </Link>
            <Link to="/about">About Lou's</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/community">community</Link>
            <Link to="/catering">catering</Link>
          </div>
          <Link to="/" className="box">
            <img src={box} alt="logo of pizza box" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default FirstNavbar;
