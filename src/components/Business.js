import React, { useEffect, useState } from "react";
import News from "./News";

const Business = () => {
  useEffect(() => {
    fetchNews();
  }, []);

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const news = await data.json();
    console.log(news.articles);
    setNews(news.articles);
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h2>Business News</h2>
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
  );
};

export default Business;
