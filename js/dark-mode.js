const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
// const text = document.getElementById("text");
const continer=document.querySelector(".continer")

sun.addEventListener("click", function () {
  continer.classList.add("dark");
});

moon.addEventListener("click", function () {
  continer.classList.remove("dark");
});
