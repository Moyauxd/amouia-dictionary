import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [word, SetWord] = useState("");
  function Submit(event) {
    event.preventDefault();
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
