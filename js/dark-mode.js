const main = document.querySelector(".main");
const inputBackgroud = document.querySelector(".ChangeColor");
const header = document.querySelector(".jaloliddin-1");
const inputTextColor = document.querySelector(".ChangeTextColor");
function changeColor() {
  main.style.backgroundColor = inputBackgroud.value;
  header.style.backgroundColor = inputBackgroud.value;
  header.style.backgroundImage = "none";
  main.style.backgroundImage = "none";
}
inputBackgroud.addEventListener("input", function () {
  changeColor();
});

const elements = document.querySelectorAll("h2, h3, p,h1,h4,a");
function ChangeTextColor() {
  elements.forEach((el) => {
    el.style.color = inputTextColor.value;
  });
}
inputTextColor.addEventListener("input", function () {
  ChangeTextColor();
});
