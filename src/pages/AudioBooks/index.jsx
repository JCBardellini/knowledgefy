import React, { useEffect, useState } from "react";
import { fetchAudioBookItems } from "../../Redux/APICalls/audiobooks";

const Library = () => {
  const [audioBook, setAudioBook] = useState([]);

  // getting the podcast API information
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAudioBookItems();
      setAudioBook(data);
    };

    fetchData();
  }, []);
  console.log("audioBook", audioBook);
  return <div>Library</div>;
};

export default Library;
