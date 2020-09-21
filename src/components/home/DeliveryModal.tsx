import React, { useState, useEffect, SetStateAction } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";

interface User {
  address: string;
  first_name: string;
  last_name: string;
  id: number;
}

const DeliveryModal = () => {
  const [id, setId] = useState<SetStateAction<string> | null>("");
  const [user, setUser] = useState<User[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("id");

    if (userId) {
      setId(userId);
    }
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/cart/user/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }, [id]);

  return (
    <>
      <button className="delivery" onClick={() => setOpen(true)}>
        Delivery
        <span className="inner-btn">
          {user.length ? user[0].address : "No address"}
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
