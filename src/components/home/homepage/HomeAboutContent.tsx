import React from "react";
import { Link } from "react-router-dom";
import about from "../../../imgs/about.png";

const HomeAboutContent = () => {
  return (
    <div className="HomeAboutContent">
      <div className="border-one">
        <div className="border-two">
          <section className="content-wrapper">
            <div className="item-desc">
              <span className="subtitle">how we got started</span>
              <h1>CHICAGO’S BEST DEEP DISH, SINCE 1971</h1>
              <span>
                Considered the oldest family name in Chicago pizza, Lou
                Malnati's is as rich in history as its pizza is in flavor.
              </span>
              <p>
                Lou Malnati got his start in the 1940's working in Chicago's
                first deep dish pizzeria. He took his pizza expertise to
                Lincolnwood, a northern suburb of Chicago, where he and his wife
                Jean opened the first Lou Malnati's Pizzeria on March 17, 1971.
              </p>
              <Link to="/pizzas">read the rest</Link>
            </div>
            <div className="img-wrapper">
              <img src={about} alt="lemon wings" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutContent;
