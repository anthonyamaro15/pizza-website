import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const LoginModal = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button className="login" onClick={() => setOpen(true)}>
        login <span className="inner-btn">or Create Account</span>
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

export default LoginModal;
