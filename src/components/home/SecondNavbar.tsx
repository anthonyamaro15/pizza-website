import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import CheckoutCartModal from "./CheckoutCartModal";
import LoginModal from "./LoginModal";
import DeliveryModal from "./DeliveryModal";

interface Props {
  open: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}
const SecondNavbar: React.FC<Props> = ({
  open,
  openLoginModal,
  closeLoginModal,
}) => {
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
            <LoginModal
              open={open}
              openLoginModal={openLoginModal}
              closeLoginModal={closeLoginModal}
            />
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
