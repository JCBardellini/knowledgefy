import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const PodcastEpisode = () => {
  // checking the local storage for this data
  const podcastContent = JSON.parse(localStorage.getItem("podcastData"));
  // using the hook useParams, to get the information from the param
  const { id } = useParams();
  // console.log(id);
  // can also use a "for of" loop
  let item;
  for (let i = 0; i < podcastContent.length; i++) {
    const episodeContent = podcastContent[i];
    for (let j = 0; j < episodeContent.content.items.length; j++) {
      const episode = episodeContent.content.items[j];
      if (episode.id === id) {
        item = episode;
        break;
      }
    }
    if (item) {
      break;
    }
  }
  console.log(item);
  // taking away the "_" from the word in content type
  const contentWord = item.content_type;
  const contentType = (item) => {
    const words = item.toLowerCase().split("_");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
  };

  const podcastHeader = (
    <div className="podcastHeader">
      <img src={item.images[0].url} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>{contentType(contentWord)}</p>
      </div>
    </div>
  );

  return (
    <div>
      {podcastHeader}
      {item.description}
    </div>
  );
};

export default PodcastEpisode;
