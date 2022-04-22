import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [word, SetWord] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function Submit(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }

  function ShowWord(event) {
    SetWord(event.target.value);
  }

  return (
    <div>
      <form className="DicSearch" onSubmit={Submit}>
        <input type="search" onChange={ShowWord} />
        <input type="submit" />
      </form>
      <h1>{word}</h1>
    </div>
  );
}
