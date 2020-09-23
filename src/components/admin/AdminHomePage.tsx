import React from "react";
import AdminAddMenu from "./AdminAddMenu";

// import axios from "axios";

// import io from "socket.io-client";

// const socket = io("http://localhost:4200");

const AdminHomePage = () => {
  //   useEffect(() => {
  //     socket.on("send-order", (order: any) => {
  //       console.log("do we get the order??? ", order);
  //     });
  //   }, []);

  return (
    <div className="AdminHomePage">
      <AdminAddMenu />
    </div>
  );
};

export default AdminHomePage;
