import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar-nav";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Podcast from "./pages/Podcast";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";
import UserSettings from "./pages/User";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./Redux/slices/userActions";

function App() {
  // setting the state to check if sidebar is active
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  // will control it
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };
  useEffect(() => {
    const token = getTokenFromUrl();
    window.location.hash = "";
    console.log("hi", token);
  }, {});
  return (
    <>
      <div id="container" className={isSidebarActive ? "sidebarActive" : ""}>
        <Header />
        <Sidebar toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/library" element={<Library />} />
          <Route path="/user-settings" element={<UserSettings />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
