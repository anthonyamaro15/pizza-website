import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4200");

const OrderProgress = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    socket.on("send-status", (order: string) => {
      console.log("please work  ", order);
      setStatus(order);
    });
  }, []);
  return (
    <div className="OrderProgress">
      <div className="OrderProgress-inner">
        <h1>track status</h1>

        <div className="progress">
          <div className="display">
            <p>order placed</p>
            <span>time</span>
          </div>
          <div className="display">
            <p>order confirmation</p>
            <span>time</span>
          </div>{" "}
          <div className="display">
            <p>preparing</p>
            <span>time</span>
          </div>
          <div className="display">
            <p>out for delivery</p>
            <span>time</span>
          </div>
          <div className="display">
            <p>complete</p>
            <span>time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProgress;
