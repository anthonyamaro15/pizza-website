import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const DeliveryModal = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button className="delivery" onClick={() => setOpen(true)}>
        Delivery
        <span className="inner-btn">2150 South Canalport Avenue...</span>
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

export default DeliveryModal;
