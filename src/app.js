/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    let who = ["The cat", "My panda", "The hippo", "My bird", "The Dog", "Fox"];
    let action = ["ate", "peed", "crushed", "flies", "Pooped", "got drunk"];
    let what = ["my cake", "the keys", "the car", "the boat", "the train"];
    let when = [
        "during class",
        "while outside",
        "when I finished eating",
        "during my lunch hour",
        "while I was peeing", "drinking beer"
    ];

    function randomAnswer(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    let my_excuse = randomAnswer(who) .concat(randomAnswer(action), randomAnswer(what), randomAnswer(when));
    console.log("Hello I'm the Tipo from the console!");
    console.log(my_excuse);

    const elementTheExcuse = document.getElementsByTagName("p");
    elementTheExcuse[0].innerText = my_excuse;
};