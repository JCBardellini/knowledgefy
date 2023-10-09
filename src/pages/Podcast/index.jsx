import React, { useEffect, useState } from "react";
import { fetchPodcastItems } from "../../Redux/APICalls/podcastApiCall";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import "./index.css";

const Podcast = () => {
  const [podcast, setPodcast] = useState([]);

  // getting the podcast API information
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPodcastItems();
      setPodcast(data);
    };

    fetchData();
  }, []);
  // console.log("podcast", podcast);
  // // first category worked, now time to put the rest
  // const bestEpisodesSection = podcast[1];
  // if (bestEpisodesSection && bestEpisodesSection.name) {
  //   const categoryNameOne = bestEpisodesSection.name;
  // } else {
  //   return <div>Best Episodes - Editor's Picks</div>;
  // }

  // const categoryNameOne = bestEpisodesSection.name;
  // const bestEpisodesContainer =
  //   bestEpisodesSection && bestEpisodesSection.content
  //     ? bestEpisodesSection.content.items
  //     : [];

  // const eachBestEpisodeContainer = bestEpisodesContainer.map((item) => {
  //   return (
  //     <div className="eachContainer" key={item.id}>
  //       <div>
  //         <img
  //           src={item.images[1].url}
  //           alt={item.name}
  //           className="episodeImg"
  //         />
  //       </div>

  //       <h4 className="eachEpisodeTitle">{item.name}</h4>
  //       <div className="containerBottomContent">
  //         <p>
  //           {item.release_date} | {item.type}
  //         </p>
  //         <div>
  //           <PlayCircleFilledRoundedIcon fontSize="large" />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });
  // have to make one for each display
  // const displayOne = (
  //   <div>
  //     <h3 className="subtitle">{categoryNameOne}</h3>
  //     <div className="contentContainer">{eachBestEpisodeContainer}</div>
  //   </div>
  // );

  // set the podcastEpisodes the array of content. This will help me make the cards of each content
  // console.log("episodes", podcastContent);
  // const podcastContent = podcast.map((item) => item.content.items);
  // // need to take out index 0, 4 (they have no content)
  // const excludedIndices = [0, 4];
  // const podcastTitle = podcast
  //   .filter((item, index) => !excludedIndices.includes(index))
  //   .map((item) => <h3 className="subtitle">{item.name}</h3>);

  // // have to map and filter and then map again to get the data
  // const podcastEpisodes = podcastContent
  //   .filter((item, index) => !excludedIndices.includes(index))
  //   .map((item) =>
  //     item.map((content) => {
  //       return (
  //         <div>
  //           <h4>{content.name}</h4>
  //         </div>
  //       );
  //     })
  //   );
  // final version, this makes it so i repeat myself
  const excludedIndices = [0, 4];

  console.log(podcast);
  const podcastEpisodes = podcast.map((item) => {
    if (
      !excludedIndices.includes(item.index) &&
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
                    className="episodeImg"
                  />
                </div>
                <h4 className="eachEpisodeTitle">{content.name}</h4>
                <div className="containerBottomContent">
                  <p>
                    {content.release_date} | {content.type}
                  </p>
                  <div>
                    <PlayCircleFilledRoundedIcon fontSize="large" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  });

  // will create add each function here to showcase the the podcast section
  // const podcastElements = <div key={podcast.id}>{podcastTitle}</div>;

  return (
    <div className="podcast">
      <h2 className="mainTitle">Today's Podcast</h2>
      {podcastEpisodes}
    </div>
  );
};

export default Podcast;
