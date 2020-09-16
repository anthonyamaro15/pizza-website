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
        <div className="DeliveryModal">
          <h3>delivered to</h3>
          <p>2150 South Canalport Avenue Chicago, IL. 60608</p>
        </div>
      </Modal>
    </>
  );
};

export default DeliveryModal;
