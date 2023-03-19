const main = document.querySelector(".main");
const inputBackgroud = document.querySelector(".ChangeColor");
const inputBackgroudBlock = document.querySelector(".ChangeColorBlock");
const header = document.querySelector(".jaloliddin-1");
const inputTextColor = document.querySelector(".ChangeTextColor");
const inputTextColorBlock = document.querySelector(".ChangeTextColorBlock");
function changeColor() {
  main.style.backgroundColor = inputBackgroud.value;
  header.style.backgroundColor = inputBackgroud.value;
  header.style.backgroundImage = "none";
  main.style.backgroundImage = "none";
}
inputBackgroud.addEventListener("input", function () {
  changeColor();
});
function changeColorBlock() {
  main.style.backgroundColor = inputBackgroud.value;
  header.style.backgroundColor = inputBackgroud.value;
  header.style.backgroundImage = "none";
  main.style.backgroundImage = "none";
}
inputBackgroudBlock.addEventListener("input", function () {
  changeColorBlock();
});

const elements = document.querySelectorAll("h2, h3, p,h1,h4");
function ChangeTextColor() {
  elements.forEach((el) => {
    el.style.color = inputTextColor.value;
  });
}
inputTextColor.addEventListener("input", function () {
  ChangeTextColor();
});
function ChangeTextColorBlock() {
  elements.forEach((el) => {
    el.style.color = inputTextColor.value;
  });
}
inputTextColorBlock.addEventListener("input", function () {
  ChangeTextColorBlock();
});
