import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <em>Synonyms:{props.synonyms}</em>
      </div>
    );
  } else {
    return null;
  }
}
