import React from "react";
import SingleCardComponent from "./SingleCardComponent";
// import { Route } from "react-router-dom";

interface Props {
  open: boolean;
  openLoginModal: () => void;
}
const Content: React.FC<Props> = ({ open, openLoginModal }) => {
  return (
    <div className="Content">
      <div className="Content-inner">
        <h1>Deep dish pizza</h1>
        <div className="items">
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
        </div>
      </div>
      <div className="Content-inner">
        <h1>thin crust pizza</h1>
        <div className="items">
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
        </div>
      </div>
      <div className="Content-inner">
        <h1>speciality pizza</h1>
        <div className="items">
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
        </div>
      </div>
      <div className="Content-inner">
        <h1>frozen pizzas</h1>
        <div className="items">
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
        </div>
      </div>
      <div className="Content-inner">
        <h1>popular combos</h1>
        <div className="items">
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
          <SingleCardComponent open={open} openLoginModal={openLoginModal} />
        </div>
      </div>
    </div>
  );
};

export default Content;
