import "./styles.css";
import { useState } from "react";
import { useRef } from "react";
import React from "react";

export default function App() {
  var emojiDict = {
    "⛰️": "Mountain",
    "🌋": "Volcano",
    "🏕️": "Camping",
    "🏜️": "Desert",
    "🏥": "Hospital",
    "🏦": "Bank",
    "🏫": "School",
    "🚆": "Train",
    "🚀": "Rocket",
    "🏠": "House"
  };

  let [meaning, setMeaning] = useState("");
  const inputRef = useRef();

  var emojiList = Object.keys(emojiDict);

  function emojiClick(emoji) {
    setMeaning(emojiDict[emoji]);
    inputRef.current.value = emoji;
  }
  function inputHandler(event) {
    var input = event.target.value;
    if (input in emojiDict) {
      meaning = emojiDict[input];
    } else {
      meaning = "out of database!";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> inside outt!</h1>
      <input
        ref={inputRef}
        placeholder="enter your emoji"
        onChange={inputHandler}
      ></input>
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojiList.map((emoji) => {
        return (
          <span key={emoji} onClick={() => emojiClick(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
