import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ImCart } from "react-icons/im";
import logo from "../../imgs/logo.png";
import CheckoutCartOptions from "./CheckoutCartOptions";
import { BsArrowRightShort } from "react-icons/bs";

const CheckoutCartModal = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button className="checkout" onClick={() => setOpen(true)}>
        checkout{" "}
        <span className="cart">
          <ImCart />
        </span>
        <span className="inner-btn">total</span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal-wrapper">
          <div className="items-in-cart">
            <div className="item-desc">
              <div className="img-wrapper">
                <img src={logo} alt="this is whats in your cart" />

                <div className="item-name">
                  <p>large deep dish cheese</p>
                  <p className="remove-from-cart">
                    (<span>remove</span>)
                  </p>
                  <ul>
                    <li>just right</li>
                    <li>cut</li>
                  </ul>
                </div>
              </div>
              <span className="price">$23.95</span>
            </div>
          </div>
          <div className="make-meal-complete">
            <h1>make your meal complete</h1>
            <div className="show-choices">
              <CheckoutCartOptions />
              <CheckoutCartOptions />
              <CheckoutCartOptions />
            </div>
          </div>

          <div className="total-information">
            <p>
              subtotal: <span>$23.95</span>
            </p>
            <p>
              tax: <span>$2.95</span>
            </p>
            <p>
              delivery: <span>$4.00</span>
            </p>
            <p>
              total: <span>$30.76</span>
            </p>
            <div className="checkout-button">
              <button className="btn">
                Checkout
                <span>
                  <BsArrowRightShort />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CheckoutCartModal;
