import React, { useState, useEffect, SetStateAction } from "react";
import { ItemInformation, User } from "../../interfaces/ShareInterfaces";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import CheckoutCartModal from "./CheckoutCartModal";
import LoginModal from "./LoginModal";
import DeliveryModal from "./DeliveryModal";
import axios from "axios";
import { serverUrl } from '../../envVariables';

interface Props {
  open: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  getItemsInCart: () => void;
  cartData: ItemInformation[];
}

const SecondNavbar: React.FC<Props> = ({
  open,
  openLoginModal,
  closeLoginModal,
  getItemsInCart,
  cartData,
}) => {
  const [id, setId] = useState<SetStateAction<string> | null>("");
  const [user, setUser] = useState<User[]>([]);
  const [openDMOdal, setOpenDModal] = useState(false);
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  

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

  async function getUserData() {
     try {
        const response = await axios.get(`${serverUrl}/api/cart/user/${id}`);
        setUser(response.data);
     } catch (error) {
        console.log(error.response);
     }
  }

  const openDeliveryModal = () => {
   setOpenDModal(true);
  }

  const closeDeliveryModal = () => {
     setOpenDModal(false);
  }

  const openCheckoutCartModal = () => {
     setOpenCheckoutModal(true);
  }

  const closeCheckoutCartModal = () => {
     setOpenCheckoutModal(false);
  }

  return (
    <div className="SecondNavbar">
      <div className="Navbar-wrapper">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <div className="btn-delivery btns">
            <DeliveryModal 
               user={user}
               open={openDMOdal}
               openDeliveryModal={openDeliveryModal}
               closeDeliveryModal={closeDeliveryModal}
            />
          </div>
          <div className="btn-login btns">
            <LoginModal
              open={open}
              openLoginModal={openLoginModal}
              closeLoginModal={closeLoginModal}
              user={user}
            />
          </div>
          <div className="btn-checkout btns">
            <CheckoutCartModal
              open={openCheckoutModal}
              openCheckoutCartModal={openCheckoutCartModal}
              closeCheckoutCartModal={closeCheckoutCartModal}
              getItemsInCart={getItemsInCart}
              cartData={cartData}
              user={user}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SecondNavbar;
