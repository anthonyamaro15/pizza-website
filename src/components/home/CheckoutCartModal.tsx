import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ImCart } from "react-icons/im";
import CheckoutCartOptions from "./CheckoutCartOptions";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";

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
  //   cartData: any;
}

const CheckoutCartModal: React.FC<Props> = ({ getItemsInCart, cartData }) => {
  const [open, setOpen] = React.useState(false);
  const [itemsInCart] = useState(true);
  let [total, setTotal] = useState(0);
  let [subTo, setSubTo] = useState(0);
  //   const [itemToRemove, setItemToRemove] = useState(false);

  useEffect(() => {
    console.log(cartData);

    cartData.forEach((item) => {
      console.log("inside the for each ", item);

      // initial += item.price;
      setTotal(total + item.price);
    });

    //  console.log("total here ", total);
    //  setItemToRemove(0);
  }, [cartData]);

  //   useEffect(() => {
  //     console.log("total is chaninging");
  //     setTotal(itemToRemove - total);
  //   }, [itemToRemove]);

  const removeFromCart = (item: ItemInformation) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/cart/remove/${item.id}`)
      .then((res) => {
        console.log(res.data);
        setSubTo(total - item.price);
        getItemsInCart();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  //   console.log("total here ", total);
  //   console.log("what is item to remove ", itemToRemove);

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
          {itemsInCart ? (
            <div className="madal-wrapper-inner">
              <div className="items-in-cart">
                {cartData.map((items) => (
                  <div className="item-desc" key={items.id}>
                    <div className="img-wrapper">
                      <img src={items.img_url} alt={items.name} />

                      <div className="item-name">
                        <p>{items.name}</p>
                        <p className="remove-from-cart">
                          (
                          <span onClick={() => removeFromCart(items)}>
                            remove
                          </span>
                          )
                        </p>
                        <ul>
                          <li>just right</li>
                          <li>cut</li>
                        </ul>
                      </div>
                    </div>
                    <span className="price">${items.price}</span>
                  </div>
                ))}
              </div>
              <div className="make-meal-complete">
                <h1>make your meal complete</h1>
                <div className="show-choices">
                  <CheckoutCartOptions />
                </div>
              </div>

              <div className="total-information">
                <p>
                  subtotal: <span>$23.95</span>
                </p>
                <p>
                  tax: <span>$2.95</span>
                </p>
                <p>
                  delivery: <span>$4.00</span>
                </p>
                <p>
                  total: <span>$30.76</span>
                </p>
                <div className="checkout-button">
                  <button className="btn">
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
