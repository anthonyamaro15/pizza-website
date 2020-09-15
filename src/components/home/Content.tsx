import React from "react";
import SingleCardComponent from "./SingleCardComponent";

const Content = () => {
  return (
    <div className="Content">
      <div className="Content-inner">
        <h1>Deep dish pizza</h1>
        <div className="items">
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
        </div>
      </div>
    </div>
  );
};

export default Content;
