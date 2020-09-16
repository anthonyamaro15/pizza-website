import React from "react";

const ForgotPassword = () => {
  return (
    <div className="SignUp">
      <h1>password reset</h1>
      <form>
        <label htmlFor="email">
          email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="lou@malnati.com"
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
