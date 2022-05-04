import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>Definition:{definition.definition}</p>
            <br />
            <Example example={definition.example} />
            <br />
            <Synonyms synonym={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
