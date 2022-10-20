import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavbarComp from "./components/NavbarComp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
