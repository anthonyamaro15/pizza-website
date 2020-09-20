import React, { useState, useEffect } from "react";
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

const MainApp = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/menu/get_menu`)
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const openLoginLModal = () => {
    setOpen(true);
  };

  const closeLoginModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <FirstNavbar />
      <SecondNavbar
        openLoginModal={openLoginLModal}
        closeLoginModal={closeLoginModal}
        open={open}
      />
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/:category" exact>
        <NavRoutes />
      </Route>

      <Route path="/:category" exact>
        <Content openLoginModal={openLoginLModal} open={open} data={menu} />
      </Route>

      <Route path="/new" exact>
        <SignUp />
      </Route>
      <Route path="/reset_password" exact>
        <ForgotPassword />
      </Route>

      <Route exact path="/admin">
        <MainAdmin />
      </Route>

      <Footer />
    </div>
  );
};

export default MainApp;
