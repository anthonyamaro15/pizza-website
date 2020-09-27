import React from "react";
import SingleCardComponent from "./SingleCardComponent";
import { useParams } from "react-router-dom";
import {
  ItemInformationAdd,
  ItemInformation,
} from "../../interfaces/ShareInterfaces";

interface Values {
  appetizers?: ItemInformationAdd[];
  combos?: ItemInformationAdd[];
  desserts?: ItemInformationAdd[];
  drinks?: ItemInformationAdd[];
  extrass?: ItemInformationAdd[];
  pastas?: ItemInformationAdd[];
  pizzas?: ItemInformationAdd[];
  salads?: ItemInformationAdd[];
  sandwiches?: ItemInformationAdd[];
}

interface Props {
  open: boolean;
  openLoginModal: () => void;
  data: Values;
  getItemsInCart: () => void;
  cartData: ItemInformation[];
}

const Content: React.FC<Props> = ({
  open,
  openLoginModal,
  data,
  getItemsInCart,
  cartData,
}) => {
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

  return cartData && category === "pizzas" ? (
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
              getItemsInCart={getItemsInCart}
              cartData={cartData}
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
              getItemsInCart={getItemsInCart}
              cartData={cartData}
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
              getItemsInCart={getItemsInCart}
              cartData={cartData}
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
              getItemsInCart={getItemsInCart}
              cartData={cartData}
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
              getItemsInCart={getItemsInCart}
              cartData={cartData}
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
            {salads?.map((val: ItemInformationAdd) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
                getItemsInCart={getItemsInCart}
                cartData={cartData}
              />
            ))}
          </div>
        </div>
      )}

      {category === "appetizers" && (
        <div className="Content-inner">
          <div className="items">
            {appetizers?.map((val: ItemInformationAdd) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
                getItemsInCart={getItemsInCart}
                cartData={cartData}
              />
            ))}
          </div>
        </div>
      )}

      {category === "pastas" && (
        <div className="Content-inner">
          <div className="items">
            {pastas?.map((val: ItemInformationAdd) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
                getItemsInCart={getItemsInCart}
                cartData={cartData}
              />
            ))}
          </div>
        </div>
      )}

      {category === "combos" && (
        <div className="Content-inner">
          <div className="items">
            {combos?.map((val: ItemInformationAdd) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
                getItemsInCart={getItemsInCart}
                cartData={cartData}
              />
            ))}
          </div>
        </div>
      )}

      {category === "sandwiches" && (
        <div className="Content-inner">
          <div className="items">
            {sandwiches?.map((val: ItemInformationAdd) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
                getItemsInCart={getItemsInCart}
                cartData={cartData}
              />
            ))}
          </div>
        </div>
      )}

      {category === "desserts" && (
        <div className="Content-inner">
          <div className="items">
            {desserts?.map((val: ItemInformationAdd) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
                getItemsInCart={getItemsInCart}
                cartData={cartData}
              />
            ))}
          </div>
        </div>
      )}

      {category === "drinks" && (
        <div className="Content-inner">
          <div className="items">
            {drinks?.map((val: ItemInformationAdd) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
                getItemsInCart={getItemsInCart}
                cartData={cartData}
              />
            ))}
          </div>
        </div>
      )}

      {category === "extras" && (
        <div className="Content-inner">
          <div className="items">
            {extrass?.map((val: ItemInformationAdd) => (
              <SingleCardComponent
                key={val.id}
                val={val}
                open={open}
                openLoginModal={openLoginModal}
                getItemsInCart={getItemsInCart}
                cartData={cartData}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
