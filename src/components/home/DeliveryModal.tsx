import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

interface User {
  address: string;
  first_name: string;
  last_name: string;
  id: number;
}

interface Props {
  user: User[];
}

const DeliveryModal: React.FC<Props> = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="delivery" onClick={() => setOpen(true)}>
        Delivery
        <span className="inner-btn">
          {user.length && user[0].address.length > 15
            ? user[0].address.slice(0, 15) + "..."
            : "No address"}
        </span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="DeliveryModal">
          <h3>delivered to</h3>
          <p>{user.length ? user[0].address : "No address"}</p>
        </div>
      </Modal>
    </>
  );
};

export default DeliveryModal;
