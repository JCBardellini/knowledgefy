import "./index.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homeIcon from "../../assets/icons/home.png";
import searchIcon from "../../assets/icons/search.png";
import podcastIcon from "../../assets/icons/podcast.png";
import libraryIcon from "../../assets/icons/library.png";
import userIcon from "../../assets/Avatars/user.png";

const Sidebar = ({ toggleSidebar }) => {
  // set the state to be false, when it clicks the nav will expand
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  // avatar icon
  const avatar = {
    name: "JC Bardellini",
    icon: userIcon,
    route: "/user-settings",
  };
  // array of objects of each category
  const iconsArray = [
    {
      name: "Home",
      icon: homeIcon,
      route: "/",
    },
    {
      name: "Search",
      icon: searchIcon,
      route: "/search",
    },
    {
      name: "Podcast",
      icon: podcastIcon,
      route: "/podcast",
    },
    {
      name: "Library",
      icon: libraryIcon,
      route: "/library",
    },
  ];

  // create a handleClick event that will activate the new nav bar
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    toggleSidebar();
  };

  // displaying the avatar
  const user = (
    <div className={isExpanded ? "user active" : "user"}>
      <img src={avatar.icon} alt={avatar.name} className="userIcon" />
      <p>
        Hello,{" "}
        <Link to={avatar.route} className="userLink">
          {avatar.name}
        </Link>
      </p>
    </div>
  );
  // burger button
  const burgerButton = (
    <div className={isExpanded ? "burgerContainer active" : "burgerContainer"}>
      <div className="burgerTrigger" onClick={handleExpand}></div>
      <div className="burgerMenu"></div>
    </div>
  );
  // displaying the icons array
  const navbar = iconsArray.map((item, index) => {
    return (
      <div
        className={isExpanded ? "iconsContainer active" : "iconsContainer"}
        key={index}
      >
        <ul className="navUL">
          <li className="navItem">
            <img
              src={item.icon}
              alt={item.name}
              className="icon"
              onClick={() => navigate(item.route)}
            />
            <Link
              to={item.route}
              className={`navLink ${isExpanded ? "active" : ""}`}
            >
              {item.name}
            </Link>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <nav className={`sidebar ${isExpanded ? "active" : ""}`}>
      {user}
      {burgerButton}
      {navbar}
    </nav>
  );
};

export default Sidebar;
