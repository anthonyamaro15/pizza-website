import React from "react";
import { useForm } from "react-hook-form";

const AdminAddMenu = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
    reset();
  };
  return (
    <div className="AdminAddMenu">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="image">
            image:
            <input type="file" id="file" />
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
          <label htmlFor="price_size">
            price and size:
            <input
              type="text"
              name="price_size"
              id="price_size"
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

          <label htmlFor="wings_sauce">
            wing sauce:
            <input
              type="text"
              name="wings_sauce"
              id="wings_sauce"
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

          <label htmlFor="sides">
            sides:
            <input
              type="text"
              name="sides"
              id="sides"
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
              <option value="combos">comboss</option>
              <option value="sandwiches">sandwichess</option>
              <option value="desserts">desserts</option>
              <option value="drinks">drinks</option>
              <option value="extrass">sextras</option>
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
