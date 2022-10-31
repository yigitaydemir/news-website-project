import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import News from "./News";

const Home = () => {
  useEffect(() => {
    fetchNews();
  }, []);

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const news = await data.json();
    setNews(news.articles);
  };

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
                {news.map((news) => (
                  <News
                    img={news.urlToImage}
                    title={news.title}
                    desc={news.description}
                    url={news.url}
                  ></News>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;