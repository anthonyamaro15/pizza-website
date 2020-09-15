import React from "react";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import logo from "../../imgs/logo.png";

const SecondNavbar = () => {
  return (
    <div className="SecondNavbar">
      <div className="Navbar-wrapper">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <div className="btn-delivery btns">
            <button className="delivery">
              Delivery
              <span className="inner-btn">2150 South Canalport Avenue...</span>
            </button>
          </div>
          <div className="btn-login btns">
            <button className="login">
              login <span className="inner-btn">or Create Account</span>
            </button>
          </div>
          <div className="btn-checkout btns">
            <button className="checkout">
              checkout{" "}
              <span className="cart">
                <ImCart />
              </span>
              <span className="inner-btn">total</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SecondNavbar;
