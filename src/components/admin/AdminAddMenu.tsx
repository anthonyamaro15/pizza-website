import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface InputValues {
  category: string;
  category_name: string;
  description: string;
  dressing: string;
  name: string;
  cheese: string;
  peppers: string;
  price_size: string;
  wings_sauce: string;
  img_url: string;
}

// large $20.55, medium $16.45, small $12.33, personal $8.5

// House Red Wine Vinaigrette, Caesar, Thousand Island,  Gorgonzola Dressing, Creamy Lemon Garlic, No Dressing

// six pack $5.15, 20 Oz bottle $2.10, can $1.35

const AdminAddMenu = () => {
  const [img_url, setImg_url] = useState("");
  const { register, handleSubmit, reset } = useForm<InputValues>();

  const onSubmit = (values: InputValues) => {
    let newValues = { ...values, img_url };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/menu/add`, newValues)
      .then((res) => {
        console.log("response ? ", res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    reset();
  };

  const uploadImage = (e: any) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "pl2czq6m");
    formData.append("file", files);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_API_VALUE}/image/upload`,
        formData
      )
      .then((res) => {
        setImg_url(res.data.secure_url);
      })
      .catch((err) => [console.log(err)]);
  };
  return (
    <div className="AdminAddMenu">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="image">
            image:
            <input type="file" id="file" onChange={uploadImage} />
          </label>
          <label htmlFor="name">
            item name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              ref={register}
            />
          </label>
          <label htmlFor="size_price">
            price and size:
            <input
              type="text"
              name="size_price"
              id="size_price"
              placeholder="Separeate size and price with a comma (medium $12.99, large $16.99)"
              ref={register}
            />
          </label>

          <label htmlFor="description">
            description:
            <input
              type="text"
              name="description"
              id="description"
              placeholder="description"
              ref={register}
            />
          </label>

          <label htmlFor="sauce">
            wing sauce:
            <input
              type="text"
              name="sauce"
              id="sauce"
              placeholder="wings sauce"
              ref={register}
            />
          </label>

          <label htmlFor="dressing">
            dressing:
            <input
              type="text"
              name="dressing"
              id="dressing"
              placeholder="dressing"
              ref={register}
            />
          </label>

          <label htmlFor="side">
            sides:
            <input
              type="text"
              name="side"
              id="side"
              placeholder="sides"
              ref={register}
            />
          </label>

          <label htmlFor="cheese">
            type of cheese:
            <input
              type="text"
              name="cheese"
              id="cheese"
              placeholder="If multiple please separate them with a comma"
              ref={register}
            />
          </label>

          <label htmlFor="peppers">
            peppers:
            <input
              type="text"
              name="peppers"
              id="peppers"
              placeholder="If multiple please separate them with a comma"
              ref={register}
            />
          </label>

          <label htmlFor="category">
            <select name="category" id="category" ref={register}>
              <option value="">select category</option>
              <option value="pizzas">pizzas</option>
              <option value="salads">salads</option>
              <option value="appetizers">appetizers</option>
              <option value="pastas">pastas</option>
              <option value="combos">comboss</option>
              <option value="sandwiches">sandwichess</option>
              <option value="desserts">desserts</option>
              <option value="drinks">drinks</option>
              <option value="extrass">extras</option>
            </select>
          </label>

          <label htmlFor="category_name">
            <select name="category_name" id="category_name" ref={register}>
              <option value="">Select pizza category</option>
              <option value="deep_dish_pizzas">deep dish pizzas</option>
              <option value="thin_crust_pizzas">thin crust pizzas</option>
              <option value="speciality_pizza">speciality pizzas</option>
              <option value="frozen_pizza">frozen pizzas</option>
              <option value="popular_combos">popular combos</option>
            </select>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddMenu;
