import React, { useState } from "react";
import "./index.css";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const title = "Sound-Box"; // need to find a better name
  // manages if the user is logged in
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);

  const notLogInUser = () => {
    const handleLoginClick = () => {
      // Navigate to the login URL when the "Log In" button is clicked

      setIsLoggedInUser(true);
    };

    return (
      <>
        <button className="sign-in" onClick={handleLoginClick}>
          Log In
        </button>
        <button className="sign-up">Sign up</button>
      </>
    );
  };

  return (
    <header id="header">
      <h1 className="title" onClick={() => navigate("/")}>
        {title}
      </h1>
      <div className="logIn-container">
        {isLoggedInUser ? <h2>logged in</h2> : notLogInUser()}
      </div>
    </header>
  );
};

export default Header;
