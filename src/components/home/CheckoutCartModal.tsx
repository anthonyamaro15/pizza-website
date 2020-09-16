import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ImCart } from "react-icons/im";

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
        <h2>Try tabbing/shift-tabbing thru elements</h2>
        <form action="">
          <p>
            <label htmlFor="firstName">
              First name
              <input type="text" />
            </label>
          </p>
          <p>
            <label htmlFor="lastName">
              Last name
              <input type="text" />
            </label>
          </p>
          <button>test</button>
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </>
  );
};

export default CheckoutCartModal;
