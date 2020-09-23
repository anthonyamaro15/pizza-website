import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:4200");

const OrderProgress = () => {
  const [status, setStatus] = useState("confirm");
  const [progress, setProgress] = useState(false);
  const [orderComfirm, setOrderComfirm] = useState("");
  const [preparing, setPreparing] = useState("");
  const [outDevlivery, setOutDelivery] = useState("");
  const [completed, setCompleted] = useState("");
  const { token } = useParams<{ token: string }>();

  useEffect(() => {
    socket.on("send-status", (order: string) => {
      console.log("please work  ", order);
      if (order === "confirm_order") {
        setOrderComfirm(order);
        setStatus("");
      } else if (order === "preparing") {
        setOrderComfirm("");
        setPreparing(order);
      } else if (order === "out_for_delivery") {
        setOutDelivery(order);
        setPreparing("");
      } else if (order === "complete") {
        setCompleted(order);
        setOutDelivery("");
      }
    });
  }, []);

  return (
    <div className="OrderProgress">
      <div className="OrderProgress-inner">
        <div className="status-id">
          <h1>track status</h1>

          <p>
            order #<span>{token}</span>
          </p>
        </div>

        <div className="progress">
          <div
            className={status === "confirm" ? "display inProgress" : "display"}
          >
            <p>order placed</p>
            {/* <span>{new Date().toLocaleTimeString()}</span> */}
          </div>
          <div
            className={
              orderComfirm === "confirm_order"
                ? "display inProgress"
                : "display"
            }
          >
            <p>order confirmation</p>
            {/* <span>{orderComfirm ? new Date().toLocaleTimeString() : ""}</span> */}
          </div>{" "}
          <div
            className={
              preparing === "preparing" ? "display inProgress" : "display"
            }
          >
            <p>preparing</p>
            {/* <span>time</span> */}
          </div>
          <div
            className={
              outDevlivery === "out_for_delivery"
                ? "display inProgress"
                : "display"
            }
          >
            <p>out for delivery</p>
            {/* <span>time</span> */}
          </div>
          <div
            className={
              completed === "complete" ? "display inProgress" : "display"
            }
          >
            <p>complete</p>
            {/* <span>time</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProgress;
