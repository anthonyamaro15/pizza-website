import { Value } from "knex";
import axios from "axios";
import React, { ReactNode, useState, useEffect } from "react";
import SingleCardComponent from "./SingleCardComponent";
import { useParams } from "react-router-dom";

interface ItemInformation {
  category: string;
  category_name: string;
  cheese: string;
  description: string;
  dressing: any;
  id: number;
  name: string;
  img_url: string;
  peppers: any;
  sauce: any;
  side: string;
  size_price: any;
}

interface Values {
  appetizers?: ItemInformation[];
  combos?: ItemInformation[];
  desserts?: ItemInformation[];
  drinks?: ItemInformation[];
  extrass?: ItemInformation[];
  pastas?: ItemInformation[];
  pizzas?: ItemInformation[];
  salads?: ItemInformation[];
  sandwiches?: ItemInformation[];
}

interface Props {
  open: boolean;
  openLoginModal: () => void;
  data: Values;
}

const Content: React.FC<Props> = ({ open, openLoginModal, data }) => {
  const { category } = useParams<{ category: string }>();
  const {
    appetizers,
    combos,
    desserts,
    drinks,
    extrass,
    pastas,
    pizzas,
    salads,
    sandwiches,
  } = data;

  let deep_dish_pizza = pizzas?.filter(
    (pizza) => pizza.category_name === "deep_dish_pizzas"
  );
  let thin_crust_pizza = pizzas?.filter(
    (pizza) => pizza.category_name === "thin_crust_pizzas"
  );

  let speciality_pizza = pizzas?.filter(
    (pizza) => pizza.category_name === "speciality_pizza"
  );

  let frozen_pizza = pizzas?.filter(
    (pizza) => pizza.category_name === "frozen_pizza"
  );

  // check what the params are. so we know which component to render.
  return category === "pizzas" ? (
    <div className="Content">
      <div className="Content-inner">
        <h1>Deep dish pizza</h1>
        <div className="items">
          {deep_dish_pizza?.map((val) => (
            <SingleCardComponent
              key={val.id}
              val={val}
              open={open}
              openLoginModal={openLoginModal}
            />
          ))}
        </div>
      </div>

      <div className="Content-inner">
        <h1>thin crust pizza</h1>
        <div className="items">
          {thin_crust_pizza?.map((val) => (
            <SingleCardComponent
              key={val.id}
              val={val}
              open={open}
              openLoginModal={openLoginModal}
            />
          ))}
        </div>
      </div>

      <div className="Content-inner">
        <h1>speciality pizza</h1>
        <div className="items">
          {speciality_pizza?.map((val) => (
            <SingleCardComponent
              key={val.id}
              val={val}
              open={open}
              openLoginModal={openLoginModal}
            />
          ))}
        </div>
      </div>

      <div className="Content-inner">
        <h1>frozen pizza</h1>
        <div className="items">
          {frozen_pizza?.map((val) => (
            <SingleCardComponent
              key={val.id}
              val={val}
              open={open}
              openLoginModal={openLoginModal}
            />
          ))}
        </div>
      </div>

      <div className="Content-inner">
        <h1>popular combos</h1>
        <div className="items">
          {combos?.map((val) => (
            <SingleCardComponent
              key={val.id}
              val={val}
              open={open}
              openLoginModal={openLoginModal}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="Content">
      {category === "salads" && (
        <div className="Content-inner">
          <div className="items">
            {salads?.map((val: ItemInformation) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
              />
            ))}
          </div>
        </div>
      )}

      {category === "appetizers" && (
        <div className="Content-inner">
          <div className="items">
            {appetizers?.map((val: ItemInformation) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
              />
            ))}
          </div>
        </div>
      )}

      {category === "pastas" && (
        <div className="Content-inner">
          <div className="items">
            {pastas?.map((val: ItemInformation) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
              />
            ))}
          </div>
        </div>
      )}

      {category === "combos" && (
        <div className="Content-inner">
          <div className="items">
            {combos?.map((val: ItemInformation) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
              />
            ))}
          </div>
        </div>
      )}

      {category === "sandwiches" && (
        <div className="Content-inner">
          <div className="items">
            {sandwiches?.map((val: ItemInformation) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
              />
            ))}
          </div>
        </div>
      )}

      {category === "desserts" && (
        <div className="Content-inner">
          <div className="items">
            {desserts?.map((val: ItemInformation) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
              />
            ))}
          </div>
        </div>
      )}

      {category === "drinks" && (
        <div className="Content-inner">
          <div className="items">
            {drinks?.map((val: ItemInformation) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
              />
            ))}
          </div>
        </div>
      )}

      {category === "extras" && (
        <div className="Content-inner">
          <div className="items">
            {extrass?.map((val: ItemInformation) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
