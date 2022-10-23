import React, { useEffect, useState } from "react";
import News from "./News";

const Science = () => {
  useEffect(() => {
    fetchNews();
  }, []);

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=087781f19f024da6905338fe788c6adc"
    );

    const news = await data.json();
    console.log(news.articles);
    setNews(news.articles);
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h2>Science News</h2>
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

export default Science;
