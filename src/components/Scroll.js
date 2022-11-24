import React, { useState, useEffect } from "react";
import "../scroll.css";

const Scroll = () => {
  useEffect(() => {
    getRates()
  }, [])
  
  const [rates, setRates] = useState()

  const getRates = async () => {
    let response = await fetch("https://api.exchangerate.host/latest?base=USD")
    response = response.json()
    //console.log(response)
    setRates(response.rates)
    console.log(rates)
  }

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
