import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar-nav";
import Home from "./pages/Home";
import Library from "./pages/AudioBooks";
import Podcast from "./pages/Podcast";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";
import UserSettings from "./pages/User";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { populate } from "./Redux/slices/musicSlice";

function App() {
  // setting the state to check if sidebar is active
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const dispatch = useDispatch();
  const music = useSelector((store) => store.music);
  console.log(music);

  // will control the navbar
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };
  useEffect(() => {
    let musicData = localStorage.getItem("musicData");
    musicData = JSON.parse(musicData);
    if (!musicData) {
      const makeRequest = async () => {
        const options = {
          method: "GET",
          url: "https://shazam.p.rapidapi.com/songs/list-recommendations",
          params: {
            key: "484129036",
            locale: "en-US",
          },
          headers: {
            "X-RapidAPI-Key":
              "3ea63469f9msh0dfee8fc9b6e8ffp1c14ffjsnd74cc942e81e",
            "X-RapidAPI-Host": "shazam.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          console.log(response);
          localStorage.setItem(
            "musicData",
            JSON.stringify(response.data.tracks)
          );
          dispatch(populate(response.data.tracks));
        } catch (error) {
          console.error(error);
        }
      };
      makeRequest();
    } else {
      dispatch(populate(musicData));
    }
  }, []);
  return (
    <>
      <div id="container" className={isSidebarActive ? "sidebarActive" : ""}>
        <Header />
        <Sidebar toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/audio-books" element={<Library />} />
          <Route path="/user-settings" element={<UserSettings />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
