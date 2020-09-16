import React from "react";
import { Route } from "react-router-dom";
import Content from "./home/Content";
import FirstNavbar from "./home/FirstNavbar";
import Footer from "./home/Footer";
import NavRoutes from "./home/NavRoutes";
import SecondNavbar from "./home/SecondNavbar";
import SignUp from "./home/SignUp";
import ForgotPassword from "./home/ForgotPassword";

const MainApp = () => {
  return (
    <div>
      <FirstNavbar />
      <SecondNavbar />
      <NavRoutes />

      <Route path="/" exact>
        <Content />
      </Route>
      <Route path="/new" exact>
        <SignUp />
      </Route>
      <Route path="/reset_password" exact>
        <ForgotPassword />
      </Route>

      <Footer />
    </div>
  );
};

export default MainApp;
