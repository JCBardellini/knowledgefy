import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import homeImg from "./icons/home.png";

const Sidebar = () => {
  // set the state to be false, when it clicks the nav will expand
  const [isExpanded, setIsExpanded] = useState(false);
  // create a handleClick event that will activate the new nav bar
  const handleClickNavbar = () => {
    setIsExpanded(true);
  };

  // they will be icons first then i will expand it into words
  const sidebarNav = [
    {
      name: "Home",
      icon: homeImg,
      route: "/",
    },
    {
      name: "Search",
      icon: "/src/components/Sidebar-nav/icons/search.png",
      route: "/search",
    },
    {
      name: "Podcast",
      icon: "/src/components/Sidebar-nav/icons/podcast.png",
      route: "/podcast",
    },
    {
      name: "Library",
      icon: "/src/components/Sidebar-nav/icons/library.png",
      route: "/library",
    },
  ];

  const navbar = sidebarNav.map((item, index) => {
    return (
      <Link
        to={item.route}
        key={index}
        className={`nav-link ${isExpanded ? "expanded" : ""}`}
        onClick={handleClickNavbar}
      >
        <img src={item.icon} alt={item.name} className="icon" />
      </Link>
    );
  });

  return (
    <aside id="sidebar">
      <nav className={`nav ${isExpanded ? "expanded" : ""}`}>{navbar}</nav>
    </aside>
  );
};

export default Sidebar;
