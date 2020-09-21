import React, { useState, useEffect } from "react";
import { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";

interface Inputs {
  size: string;
  quantity: number;
}

interface ItemInformation {
  category?: string;
  category_name?: string;
  cheese?: string;
  description?: string;
  dressing: any;
  id?: number;
  name?: string;
  img_url?: string;
  peppers?: any;
  sauce?: any;
  side?: string;
  size_price?: any;
}

interface Props {
  open: boolean;
  openLoginModal: () => void;
  val: ItemInformation;
  getItemsInCart: () => void;
}

const SingleCardComponent: React.FC<Props> = ({
  open,
  openLoginModal,
  val,
  getItemsInCart,
}) => {
  const [order, setOrder] = useState(false);
  const [token, setToken] = useState("");
  const [id, setId] = useState<SetStateAction<string> | null>("");
  const { register, handleSubmit } = useForm<Inputs>();

  useEffect(() => {
    const getToken = localStorage.getItem("client_token");
    const userId = localStorage.getItem("id");

    if (getToken && userId) {
      setToken(getToken);
      setId(userId);
    }
  }, []);

  const onSubmit = (values: Inputs) => {
    let price = Number(values.size.split("$")[1]);
    let quantity = Number(values.quantity);

    let userOrder = {
      ...val,
      price: price * quantity,
      quantity: Number(values.quantity),
      size_price: "",
      user_id: Number(id),
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/cart/add`, userOrder)
      .then((res) => {
        console.log(res.data);
        getItemsInCart();
        setOrder(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
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
        <img src={val?.img_url} alt={val?.name} />
      </div>
      <div className="space-between">
        <div className="item-information">
          <h3>{val?.name}</h3>
          <p>{val?.description}</p>
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
                    {val.size_price.map((th: string, i: number) => (
                      <option value={th} key={i}>
                        {th}
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

export default SingleCardComponent;
