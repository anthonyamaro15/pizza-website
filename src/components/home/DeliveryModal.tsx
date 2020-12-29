import React from "react";
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
  openDeliveryModal: () => void;
  closeDeliveryModal: () => void;
  open: boolean;
}

const DeliveryModal: React.FC<Props> = ({ 
   user,
    open, 
   openDeliveryModal, 
   closeDeliveryModal 
}) => {

  return (
    <>
      <button className="delivery" onClick={openDeliveryModal}>
        Delivery
        <span className="inner-btn">
          {user.length && user[0].address.length > 15
            ? user[0].address.slice(0, 15) + "..."
            : "No address"}
        </span>
      </button>
      <Modal open={open} onClose={closeDeliveryModal}>
        <div className="DeliveryModal">
          <h3>delivered to</h3>
          <p>{user.length ? user[0].address : "No address"}</p>
        </div>
      </Modal>
    </>
  );
};

export default DeliveryModal;
