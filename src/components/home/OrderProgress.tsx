import React from "react";

const OrderProgress = () => {
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
