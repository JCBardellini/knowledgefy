import React from "react";
import "./index.css";

const UserLogIn = () => {
  return (
    <div>
      <h1>will add a name function</h1>
      <div>
        <form className="login-form">
          <label htmlFor="name">Username or Email</label>
          <input type="text" name="" id="name" placeholder="username" />
          <label htmlFor="password">Password</label>
          <input type="text" name="" id="password" placeholder="*********" />
          <button>Log In</button>
        </form>

        <p>forgot your password?</p>
        <p>
          Don't have an account <b>Sign up!</b>
        </p>
      </div>
      <hr />
      <div>
        <button>gootle</button>
        <button>Facebook</button>
        <button>Twitter</button>
        <button>Apple</button>
      </div>
    </div>
  );
};

export default UserLogIn;
