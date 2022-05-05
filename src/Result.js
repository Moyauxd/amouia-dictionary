import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="results">
        <section>
          <h2 className="word">{props.result.word}</h2>
          {props.result.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetics} />
              </div>
            );
          })}
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else return null;
}
