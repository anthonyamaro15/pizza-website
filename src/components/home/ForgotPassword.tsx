import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface InputValues {
  email: string;
}
const ForgotPassword = () => {
  const { register, handleSubmit, reset } = useForm<InputValues>();

  const onSubmit = (values: InputValues) => {
    console.log(values);
    axios
      .patch(`${process.env.REACT_APP_API_URL}/api/forgotpassword`, values)
      .then(() => {
        reset();
        setTimeout(
          () => alert("We sent you an email to reset your password!"),
          600
        );
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
        alert(err.response.data.errorMessage);
      });
  };
  return (
    <div className="SignUp">
      <h1>password reset</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="lou@malnati.com"
            ref={register({ required: true })}
          />
        </label>
        <button type="submit" className="reset_password">
          reset password
        </button>
      </form>
    </div>
  );
};
export default ForgotPassword;
