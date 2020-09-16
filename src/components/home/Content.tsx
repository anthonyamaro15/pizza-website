import React from "react";
import SingleCardComponent from "./SingleCardComponent";
// import { Route } from "react-router-dom";

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
        </div>
      </div>
      <div className="Content-inner">
        <h1>thin crust pizza</h1>
        <div className="items">
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
        </div>
      </div>
      <div className="Content-inner">
        <h1>speciality pizza</h1>
        <div className="items">
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
        </div>
      </div>
      <div className="Content-inner">
        <h1>frozen pizzas</h1>
        <div className="items">
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
          <SingleCardComponent />
        </div>
      </div>
      <div className="Content-inner">
        <h1>popular combos</h1>
        <div className="items">
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
