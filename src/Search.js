import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Result from "./Result";
import Photos from "./Photos";

export default function Search() {
  let [word, SetWord] = useState("");
  let [results, SetResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    SetResults(response.data[0]);
  }

  function Submit(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }

  function HandlePexResponse(response) {
    setPhotos(response.data.photos);
  }

  let picApikey = "563492ad6f917000010000019c0478e412454f01ba09b6b4efc93447";
  let pexurl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
  let headers = { Authorization: `Bearer${picApikey}` };
  axios.get(pexurl, { headers: headers }).then(HandlePexResponse);

  function ShowWord(event) {
    SetWord(event.target.value);
  }

  return (
    <div>
      <div className="Search">
        <form onSubmit={Submit}>
          <h1 className="logo">
            <img src="./amouia.png" alt="logo" />
          </h1>

          <input
            type="search"
            placeholder="search for  a word"
            onChange={ShowWord}
            className="DicSearch"
          />
        </form>
      </div>
      <Result result={results} />
      <Photos photos={photos} />
    </div>
  );
}
