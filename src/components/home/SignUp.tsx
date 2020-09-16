import React from "react";

const SignUp = () => {
  return (
    <div className="SignUp">
      <h1>create an account</h1>
      <form>
        <div className="share-clss">
          <label htmlFor="first_name">
            first name
            <input type="text" name="first_name" id="first_name" />
          </label>
          <label htmlFor="last_name">
            last name
            <input type="text" name="last_name" id="last_name" />
          </label>
        </div>

        <label htmlFor="email">
          email
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="phone_number">
          phone number
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="847-123-45-67"
          />
        </label>

        <div className="share-clss">
          <label htmlFor="password">
            password
            <input type="text" name="password" id="password" />
          </label>
          <label htmlFor="pass_comfirmation">
            password comfirmation
            <input
              type="text"
              name="pass_comfirmation"
              id="pass_comfirmation"
            />
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default SignUp;
