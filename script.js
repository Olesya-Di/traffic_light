"use strict";

let redLight = document.querySelector(".red");
let yellowLight = document.querySelector(".yellow");
let greenLight = document.querySelector(".green");
let doing = document.querySelector(".do");

let redTime = 4000;
let yellowTime = 1000;
let greenTime = 3000;

document.addEventListener("turnedRed", () => {
  doing.innerHTML = "остановись";
});

document.addEventListener("turnedGreen", () => {
  doing.innerHTML = "можешь ехать";
});

startTraffic();
async function startTraffic() {
  await turnRed(redTime);
  await turnYellow(yellowTime);
  await turnGreen(greenTime);
  await turnYellow(yellowTime);
  startTraffic();
}

function turnRed(ms) {
  return new Promise((resolve, reject) => {
    redLight.style.backgroundColor = "rgb(255,50,50)";
    yellowLight.style.backgroundColor = "";
    greenLight.style.backgroundColor = "";
    setTimeout(() => resolve(), ms);
    redLight.dispatchEvent(new CustomEvent("turnedRed", { bubbles: true }));
  });
}

function turnYellow(ms) {
  return new Promise((resolve, reject) => {
    redLight.style.backgroundColor = "";
    yellowLight.style.backgroundColor = "rgb(255,255,50)";
    greenLight.style.backgroundColor = "";
    setTimeout(() => resolve(), ms);
  });
}

function turnGreen(ms) {
  return new Promise((resolve, reject) => {
    redLight.style.backgroundColor = "";
    yellowLight.style.backgroundColor = "";
    greenLight.style.backgroundColor = "rgb(50,255,50)";
    setTimeout(() => resolve(), ms);
    greenLight.dispatchEvent(new CustomEvent("turnedGreen", { bubbles: true }));
  });
}
