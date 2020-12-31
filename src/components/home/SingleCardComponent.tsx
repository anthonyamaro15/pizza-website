import React, { useState, useEffect } from "react";
import { ItemInformation } from "../../interfaces/ShareInterfaces";
import { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";
import { serverUrl } from '../../envVariables';

interface Inputs {
  size: string;
  quantity: number;
}

interface ItemInformationRecieved {
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
  val: ItemInformationRecieved;
  getItemsInCart: () => void;
  cartData: ItemInformation[];
}

const SingleCardComponent: React.FC<Props> = ({
  open,
  openLoginModal,
  val,
  getItemsInCart,
  cartData,
}) => {
  const [order, setOrder] = useState(false);
  const [token, setToken] = useState("");
  const [id, setId] = useState<SetStateAction<string> | null>("");
  const { register, handleSubmit } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem("client_token");
    const userId = localStorage.getItem("id");

    if (getToken && userId) {
      setToken(getToken);
      setId(userId);
    }
  }, []);

  const onSubmit = async (values: Inputs) => {
    setLoading(true);
    let price = Number(values.size.split("$")[1]);
    let quantity = Number(values.quantity);

    let userOrder = {
      ...val,
      price,
      quantity,
      size_price: "",
      user_id: Number(id),
    };

    let alreadyInCart = cartData.filter((item) => item.id === userOrder.id);

    if (alreadyInCart.length) {
      let quantity = (alreadyInCart[0].quantity += Number(values.quantity));
      try {
         await axios.patch(`${serverUrl}/api/cart/update_item_in_cart/${id}/${userOrder.id}`,{ quantity });
         getItemsInCart();
         setOrder(false);
         setLoading(false);
      } catch (error) {
         console.log(error.response.data);
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

export default SingleCardComponent;
