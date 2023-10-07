import React, { useEffect } from "react";
import {
  fetchPopGenreItems,
  popGenre,
} from "../../Redux/APICalls/spotifygenre";

const Search = () => {
  useEffect(() => {
    const fetchData = async () => {
      const items = await fetchPopGenreItems();
      console.log("pop", items);
    };

    fetchData();
  }, []);

  const musicGenres = [
    { id: 1, name: "Rock" },
    { id: 2, name: "Pop" },
    { id: 3, name: "Hip-Hop" },
    { id: 4, name: "Jazz" },
    { id: 5, name: "Classical" },
    { id: 6, name: "Electronic" },
    { id: 7, name: "Country" },
    { id: 8, name: "R&B" },
    { id: 9, name: "Reggae" },
    { id: 10, name: "Blues" },
    { id: 11, name: "Metal" },
    { id: 12, name: "Folk" },
    { id: 13, name: "Punk" },
    { id: 14, name: "Soul" },
    { id: 15, name: "Funk" },
  ];
  const music = musicGenres.map((item, index) => {
    return (
      <option key={index} value={item.id}>
        {item.name}
      </option>
    );
  });

  return <div>{music}</div>;
};

export default Search;
