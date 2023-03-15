const blocklist = document.querySelector(".btn-list")
const blockUl = document.querySelector(".block-ul")
const blockNav = document.querySelector(".block-nav")
const closeUlbtn=document.querySelector(".close-btnUl")
function noneNav() {
    blockNav.style.display = "none";
}
function blocklistUl() {
    blockUl.style.display = "block";
}
function closeUl() {
    blockUl.style.display="none"
}
function blockNavbtn() {
    blockNav.display.style.display="block"
}
blocklist.addEventListener("click", function () {
    noneNav();
    blocklistUl();
   
})
closeUlbtn.addEventListener("click", function () {
    closeUl();
    blockNavbtn();
})
