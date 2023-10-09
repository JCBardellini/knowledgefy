import React, { useEffect } from "react";
import "./index.css";
import { fetchPopGenreItems } from "../../Redux/APICalls/spotifygenre";
import SearchBar from "../../components/Search";

const Search = () => {
  useEffect(() => {
    const fetchData = async () => {
      const items = await fetchPopGenreItems();
      console.log("pop", items);
    };

    fetchData();
  }, []);

  const musicGenres = [
    { id: 1, name: "Hip-Hop" },
    { id: 2, name: "Pop" },
    { id: 3, name: "Country" },
    { id: 4, name: "Latin" },
    { id: 5, name: "Rock" },
    { id: 6, name: "Summer" },
    { id: 7, name: "Workout" },
    { id: 8, name: "R&B" },
    { id: 9, name: "Disney" },
    { id: 10, name: "Dance / Electronic" },
    { id: 11, name: "Netflix" },
    { id: 12, name: "Indie" },
    { id: 13, name: "Mood" },
    { id: 14, name: "Sleep" },
    { id: 15, name: "Wellness" },
  ];

  const musicGenre = musicGenres.map((item) => {
    return (
      <div className="genreContainer" key={item.id}>
        <div className="eachGenreContainer">
          <h4 className="genreName">{item.name}</h4>
        </div>
      </div>
    );
  });

  return (
    <div className="search">
      <h2 className="mainTitle">Discover your next Adventure</h2>
      <SearchBar />
      <div className="genreContainer">{musicGenre}</div>
    </div>
  );
};

export default Search;
