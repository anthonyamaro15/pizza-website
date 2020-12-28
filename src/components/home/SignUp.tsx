import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { serverUrl } from '../../envVariables';

interface InputValues {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  password: string;
  pass_confirmation: string;
}

interface Props {
  openLoginModal: () => void;
}
const SignUp: React.FC<Props> = ({ openLoginModal }) => {
  const { register, handleSubmit, reset } = useForm<InputValues>();
  const history = useHistory();

  const onSubmit = async (values: InputValues) => {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      address,
      password,
    } = values;
    const saveData = {
      first_name,
      last_name,
      email,
      phone_number,
      address,
      password,
    };
    try {
      await axios.post(`${serverUrl}/api/register`, saveData)
      history.push("/pizzas");
      openLoginModal();
      reset();
    } catch (error) {
       console.log(error.response.data);
    }

  };
  return (
    <div className="SignUp">
      <h1>create an account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="share-clss">
          <label htmlFor="first_name">
            first name
            <input
              type="text"
              name="first_name"
              id="first_name"
              ref={register}
            />
          </label>
          <label htmlFor="last_name">
            last name
            <input type="text" name="last_name" id="last_name" ref={register} />
          </label>
        </div>

        <label htmlFor="email">
          email
          <input type="email" name="email" id="email" ref={register} />
        </label>
        <label htmlFor="phone_number">
          phone number
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="847-123-45-67"
            ref={register}
          />
        </label>

        <label htmlFor="address" className="address">
          address:
          <input type="text" name="address" id="address" ref={register} />
        </label>

        <div className="share-clss">
          <label htmlFor="password">
            password
            <input data-testid="signup_password" type="text" name="password" id="password" ref={register} />
          </label>
          <label htmlFor="pass_comfirmation">
            password comfirmation
            <input
              type="text"
              data-testid="pass_comfirmation"
              name="pass_comfirmation"
              id="pass_comfirmation"
              ref={register}
            />
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default SignUp;
