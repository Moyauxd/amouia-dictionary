import React from "react";
import Synonyms from "./Synonyms.js";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>Definition:{definition.definition}</p>
            <br />
            <Example example={definition.example} />
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
