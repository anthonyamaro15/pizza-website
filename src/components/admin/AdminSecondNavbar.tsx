import React, { useState, useEffect, SetStateAction } from "react";
import { User } from "../../interfaces/ShareInterfaces";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import LoginModal from "../home/LoginModal";
import axios from "axios";

interface Props {
  open: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const AdminSecondNavbar: React.FC<Props> = ({
  open,
  openLoginModal,
  closeLoginModal,
}) => {
  const [id, setId] = useState<SetStateAction<string> | null>("");
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    const userId = localStorage.getItem("id");

    if (userId) {
      setId(userId);
    }
  }, []);

  useEffect(() => {
    if (id) {
      getUserData();
    }
  }, [id]);

  function getUserData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cart/user/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  return (
    <div className="SecondNavbar">
      <div className="Navbar-wrapper">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <div className="btn-login btns">
            <LoginModal
              open={open}
              openLoginModal={openLoginModal}
              closeLoginModal={closeLoginModal}
              user={user}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminSecondNavbar;
