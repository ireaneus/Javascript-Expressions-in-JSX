import React from "react";
import ReactDOM from "react-dom";

const name = "Grace Fellowship";
const location = "Mountain Home Idaho";
const sermon = "Hebrews Part 1 (mp3)";
const dnum = {
  1: "One God",
  2: "Witness",
  3: "Trinity",
  4: "World",
  5: "number",
  6: "Man",
  7: "Complete"
};
const num = Math.floor(Math.random() * 7) + 1;

const number = `${num}: ${dnum[num]}`;

ReactDOM.render(
  <div>
    <h1>{`${name} of ${location}`}</h1>
    <p>Pastor Jack Hurley teached on {sermon} on Feb 12th 1987</p>
    <p>The numbers in scripture have meaning {number}</p>
  </div>,
  document.getElementById("root")
);
