import React, { useState } from "react";
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

      <Route path="/pizzas" exact>
        <Content openLoginModal={openLoginLModal} open={open} />
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
