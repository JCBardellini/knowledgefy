import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  const music = useSelector((store) => store.music);
  return (
    <div id="home-container">
      <h2>
        {music.map((item) => {
          return <div key={item.key}>{item.title}</div>;
        })}
      </h2>
    </div>
  );
};

export default Home;
