import React from "react";
import { Link } from "react-router-dom";
// import wing from "../../../imgs/wings.jpg";
import employee from "../../../imgs/worker.jpg";

const HomeFourthContent = () => {
  return (
    <div className="HomeContent">
      <section className="content-wrapper">
        <div className="img-wrapper">
          <img src={employee} alt="lemon wings" />
        </div>
        <div className="item-desc">
          <h1>OUR PEOPLE ARE OUR REAL KEY INGREDIENT</h1>
          <span>It’s more than pizza....</span>
          <p>
            Lou Malnati’s culture can be defined in one word: Family. We are a
            family-owned company, but more than that, our team has a “family”
            way of connecting and caring for one another.
          </p>
          <Link to="/pizzas">join the lou's crew</Link>
        </div>
      </section>
      <div className="border-bottom"></div>
    </div>
  );
};

export default HomeFourthContent;
