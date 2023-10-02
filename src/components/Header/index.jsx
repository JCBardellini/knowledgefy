import React from "react";
import "./index.css";

const Header = () => {
  const title = "SoundHero"; // need to find a better name

  return (
    <header id="header">
      <h1>{title}</h1>
      <div>
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
