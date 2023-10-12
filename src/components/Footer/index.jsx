import React, { useState } from "react";
import "./index.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import VolumeSlider from "../VolumeSlider";

const Footer = () => {
  const [favorite, setFavorite] = useState(false);
  const [playing, setPlaying] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  const togglePause = () => {
    setPlaying(!playing);
  };
  return (
    <div id="footer">
      <div className="left-footerPlayer">
        <div>
          <div className="img-container">img</div>
        </div>
        <div>
          {/* will be item.name or something similar to it */}
          <h4>Song Name</h4>
          {/* item.artist, depends on the api */}
          <p>Artist</p>
        </div>
        <div onClick={toggleFavorite}>
          {favorite ? (
            <FavoriteIcon className="heartIcon" fontSize="large" />
          ) : (
            <FavoriteBorderIcon fontSize="large" />
          )}
        </div>
      </div>
      <div className="playButtons">
        <ShuffleIcon fontSize="large" />
        <SkipPreviousIcon fontSize="large" />
        <div onClick={togglePause}>
          {playing ? (
            <PauseCircleIcon fontSize="large" />
          ) : (
            <PlayCircleIcon fontSize="large" />
          )}
        </div>
        <SkipNextIcon fontSize="large" />
        <RepeatIcon fontSize="large" />
      </div>
      <div className="volumeSlider">
        <VolumeSlider />
      </div>
    </div>
  );
};

export default Footer;
