import React, { useState, useEffect } from "react";
import "../scroll.css";
import axios from "axios";
//hsZE1DZXZYucq5xvmC5uM6Tqz0B1NU6K

const Scroll = () => {
  useEffect(() => {
    //fetchNews();
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

  const myHeaders = new Headers();
myHeaders.append("apikey", "hsZE1DZXZYucq5xvmC5uM6Tqz0B1NU6K");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=AED,AUD,CAD,CHF,CNY,EUR,GBP,JPY,TRY&base=USD", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  
  return (
    <div className="marquee">
      <ul className="marquee-content">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>

        {/* repeat at least (marquee width / li width) times elements */}
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
      </ul>
    </div>
  );
};

export default Scroll;
