import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      <a href={props.phonetic.audio}>listen</a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
