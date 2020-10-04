import React, { useEffect, useState } from "react";
// import { User } from "../../interfaces/ShareInterfaces";
import io from "socket.io-client";

const socket = io(`${process.env.REACT_APP_API_URL}`);
// const socket = io(`http://localhost:4100/`);

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  // watch order
  useEffect(() => {
    socket.on("send-order", (order: never[]) => {
      setOrders(order);
    });
  }, []);

  const onSubmit = (e: any) => {
    let sendValues = { orderInformation: orders[0], status: e.target.value };
    socket.emit("order-status", sendValues);
  };
  return (
    <div className="AdminDashboard">
      {orders.map((ord: any, i) => (
        <div className="AdminDashboard-inner" key={i}>
          <div className="order-information">
            <div className="order-items shared">
              <h3>orders</h3>
              <div className="inner-item-wrapper">
                <p className="token">{ord.token}</p>
                {ord.cartData.map((order: any) => (
                  <div key={order.id}>
                    <p>{order.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="customer shared">
              <h3>customer</h3>
              <div className="inner-item-wrapper">
                <p>
                  {ord.user
                    ? `${ord.user?.first_name} ${ord.user?.last_name}`
                    : ""}
                </p>
              </div>
            </div>
            <div className="address shared">
              <h3>address</h3>
              <div className="inner-item-wrapper">
                <p>{ord.user ? ord.user.address : ""} </p>
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
                <p>{ord.createdAt ? ord.createdAt : ""}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
