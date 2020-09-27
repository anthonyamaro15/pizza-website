import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

interface InputValues {
  password: string;
  confirm_password: string;
}

const ResetPassword = () => {
  const { register, handleSubmit, reset } = useForm<InputValues>();
  const { token } = useParams<{ token: string }>();
  const history = useHistory();

  const onSubmit = (values: InputValues) => {
    const { password, confirm_password } = values;

    if (password === confirm_password) {
      axios
        .patch(`${process.env.REACT_APP_API_URL}/api/resetpassword/${token}`, {
          password,
        })
        .then((res) => {
          setTimeout(() => alert(res.data.message), 600);
          history.push("/pizza");
          reset();
        })
        .catch((err) => {
          console.log(err.response.data.errorMessage);
        });
    } else {
      alert("passwords needs to match");
    }
  };

  return (
    <div className="SignUp">
      <h1>enter new password</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password">
          password
          <input
            type="password"
            name="password"
            id="password"
            ref={register({ required: true })}
          />
        </label>
        <label htmlFor="confirm_password">
          confirm password
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
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

export default ResetPassword;
