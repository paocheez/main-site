import "./styles.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Proyects from "./Proyects";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/main-site/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Proyects" element={<Proyects />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
