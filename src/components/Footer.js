import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <Nav defaultActiveKey="/home" className="justify-content-center">
        <Link to="/" className="nav-link active" style={{ color: "black" }}>
          Home
        </Link>
        <Link to="/business" className="nav-link active" style={{ color: "black" }}>
          Business
        </Link>
        <Link to="/entertainment" className="nav-link active" style={{ color: "black" }}>
          Entertainment
        </Link>
        <Link to="/science" className="nav-link active" style={{ color: "black" }}>
          Science
        </Link>
        <Link to="/sports" className="nav-link active" style={{ color: "black" }}>
          Sports
        </Link>
        <Link to="/technology" className="nav-link active" style={{ color: "black" }}>
          Technology
        </Link>
      </Nav>
      <p className="text-center mt-4 mb-4">
        2022 @ This website is made by Yusuf Yiğit Aydemir to demonstrate
        ReactJS&Bootstrap skills.
      </p>
    </div>
  );
}

export default Footer;
