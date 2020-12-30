import React from "react";
import { useForm } from "react-hook-form";
import { serverUrl } from '../../envVariables';
import axios from "axios";

interface InputValues {
  email: string;
}
const ForgotPassword = () => {
  const { register, handleSubmit, reset } = useForm<InputValues>();

  const onSubmit = async (values: InputValues) => {
     try {
        await axios.patch(`${serverUrl}/api/forgotpassword`, values);
        reset();
        setTimeout(
          () => alert("We sent you an email to reset your password!"),
          600
        );
     } catch (error) {
        console.log(error.response.data.errorMessage);
        alert(error.response.data.errorMessage);
     }
  };
  
  return (
    <div className="SignUp">
      <h1>password reset</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="forgot_email">
          email
          <input
            type="email"
            name="email"
            id="forgot_email"
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
