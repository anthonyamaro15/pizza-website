import React, { useState, useEffect } from "react";
import { ItemInformation, User } from "../../interfaces/ShareInterfaces";
import { useForm } from "react-hook-form";
import { BsArrowRightShort } from "react-icons/bs";
import { serverUrl } from '../../envVariables';
import axios from "axios";

interface Inputs {
  size: string;
  quantity: number;
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

  const onSubmit = async (values: Inputs) => {
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
      try {
         await axios
            .patch(`${serverUrl}/api/cart/update_item_in_cart/${user[0].id}/${userOrder.id}`,{ quantity });
         getItemsInCart();
         setOrder(false);
         setLoading(false);
      } catch (error) {
         console.log(error.response);
      }
    } else {
       try {
          await axios.post(`${serverUrl}/api/cart/add`, userOrder);
          getItemsInCart();
          setOrder(false);
          setLoading(false);
       } catch (error) {
          console.log(error.response.data);
       }
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
