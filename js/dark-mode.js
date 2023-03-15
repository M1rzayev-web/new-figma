const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const continer = document.querySelector(".continer");

sun.addEventListener("click", function () {
 continerWhite();
});
moon.addEventListener("click", function () {
  continerDark();
});
function continerWhite() {
  continer.style.background = "white";
  continer.style.color = "black";
}
function continerDark() {
  continer.style.background = "black";
  continer.style.color = "white";
}

