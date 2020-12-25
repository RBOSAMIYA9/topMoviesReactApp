import React, { useState } from "react";
import "./styles.css";
import { webseriesDb } from "../movies.js";

export default function App() {
  const [content, setContent] = useState(webseriesDb.sciFi);
  const [menuName, setMenuName] = useState("SciFi");

  function getbgColor(index) {
    if (index % 2 === 0) {
      return "#ECFDF5";
    }
    return "white";
  }
  function clickHandler(id) {
    setContent(webseriesDb[id]);
    setMenuName(id);
  }

  var data = Object.values(content);
  // console.log(typeof data);
  // console.log("content",content);

  return (
    <div className="App">
      <h1>Top Movies to watch</h1>
      <center>
        <div className="container">
          <div>
            <ul id="menu">
              <li onClick={() => clickHandler("sciFi")}>SciFi</li>
              <li onClick={() => clickHandler("comedy")}>Comedy</li>
              <li onClick={() => clickHandler("mystery")}>Mystery</li>
              <li onClick={() => clickHandler("horror")}>Horror</li>
            </ul>
          </div>
          <hr></hr>
          <p id="breadcrums">Top Movies >> {menuName}</p>
          {data.map((item, index) => {
            return (
              <div
                id="moviesList"
                style={{ backgroundColor: getbgColor(index) }}
                key={item.name}
              >
                <p id="movieName">{item.name}</p>
                <p id="ratingData">
                  Ratings: <span id="rating">{item.ratings}</span>/10
                </p>
                <p id="description">{item.description}</p>
                <a href={item.link}>
                  <button>View More</button>
                </a>
              </div>
            );
          })}
        </div>
      </center>
    </div>
  );
}
