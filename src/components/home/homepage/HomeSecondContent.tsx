import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const HomeSecondContent = () => {
  return (
    <section className="HomeSecondContent">
      <div className="homeSectionContent-inner">
        <div className="border">
          <div className="all-locations">
            <h3>56 CHICAGOLAND LOCATIONS</h3>
            <nav>
              <Link to="/arizona">plus 4 in arizona,</Link>
              <Link to="/wisconsin"> 2 in wisconsin,</Link>
              <Link to="/indiana">and 2 in indiana!</Link>
            </nav>
            <p>
              We have dine-in restaurants and carryout and delivery only
              locations, so before you settle on a location, make sure they
              accommodate what you’re looking for!
            </p>
            <div className="btn-wrapper">
              <button type="submit" className="btn">
                find my location
                <span>
                  <BsArrowRightShort />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSecondContent;
