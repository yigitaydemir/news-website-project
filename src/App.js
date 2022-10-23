import "./App.css";
import Home from "./components/Home";
import NavbarComp from "./components/NavbarComp";
import { Route, Routes } from "react-router-dom";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment"
import Science from "./components/Science"
import Sports from "./components/Sports"
import Technology from "./components/Technology"

function App() {
  return (
    <div>
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/entertainment" element={<Entertainment />}></Route>
        <Route path="/science" element={<Science />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Routes>
    </div>
  );
}

export default App;
