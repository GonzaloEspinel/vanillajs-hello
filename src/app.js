/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The cat", "My grandpa", "Her turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "flies"];
  let what = ["my homework", "the keys", "the car"];
  let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying",
  ];

  function randomElement(array) {
    return array[Math.round(Math.random() * array.length)];
  }
  let excuse =
    randomElement(who) +
    " " +
    randomElement(action) +
    " " +
    randomElement(what) +
    " " +
    randomElement(when) +
    " " +
    console.log("Hello Rigo from the console!");
  console.log(excuse);
 
};
