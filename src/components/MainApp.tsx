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
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/menu/get_menu`)
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  useEffect(() => {
    if (id) {
      getItemsInCart();
    }
  }, [id]);

  function getItemsInCart() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cart/items_in_cart/${id}`)
      .then((res) => {
        setCartData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
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
        />
      </Route>

      <Route path="/new" exact>
        <SignUp />
        <SecondNavbar
          openLoginModal={openLoginLModal}
          closeLoginModal={closeLoginModal}
          open={open}
          cartData={cartData}
          getItemsInCart={getItemsInCart}
        />
      </Route>
      <Route path="/reset_password" exact>
        <ForgotPassword />
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
