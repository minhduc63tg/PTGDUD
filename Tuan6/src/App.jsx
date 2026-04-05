import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Contact from "./components/Contact.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Notfound from "./components/Notfound.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |<Link to="*">NotFound</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
