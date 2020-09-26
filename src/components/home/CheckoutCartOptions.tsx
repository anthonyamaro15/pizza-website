import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";

interface Inputs {
  size: string;
  quantity: number;
}

interface ItemInformation {
  category: string;
  category_name: string;
  cheese: string;
  description: string;
  dressing: any;
  price: number;
  quantity: number;
  user_id: number;
  id: number;
  name: string;
  img_url: string;
  peppers: any;
  sauce: any;
  side: string;
  size_price: any;
}
interface User {
  address: string;
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  phone_number: string;
}

interface Props {
  meal: any;
  getItemsInCart: () => void;
  cartData: ItemInformation[];
  user: User[];
}

const SingleCardComponent: React.FC<Props> = ({
  meal,
  getItemsInCart,
  cartData,
  user,
}) => {
  const [order, setOrder] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPrices(meal.size_price.split(","));
  }, [meal]);

  const onSubmit = (values: Inputs) => {
    setLoading(true);
    let price = Number(values.size.split("$")[1]);
    let quantity = Number(values.quantity);

    let userOrder = {
      ...meal,
      price,
      quantity,
      size_price: "",
      user_id: Number(user[0].id),
    };

    let alreadyInCart = cartData.filter((item) => item.id === userOrder.id);

    if (alreadyInCart.length) {
      let quantity = (alreadyInCart[0].quantity += Number(values.quantity));
      axios
        .patch(
          `${process.env.REACT_APP_API_URL}/api/cart/update_item_in_cart/${user[0].id}/${userOrder.id}`,
          { quantity }
        )
        .then(() => {
          getItemsInCart();
          setOrder(false);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/cart/add`, userOrder)
        .then(() => {
          getItemsInCart();
          setOrder(false);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  const handleOrder = () => {
    setOrder(true);
  };
  return (
    <div className="CheckoutCartOptions">
      <div className="img-wrapper">
        <img src={meal.img_url} alt="this is logo of company" />
      </div>
      <div className="space-between">
        <div className="item-information">
          <h3>{meal.name}</h3>
        </div>
        <div className="lower-content">
          {!order ? (
            <button onClick={handleOrder} className="btn">
              Order Now
              <span>
                <BsArrowRightShort />
              </span>
            </button>
          ) : (
            <div className="add-to-cart">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="size">
                  <select name="size" id="size" ref={register}>
                    {prices.map((price: string, i) => (
                      <option value={price} key={i}>
                        {price}
                      </option>
                    ))}
                  </select>
                </label>
                <label htmlFor="quantity">
                  Qty:
                  <select name="quantity" id="quantity" ref={register}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </label>
                <button type="submit" className="btn">
                  {loading ? "adding..." : "Add to Cart"}
                  <span>
                    <BsArrowRightShort />
                  </span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// BsArrowRightShort;

export default SingleCardComponent;
