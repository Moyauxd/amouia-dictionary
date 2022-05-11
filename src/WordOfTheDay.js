import React, { useState } from "react";
import "./meaning.css";
import axios from "axios";

export default function WordOfTheDays() {
  let [day, setDay] = useState(null);
  let [def, SetDef] = useState(null);
  let [speech, SetSpeech] = useState(null);
  function ShowWordsoftheDay(response) {
    console.log(response.data);
    setDay(response.data.word);
  }
  let wordsapi = "b78ctrehl58hzmq08pa64z3j5ozyxyb2kehbvfmbxfj23bcb5";
  let wordsurl = `https://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=${wordsapi}`;
  axios.get(wordsurl).then(ShowWordsoftheDay);
  function ShowDef(response) {
    console.log(response.data);
    SetDef(response.data.definitions[0].text);
  }
  let wordsapik = "b78ctrehl58hzmq08pa64z3j5ozyxyb2kehbvfmbxfj23bcb5";
  let wordsurls = `https://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=${wordsapik}`;
  axios.get(wordsurls).then(ShowDef);
  function ShowSpeech(response) {
    console.log(response.data);
    SetSpeech(response.data.definitions[0].partOfSpeech);
  }
  let wordsapikey = "b78ctrehl58hzmq08pa64z3j5ozyxyb2kehbvfmbxfj23bcb5";
  let wordsurlsx = `https://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=${wordsapikey}`;
  axios.get(wordsurlsx).then(ShowSpeech);

  return (
    <div className="WordsofD">
      <div className="WordD">
        <strong className="Title">Word of the day </strong>
        <br />
        <span className="dayy">{day}</span>
        <br />
        <span className="speech">{speech}</span>
        <br />
        <span className="def">{def}</span>
      </div>
      <small>
        <a href="https://github.com/Moyauxd/amouia-dictionary">
          Open Source code
        </a>
        by Moya Rose
      </small>
    </div>
  );
}
