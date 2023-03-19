const continer = document.querySelector(".continerPort");
const inputBackgroud = document.querySelector(".ChangeColor");
const inputBackgroudBlock = document.querySelector(".ChangeColorBlock");
const inputTextColor = document.querySelector(".ChangeTextColor");
const inputTextColorBlock = document.querySelector(".ChangeTextColorBlock");
function changeColor() {
  continer.style.backgroundColor = inputBackgroud.value;
}
inputBackgroud.addEventListener("input", function () {
  changeColor();
});
function changeColorBlock() {
  continer.style.backgroundColor = inputBackgroud.value;
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
