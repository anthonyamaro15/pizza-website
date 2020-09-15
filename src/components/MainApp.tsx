import React from "react";
import Content from "./home/Content";
import FirstNavbar from "./home/FirstNavbar";
import NavRoutes from "./home/NavRoutes";
import SecondNavbar from "./home/SecondNavbar";

const MainApp = () => {
  return (
    <div>
      <FirstNavbar />
      <SecondNavbar />
      <NavRoutes />
      <Content />
    </div>
  );
};

export default MainApp;
