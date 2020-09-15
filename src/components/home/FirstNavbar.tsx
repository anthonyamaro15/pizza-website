import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <Link to="/">
          <h3>hello</h3>
        </Link>
        <div className="Links">
          <Link to="/about">About Lou's</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/community">community</Link>
          <Link to="/catering">catering</Link>
        </div>
        <Link to="/">box</Link>
      </nav>
    </div>
  );
};

export default Navbar;
