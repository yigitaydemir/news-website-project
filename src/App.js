import "./App.css";
import Home from "./components/Home";
import { Route, Routes, Link } from "react-router-dom";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div>
      <div className="container">
        <Navbar bg="white" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">Trending News</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to="/" className="nav-link active">
                  Home
                </Link>
                <Link to="/business" className="nav-link active">
                  Business
                </Link>
                <Link to="/entertainment" className="nav-link active">
                  Entertainment
                </Link>
                <Link to="/science" className="nav-link active">
                  Science
                </Link>
                <Link to="/sports" className="nav-link active">
                  Sports
                </Link>
                <Link to="/technology" className="nav-link active">
                  Technology
                </Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Scroll></Scroll>
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/entertainment" element={<Entertainment />}></Route>
        <Route path="/science" element={<Science />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/technology" element={<Technology />}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
