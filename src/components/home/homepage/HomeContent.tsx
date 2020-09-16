import React from "react";
import { Link } from "react-router-dom";
import wings from "../../../imgs/wings.jpg";

const HomeContent = () => {
  return (
    <div className="HomeContent">
      <section className="content-wrapper">
        <div className="item-desc">
          <h3>new! lemon pepper wings</h3>
          <span>Try our new wing flavor, available at all locations!</span>
          <p>
            Enjoy crispy, fried chicken wings tossed in a house made lemon
            pepper butter. Available for both traditional wings and boneless
            wings.
          </p>
          <Link to="/pizzas">start my order</Link>
        </div>
        <div className="img-wrapper">
          <img src={wings} alt="lemon wings" />
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
