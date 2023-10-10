import React, { useEffect, useState } from "react";
import { fetchPodcastItems } from "../../Redux/APICalls/podcastApiCall";
import { useParams } from "react-router-dom";

const PodcastEpisode = () => {
  // checking the local storage for this data
  const storedContent = JSON.parse(localStorage.getItem("podcastData"));
  // using the hook useParams, to get the information from the param
  const { id } = useParams();
  console.log(id);
  let item = null;
  for (const contentItem of storedContent) {
    for (const episode of contentItem.content.items) {
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

  return (
    <div>
      {item.name}
      {item.description}
      <img src={item.images[0]?.url} alt="" />
    </div>
  );
};

export default PodcastEpisode;
