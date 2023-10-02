import React, { useState } from "react";
import "./index.css";
import Home from "../../pages/Home";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const title = "Sound-Box"; // need to find a better name
  // manages if user is logged in
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);

  // const history = useHistory();
  // const handleTitleClick = () => {
  //   history.push("/");
  // };

  const notLogInUser = () => {
    return (
      <>
        <button className="sign-in" onClick={() => setIsLoggedInUser(true)}>
          Sign In
        </button>
        <button className="sign-up">Sign up</button>
      </>
    );
  };
  // isUserLogIn = true => show username and avatar
  // will get the username from the global but will make a fake username to check if it works state in redux
  let username = "Jc Bardellini";
  const avatar = []; // will add avatar pictures later
  const logInUser = () => {
    return (
      <>
        <p className="user">{username}</p>
        <div className="avatar">{avatar}</div>
      </>
    );
  };
  // i have to make the sign in page bring a pop up, then it creates a form - to put in ur information
  return (
    <header id="header">
      <h1 className="title" onClick={() => navigate("/")}>
        {title}
      </h1>
      <div className="logIn-container">
        {isLoggedInUser ? logInUser() : notLogInUser()}
      </div>
    </header>
  );
};

export default Header;
