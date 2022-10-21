import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import img1 from "../media/finance.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//087781f19f024da6905338fe788c6adc

const Home = () => {
  useEffect(() => {
    //    fetchNews();
  }, []);

  const [news, setNews] = useState([]);

  //  const fetchNews = async () => {
  //    const data = await fetch(
  //      "https://newsapi.org/v2/top-headlines?country=us&apiKey=087781f19f024da6905338fe788c6adc"
  //    );
  //    const news = await data.json();
  //    console.log(news.articles);
  //    setNews(news.articles);
  //  };

  return (
    <div className="container">
      <Slider className="shadow"></Slider>

      <section className="section">
        <div className="container">
          <div className="card mt-4">
            <div className="card-body">
              <div className="card-body">
                <h2>Home Page</h2>
              </div>

              <div
                className="container"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {/* {news.map((news) => (
                  <Card style={{ width: "18rem", margin: "5px" }}>
                  <Card.Img variant="top" src={news.urlToImage} style={{ height: "180px" }}/>
                  <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>
                      {news.description}
                    </Card.Text>
                    <Button variant="primary"><a href={news.url} target="blank" className="nav-link" style={{ alignSelf: "flex-end" }}>Read More</a></Button>
                  </Card.Body>
                </Card>
                ))} */}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
