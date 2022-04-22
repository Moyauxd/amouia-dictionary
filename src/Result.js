import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.result) {
    return (
      <div>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h2>{props.result.word}</h2>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
