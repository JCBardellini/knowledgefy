import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar-nav";
import Navbar from "./components/Sidebar-nav";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Podcast from "./pages/Podcast";
import Search from "./pages/Search";
import UserLogIn from "./pages/userLogIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div id="container">
        <Header id="header" />
        <Sidebar id="sidebar" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/library" element={<Library />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
