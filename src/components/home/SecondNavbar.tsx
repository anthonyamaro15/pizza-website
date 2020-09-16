import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import CheckoutCartModal from "./CheckoutCartModal";
import LoginModal from "./LoginModal";
import DeliveryModal from "./DeliveryModal";

const SecondNavbar = () => {
  return (
    <div className="SecondNavbar">
      <div className="Navbar-wrapper">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <div className="btn-delivery btns">
            <DeliveryModal />
          </div>
          <div className="btn-login btns">
            <LoginModal />
          </div>
          <div className="btn-checkout btns">
            <CheckoutCartModal />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SecondNavbar;
