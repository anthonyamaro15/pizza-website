import React, { useState, useEffect } from "react";
import pizza from "../../imgs/pizza.jpg";
import { useForm } from "react-hook-form";
import { BsArrowRightShort } from "react-icons/bs";

interface Inputs {
  size: string;
  quantity: number;
}

interface Props {
  open: boolean;
  openLoginModal: () => void;
}

const SingleCardComponent: React.FC<Props> = ({ open, openLoginModal }) => {
  const [order, setOrder] = useState(false);
  const [token, setToken] = useState("");
  const { register, handleSubmit } = useForm<Inputs>();

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setToken(getToken);
    }
  }, []);

  const onSubmit = (values: Inputs) => {
    console.log(values);
    setOrder(false);
  };

  const handleOrder = () => {
    setOrder(true);
    if (!token) {
      openLoginModal();
      setOrder(false);
    }
  };

  return (
    <div className="SingleCardComponent">
      <div className="img-wrapper">
        <img src={pizza} alt="pizza image" />
      </div>
      <div className="space-between">
        <div className="item-information">
          <h3>deep dish cheese</h3>
          <p>Mozzarella cheese topped with vine-ripened tomato sauce.</p>
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
                    <option value="large 23.95">Large $23.95</option>
                    <option value="medium 23.95">medium $23.95</option>
                    <option value="small 23.95">small $23.95</option>
                    <option value="personal 23.95">personal $23.95</option>
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
                  Add to Cart
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
