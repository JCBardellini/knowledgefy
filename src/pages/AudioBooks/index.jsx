import React, { useEffect, useState } from "react";
import { fetchAudioBookItems } from "../../Redux/APICalls/audiobooks";
import PlayCircleFilledRounded from "@mui/icons-material/PlayCircleFilledRounded";
import "./index.css";
import { Link } from "react-router-dom";

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
  // follow what i did for the podcast to display the content
  // need to exclude index of 0, there is no content there
  const excludeArray = [0];
  // now map through the data to get the title of each category, but need to filter out the exclude array
  const audioBooksContainer = audioBook.map((item) => {
    if (
      !excludeArray.includes(item.index) &&
      item.content &&
      item.content.items.length > 0
    ) {
      return (
        <div key={item.id}>
          <h3 className="subtitle">{item.name}</h3>
          <div className="contentContainer">
            {item.content.items.map((content) => (
              <div key={content.id} className="eachContainer">
                <div>
                  <img
                    src={content.images[0]?.url}
                    alt={content.name}
                    className="audioBookCover"
                  />
                </div>
                <Link to={`/audio-books/${content.id}`}>
                  <h4 className="eachAudioBookTitle">{content.name}</h4>
                </Link>
                {content.publisher && (
                  <p className="publisher">{content.publisher.split(",")[0]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
  });
  return (
    <div className="audioBooks">
      <h1 className="mainTitle">AudioBooks</h1>
      {audioBooksContainer}
    </div>
  );
};

export default Library;
