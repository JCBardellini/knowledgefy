import "./App.css";
import Navbar from "./components/Sidebar-nav";
import Home from "./pages/Home";
import UserLogIn from "./pages/userLogIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
