import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { FaYelp } from "react-icons/fa";
import logo2 from "../../imgs/logo2.png";
import logo3 from "../../imgs/logo3.png";

const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <nav>
          <div className="web-links">
            <span>
              {" "}
              <a href="google.com" target="_blank">
                <FaFacebookF />
              </a>{" "}
            </span>
            <span>
              <a>
                <FaInstagram />
              </a>{" "}
            </span>
            <span>
              <a>
                <FaTwitter />
              </a>{" "}
            </span>
            <span>
              <a>
                <FaGooglePlusG />
              </a>{" "}
            </span>
            <span>
              <a>
                <ImYoutube2 />
              </a>{" "}
            </span>
            <span>
              <a>
                <FaYelp />
              </a>{" "}
            </span>
          </div>
          <div className="redirect-links">
            <div className="left-side">
              <Link to="/">oder online</Link>
              <Link to="/">find your location</Link>
              <Link to="/">catering</Link>
              <Link to="/">baking & reheating</Link>
              <Link to="/">nutrition info</Link>
            </div>
            <div className="right-side">
              <Link to="/">about lou's</Link>
              <Link to="/">blog</Link>
              <Link to="/">careers</Link>
              <Link to="/">community</Link>
              <Link to="/">contact</Link>
            </div>
          </div>
        </nav>
        <div className="more-info">
          <div className="nation-wide">
            <img src={logo3} alt="" />
            <h3>lou's nationwide</h3>
            <p>
              Tastes of Chicago delivers all of Chicago’s favorite foods
              nationwide
            </p>
          </div>
          <div className="work-forus">
            <img src={logo2} alt="" />
            <h3>Work for Lou's</h3>
            <p>
              Named one of the Top Workplaces in Chicago for the past seven
              years!
            </p>
          </div>
        </div>
      </footer>
      <p className="copyright">&copy; 2020 Lous Malnati's Pizzeria</p>
    </div>
  );
};

export default Footer;
