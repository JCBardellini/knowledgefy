import React, { useEffect, useState } from "react";
import { fetchPodcastItems } from "../../Redux/APICalls/podcastApiCall";

const PodcastEpisode = () => {
  const [podcastInfo, setPodcastInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPodcastItems();
      setPodcastInfo(data);
    };

    fetchData();
  }, []);
  console.log("podcastinfo", podcastInfo);

  const podcastEpisode = podcastInfo.map((item) => {
    return (
      <div>
        {item.name}
        <div>
          {item.content.items.map((content) => {
            return <h4>{content.name}</h4>;
          })}
        </div>
      </div>
    );
  });
  return <div>{podcastEpisode}</div>;
};

export default PodcastEpisode;
