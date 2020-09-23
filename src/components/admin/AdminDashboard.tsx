import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4200");

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    socket.on("send-order", (order: any) => {
      console.log("do we get the order??? ", order);
      setData(order.cartData);
      setToken(order.token);
    });
  }, []);

  const onSubmit = (e: any) => {
    console.log("values from dashboard here ", e.target.value);
    socket.emit("order-status", e.target.value);
  };
  return (
    <div className="AdminDashboard">
      <form>
        <label htmlFor="status">
          <select name="status" id="status" onChange={onSubmit}>
            <option value="">Order status</option>
            <option value="confirm_order">confirm order</option>
            <option value="preparing">preparing</option>
            <option value="out_for_delivery">out for delivery</option>
            <option value="complete">complete</option>
          </select>
        </label>
      </form>
      <p>{token}</p>
      {data.map((order: any) => (
        <div key={order.id}>
          <p>{order.name}</p>
          <p>{order.quantity}</p>
          <p>{order.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
