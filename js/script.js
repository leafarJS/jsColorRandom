"use strict";
const d = document;
const bg_ = d.getElementById("bg");

function randomColor() {
  return Math.floor(Math.random() * 255);
}
bg_.addEventListener("click", () => {
  console.log("hola");
  bg_.style.backgroundColor = `rgba(${randomColor()},${randomColor()},${randomColor()})`;
});
