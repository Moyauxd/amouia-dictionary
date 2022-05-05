import React from "react";
import "./meaning.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a
        className="aa"
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
      >
        listen
      </a>
      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}
