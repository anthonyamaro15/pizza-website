import React from "react";
import SingleCardComponent from "./SingleCardComponent";
import CustomPizza from "./CustomPizza";
import { useParams } from "react-router-dom";
import sleeping from "../../imgs/sleeping.png";
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

   // we let the type as any because not all properties have the same
   // type of data
   const mapThroughItems = (arr: any) => {
      return arr?.map((val: any) => (
        <SingleCardComponent
          key={val.id}
          val={val}
          open={open}
          openLoginModal={openLoginModal}
          getItemsInCart={getItemsInCart}
          cartData={cartData}
        />
      ));
    };

  // check what the params are. so we know which component to render.
  //   const deep_dish_p = mapThroughItems(deep_dish_pizza);
  return category === "pizzas" ? (
    deep_dish_pizza ? (
      <div className="Content">
        <div className="Content-inner">
          {/* <h1>Deep dish pizza</h1> */}
          <div className="items">
             {mapThroughItems(deep_dish_pizza)}
          </div>
        </div>
        <div className="Content-inner">
          <h1>thin crust pizza</h1>
          <div className="items">
             {mapThroughItems(thin_crust_pizza)}
          </div>
        </div>
        <div className="Content-inner">
          <h1>speciality pizza</h1>
          <div className="items">
             {mapThroughItems(speciality_pizza)}
          </div>
        </div>
        <div className="Content-inner">
          <h1>frozen pizza</h1>
          <div className="items">
             {mapThroughItems(frozen_pizza)}
          </div>
        </div>
        <div className="Content-inner">
          <h1>popular combos</h1>
          <div className="items">
             {mapThroughItems(combos)}
          </div>
        </div>
      </div>
    ) : (
      <div className="loading-wrapper">
        <h2 className="loading">Please Wait Heroku is Waking Up</h2>
        <img src={sleeping} alt="icon of app sleeping" />
      </div>
    )
  ) : (
    <div className="Content">
      {category === "salads" && (
        <div className="Content-inner">
          <div className="items">
             {mapThroughItems(salads)}
          </div>
        </div>
      )}
      {category === "appetizers" && (
        <div className="Content-inner">
          <div className="items">
             {mapThroughItems(appetizers)}
          </div>
        </div>
      )}
      {category === "pastas" && (
        <div className="Content-inner">
          <div className="items">
             {mapThroughItems(pastas)}
          </div>
        </div>
      )}
      {category === "combos" && (
        <div className="Content-inner">
          <div className="items">
             {mapThroughItems(combos)}
          </div>
        </div>
      )}
      {category === "sandwiches" && (
        <div className="Content-inner">
          <div className="items">
             {mapThroughItems(sandwiches)}
          </div>
        </div>
      )}
      {category === "desserts" && (
        <div className="Content-inner">
          <div className="items">
             {mapThroughItems(desserts)}
          </div>
        </div>
      )}
      {category === "drinks" && (
        <div className="Content-inner">
          <div className="items">
             {mapThroughItems(drinks)}
          </div>
        </div>
      )}
      {category === "extras" && (
        <div className="Content-inner">
          <div className="items">
             {mapThroughItems(extrass)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
