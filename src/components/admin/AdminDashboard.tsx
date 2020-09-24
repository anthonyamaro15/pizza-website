import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4200");

interface User {
  address: string;
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  phone_number: string;
}

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [placed, setPlaced] = useState("");

  useEffect(() => {
    socket.on("send-order", (order: any) => {
      setData(order.cartData);
      setToken(order.token);
      setUser(order.user);
      setPlaced(order.createdAt);
    });
  }, []);

  const onSubmit = (e: any) => {
    socket.emit("order-status", e.target.value);
  };
  return (
    <div className="AdminDashboard">
      <div className="AdminDashboard-inner">
        <div className="order-information">
          <div className="order-items shared">
            <h3>orders</h3>
            <div className="inner-item-wrapper">
              <p>{token}</p>
              {data.map((order: any) => (
                <div key={order.id}>
                  <p>{order.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="customer shared">
            <h3>customer</h3>
            <div className="inner-item-wrapper">
              <p>{user ? `${user?.first_name} ${user?.last_name}` : ""}</p>
            </div>
          </div>
          <div className="address shared">
            <h3>address</h3>
            <div className="inner-item-wrapper">
              <p>{user ? user.address : ""} </p>
            </div>
          </div>
          <div className="status-form shared">
            <h3>status</h3>
            <div className="inner-item-wrapper">
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
            </div>
          </div>

          <div className="time-placed shared">
            <h3>placed at</h3>
            <div className="inner-item-wrapper">
              {" "}
              <p>{placed ? placed : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
