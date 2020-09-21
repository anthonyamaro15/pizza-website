import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import axios from "axios";

interface Props {
  open: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

interface InputValues {
  email: string;
  password: string;
}

const LoginModal: React.FC<Props> = ({
  open,
  openLoginModal,
  closeLoginModal,
}) => {
  //   const [setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<InputValues>();
  const history = useHistory();

  const redirect = () => {
    history.push("/new");
    //  setOpen(false);
    closeLoginModal();
  };

  const forgotPassword = () => {
    history.push("/reset_password");
    //  setOpen(false);
    closeLoginModal();
  };

  const onSubmit = (values: InputValues) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/login`, values)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("client_token", JSON.stringify(res.data.token));
        localStorage.setItem("id", JSON.stringify(res.data.id));
        closeLoginModal();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <>
      <button className="login" onClick={openLoginModal}>
        login <span className="inner-btn">or Create Account</span>
      </button>
      <Modal open={open} onClose={closeLoginModal}>
        <div className="Forms-wrapper">
          <div className="LoginForm">
            <h3>login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="firstName">
                email
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="lou@malnatis.com"
                  ref={register}
                />
              </label>

              <label htmlFor="lastName">
                password
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={register}
                />
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
