/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The cat", "My panda", "Her hippo", "My bird"];
  let action = ["ate", "peed", "crushed", "flies"];
  let what = ["my cake", "the keys", "the car"];
  let when = [
    "during class",
    "outside",
    "when I finished",
    "during my lunch",
    "while I was peeing"
  ];

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  let my_excuse =
    randomElement(who) +
    " " +
    randomElement(action) +
    " " +
    randomElement(what) +
    " " +
    randomElement(when) +
    " ";
  console.log("Hello Tipo from the console!");
  console.log(my_excuse);
  const elementTheExcuse = document.getElementsByTagName("p");
  elementTheExcuse[0].innerText = my_excuse;
};

