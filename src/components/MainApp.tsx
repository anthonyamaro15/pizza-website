import React, { useState, useEffect, SetStateAction } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Content from "./home/Content";
import FirstNavbar from "./home/FirstNavbar";
import Footer from "./home/Footer";
import NavRoutes from "./home/NavRoutes";
import SecondNavbar from "./home/SecondNavbar";
import SignUp from "./home/SignUp";
import ForgotPassword from "./home/ForgotPassword";
import HomePage from "./home/homepage/HomePage";

import MainAdmin from "./admin/MainAdmin";
import OrderProgress from "./home/OrderProgress";
import AdminDashboard from "./admin/AdminDashboard";
import AdminSecondNavbar from "./admin/AdminSecondNavbar";
import ResetPassword from "./home/ResetPassword";

import MobileNavbars from "./home/homepage/mobileComponents/NavbarsMobile";
import { serverUrl } from '../envVariables';

const MainApp = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState({});
  const [cartData, setCartData] = useState([]);
  const [id, setId] = useState<SetStateAction<string> | null>("");

  useEffect(() => {
    const userId = localStorage.getItem("id");

    if (userId) {
      setId(userId);
    }
  }, []);

  useEffect(() => {
     async function getMenu() {
        try {
           const response = await axios.get(`${serverUrl}/api/menu/get_menu`);
           setMenu(response.data);
        } catch (error) {
          console.log(error.response.data); 
        }
     }
     getMenu();
  }, []);

  useEffect(() => {
    if (id) {
      getItemsInCart();
    }
  }, [id]);

  async function getItemsInCart() {
     try {
      const response = await axios.get(`${serverUrl}/api/cart/items_in_cart/${id}`);
      setCartData(response.data);
     } catch (error) {
       console.log(error.response.data); 
     }
  }

  const openLoginLModal = () => {
    setOpen(true);
  };

  const closeLoginModal = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <FirstNavbar />
      <MobileNavbars
        openLoginModal={openLoginLModal}
        closeLoginModal={closeLoginModal}
        open={open}
        cartData={cartData}
        getItemsInCart={getItemsInCart}
      />

      <Route path="/" exact>
        <SecondNavbar
          openLoginModal={openLoginLModal}
          closeLoginModal={closeLoginModal}
          open={open}
          cartData={cartData}
          getItemsInCart={getItemsInCart}
        />
        <HomePage />
      </Route>

      <Route path="/:category" exact>
        <SecondNavbar
          openLoginModal={openLoginLModal}
          closeLoginModal={closeLoginModal}
          open={open}
          cartData={cartData}
          getItemsInCart={getItemsInCart}
        />
        <NavRoutes />
      </Route>

      <Route path="/:category" exact>
        <Content
          openLoginModal={openLoginLModal}
          open={open}
          data={menu}
          getItemsInCart={getItemsInCart}
          cartData={cartData}
        />
      </Route>

      <Route path="/user/register" exact>
        <SecondNavbar
          openLoginModal={openLoginLModal}
          closeLoginModal={closeLoginModal}
          open={open}
          cartData={cartData}
          getItemsInCart={getItemsInCart}
        />
        <NavRoutes />

        <SignUp openLoginModal={openLoginLModal} />
      </Route>
      <Route path="/reset_password" exact>
        <ForgotPassword />
      </Route>

      <Route exact path="/resetpassword/:token">
        <SecondNavbar
          openLoginModal={openLoginLModal}
          closeLoginModal={closeLoginModal}
          open={open}
          cartData={cartData}
          getItemsInCart={getItemsInCart}
        />
        <ResetPassword />
      </Route>

      <Route exact path="/admin">
        <MainAdmin />
      </Route>
      <Route exact path="/admin/dashboard">
        <AdminSecondNavbar
          openLoginModal={openLoginLModal}
          closeLoginModal={closeLoginModal}
          open={open}
        />
        <NavRoutes />

        <AdminDashboard />
      </Route>

      <Route exact path="/order/:token">
        <SecondNavbar
          openLoginModal={openLoginLModal}
          closeLoginModal={closeLoginModal}
          open={open}
          cartData={cartData}
          getItemsInCart={getItemsInCart}
        />
        <NavRoutes />
        <OrderProgress />
      </Route>
      <Footer />
    </div>
  );
};

export default MainApp;
