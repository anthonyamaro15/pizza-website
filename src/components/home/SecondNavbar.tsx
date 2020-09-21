import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import CheckoutCartModal from "./CheckoutCartModal";
import LoginModal from "./LoginModal";
import DeliveryModal from "./DeliveryModal";

interface ItemInformation {
  category: string;
  category_name: string;
  cheese: string;
  description: string;
  dressing: any;
  price: number;
  quantity: number;
  user_id: number;
  id: number;
  name: string;
  img_url: string;
  peppers: any;
  sauce: any;
  side: string;
  size_price: any;
}

interface Props {
  open: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  getItemsInCart: () => void;
  cartData: ItemInformation[];
}
const SecondNavbar: React.FC<Props> = ({
  open,
  openLoginModal,
  closeLoginModal,
  getItemsInCart,
  cartData,
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
            <CheckoutCartModal
              getItemsInCart={getItemsInCart}
              cartData={cartData}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SecondNavbar;
