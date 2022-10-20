import "./App.css";
import Home from "./components/Home";
import NavbarComp from "./components/NavbarComp";
import { Route, Routes } from "react-router-dom";
import Politics from "./components/Politics";
import Finance from "./components/Finance"
import Science from "./components/Science"
import Sports from "./components/Sports"
import Travel from "./components/Travel"

function App() {
  return (
    <div>
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/politics" element={<Politics />}></Route>
        <Route path="/finance" element={<Finance />}></Route>
        <Route path="/science" element={<Science />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/travel" element={<Travel />}></Route>
      </Routes>
    </div>
  );
}

export default App;
