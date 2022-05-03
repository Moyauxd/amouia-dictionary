import React from "react";

export default function Synonyms(props) {
  if (props.synonym) {
    return (
      <ul>
        {props.synonym.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
