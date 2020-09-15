import React from "react";
import { Link } from "react-router-dom";

const SecondNavbar = () => {
  return (
    <div className="SecondNavbar">
      <Link to="/">
        <img src="" alt="" />
      </Link>
      <nav>
        <div className="btn-delivery btns">
          <button className="delivery">Delivery</button>
          <span>address here</span>
        </div>
        <div className="btn-login btns">
          <button className="login">login</button>
          <span>or Create Account</span>
        </div>
        <div className="btn-checkout btns">
          <button className="checkout">
            checkout <span>icon</span>
          </button>
          <span>total</span>
        </div>
      </nav>
    </div>
  );
};

export default SecondNavbar;
