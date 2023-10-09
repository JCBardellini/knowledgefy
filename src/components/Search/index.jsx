import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  // will use the navigate, to navigate to a new page which will provide the info of
  // {navigate(`/search/${searchInput}`)}
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} id="searchForm">
      <label htmlFor="searchBar">Discover </label>
      <input
        type="search"
        name=""
        id="searchBar"
        value={searchInput}
        placeholder="Discover your next song"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
