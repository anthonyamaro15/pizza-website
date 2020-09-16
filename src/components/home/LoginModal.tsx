import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const redirect = () => {
    history.push("/new");
    setOpen(false);
  };

  const forgotPassword = () => {
    history.push("/reset_password");
    setOpen(false);
  };
  return (
    <>
      <button className="login" onClick={() => setOpen(true)}>
        login <span className="inner-btn">or Create Account</span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="Forms-wrapper">
          <div className="LoginForm">
            <h3>login</h3>
            <form>
              <label htmlFor="firstName">
                email
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="lou@malnatis.com"
                />
              </label>

              <label htmlFor="lastName">
                password
                <input type="password" name="password" id="password" />
              </label>

              <button>sign in</button>
              <span className="forgot-pass" onClick={forgotPassword}>
                Forgot your password?
              </span>
            </form>
          </div>
          <div className="SignUpForm">
            <h3>create an account</h3>
            <div className="befenifts">
              <span>- Earn points for every dollar spent!</span>
              <span>- Use points for free food!</span>
              <span>- Save addresses for easy ordering.</span>
              <span>- Repeat previous orders.</span>
              <span>- Save payments for fast checkout.</span>
              <span className="create-account" onClick={redirect}>
                create account
              </span>
            </div>
            {/* <form>
              <label htmlFor="firstName">
                First name
                <input type="text" />
              </label>

              <label htmlFor="lastName">
                Last name
                <input type="text" />
              </label>

              <button>test</button>
              <input type="submit" value="Submit" />
            </form> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
