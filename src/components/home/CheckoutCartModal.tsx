import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "react-responsive-modal";
import { ImCart } from "react-icons/im";
import CheckoutCartOptions from "./CheckoutCartOptions";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import io from "socket.io-client";

const socket = io("http://localhost:4200");

interface User {
  address: string;
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  phone_number: string;
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

interface Props {
  getItemsInCart: () => void;
  cartData: ItemInformation[];
  user: User[];
}

const CheckoutCartModal: React.FC<Props> = ({
  getItemsInCart,
  cartData,
  user,
}) => {
  const [mealOptions, setMealOptions] = useState([]);
  const [open, setOpen] = React.useState(false);
  let [total, setTotal] = useState(0);
  let [subTo, setSubTo] = useState(0);

  const history = useHistory();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to server");
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cart/complete_meal`)
      .then((res) => {
        setMealOptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let sumValues = 0;

    cartData.forEach((item) => {
      sumValues += item.price;
    });
    setTotal(sumValues);
  }, [cartData]);

  const removeFromCart = (item: ItemInformation) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/cart/remove/${item.id}`)
      .then(() => {
        setSubTo(total - item.price);
        getItemsInCart();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const toggleCartItems = (item: ItemInformation, type: string) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/api/cart/update_item_in_cart/${user[0].id}/${item.id}`,
        { quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1 }
      )
      .then(() => {
        getItemsInCart();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const AddByOne = (item: ItemInformation) => {
    toggleCartItems(item, "plus");
  };

  const removeByOne = (item: ItemInformation) => {
    if (item.quantity === 1) {
      removeFromCart(item);
    } else {
      toggleCartItems(item, "minus");
    }
  };

  const placeOrder = () => {
    let token = uuidv4();
    history.push(`/order/${token}`);
    setOpen(false);

    socket.emit("order", {
      cartData,
      token,
      user: user[0],
      createdAt: new Date().toLocaleTimeString(),
    });
  };

  let tax = (8.25 * total) / 100;
  let totalAmount = tax + total + 4;
  return (
    <>
      <button className="checkout" onClick={() => setOpen(true)}>
        checkout{" "}
        <span className="cart">
          <ImCart />
        </span>
        <span className="inner-btn">{`($${
          subTo ? subTo.toFixed(2) : total.toFixed(2)
        })`}</span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal-wrapper">
          {cartData.length ? (
            <div className="madal-wrapper-inner">
              <div className="items-in-cart">
                {cartData.map((items) => (
                  <div className="item-desc" key={items.id}>
                    <div className="img-wrapper">
                      <img src={items.img_url} alt={items.name} />

                      <div className="item-name">
                        <div className="name-wrapper">
                          <p>{items.name}</p>
                          <p className="remove-from-cart">
                            <span
                              className="icons"
                              onClick={() => AddByOne(items)}
                            >
                              <IoIosArrowUp />
                            </span>

                            <span className="quantity">
                              {` ${items.quantity}`}
                            </span>
                            <span
                              className="icons"
                              onClick={() => removeByOne(items)}
                            >
                              <IoIosArrowDown />
                            </span>
                          </p>
                        </div>

                        <ul>
                          <li>just right</li>
                          <li>cut</li>
                        </ul>
                      </div>
                    </div>
                    <span className="price">${items.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="make-meal-complete">
                <h1>make your meal complete</h1>
                <div className="show-choices">
                  {mealOptions.map((meal: any) => (
                    <CheckoutCartOptions
                      key={meal.id}
                      meal={meal}
                      cartData={cartData}
                      getItemsInCart={getItemsInCart}
                      user={user}
                    />
                  ))}
                </div>
              </div>

              <div className="total-information">
                <p>
                  subtotal: <span>{`$${total.toFixed(2)}`}</span>
                </p>
                <p>
                  tax: <span>{`$${tax.toFixed(2)}`}</span>
                </p>
                <p>
                  delivery: <span>$4.00</span>
                </p>
                <p>
                  total: <span>{`$${totalAmount.toFixed(2)}`}</span>
                </p>
                <div className="checkout-button">
                  <button className="btn" onClick={placeOrder}>
                    Checkout
                    <span>
                      <BsArrowRightShort />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <h3 className="empty-cart">Your cart is empty.</h3>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CheckoutCartModal;
