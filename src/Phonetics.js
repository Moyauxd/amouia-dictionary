import React from "react";
import "./meaning.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio}>listen</a>
      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}
