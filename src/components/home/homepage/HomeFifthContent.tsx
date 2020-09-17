import React from "react";
import { Link } from "react-router-dom";
// import wing from "../../../imgs/wings.jpg";
import pizza2 from "../../../imgs/pizza2.png";

const HomeFifthContent = () => {
  return (
    <div className="HomeContent">
      <section className="content-wrapper">
        <div className="item-desc">
          <h1>SHIP LOU MALNATI'S DEEP DISH PIZZAS!</h1>
          <span>Send a taste of Chicago coast to coast.</span>
          <p>
            9-inch deep dish pizzas are made fresh, then flash frozen to
            preserve their hot out of the oven freshness, and shipped to your
            destination on dry ice.
          </p>
          <Link to="/pizzas">ship a pizza</Link>
        </div>
        <div className="img-wrapper">
          <img src={pizza2} alt="lemon wings" />
        </div>
      </section>
    </div>
  );
};

export default HomeFifthContent;
