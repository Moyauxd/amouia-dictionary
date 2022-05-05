import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Result from "./Result";

export default function Search() {
  let [word, SetWord] = useState("");
  let [results, SetResults] = useState(null);

  function handleResponse(response) {
    SetResults(response.data[0]);
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
    <div className="Search">
      <section>
        <form onSubmit={Submit}>
          <input type="search" onChange={ShowWord} className="DicSearch" />
          <small>suggested words:rose, forest, beach..etc</small>
        </form>
      </section>
      <Result result={results} />
    </div>
  );
}
