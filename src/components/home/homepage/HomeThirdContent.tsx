import React from "react";
import { Link } from "react-router-dom";
import testing from "../../../imgs/recipes.png";

const HomeThirdContent = () => {
  return (
    <div className="HomeContent">
      <section className="content-wrapper">
        <div className="item-desc">
          <h1>SO, WHAT'S SO SPECIAL ABOUT LOU'S PIZZA?</h1>
          <span>Our recipe and our ingredients.</span>
          <p>
            Flaky, buttery pizza crust, an exclusive sausage blend, vine ripened
            plum tomatoes from California, and Wisconsin cheese. Hungry yet?
          </p>
          <Link to="/pizzas">see how we make them</Link>
        </div>
        <div className="img-wrapper">
          <img src={testing} alt="lemon wings" />
        </div>
      </section>
      <div className="border-bottom"></div>
    </div>
  );
};

export default HomeThirdContent;
