import React from "react";

export default function Synonyms(props) {
  if (props.synonym) {
    return (
      <div>
        {props.synonym.map(function (synonym, index) {
          return (
            <ul key={index}>
              <li>{synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
