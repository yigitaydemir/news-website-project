import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="container">
      <Slider className="shadow"></Slider>
      {/* <div className="card mt-4">
        <div className="card-body">
          <h2>Home Page</h2>
        </div>
      </div> */}

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <Link to="/about" className="btn btn-warning shadow">Read More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
