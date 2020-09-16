import React from "react";
import { useHistory } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import logo1 from "../../../imgs/logo1.png";

const HomeHeader = () => {
  const history = useHistory();

  const redirect = () => {
    history.push("/pizzas");
  };
  return (
    <div className="HomeHeader">
      <header>
        <div className="title">
          <span>- legendary -</span>
          <h1>chigago deep dish</h1>
          <div className="btn-container">
            <button type="submit" className="btn" onClick={redirect}>
              start my order now!
              <span>
                <BsArrowRightShort />
              </span>
            </button>
          </div>
        </div>
        <div className="restaurant-description">
          <img src={logo1} alt="hahahahaahhahaahahhahah" />
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
