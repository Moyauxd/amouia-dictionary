import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <h3 className="speech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">Definition:{definition.definition}</div>
            <div className="example">
              {" "}
              <Example example={definition.example} />
            </div>
            <Synonyms synonym={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
