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
    blockUl.style.display = "none";
}
function blockNavbtn() {
    blockNav.style.display = "block";
}
blocklist.addEventListener("click", function (e) {
    e.preventDefault();
    noneNav();
    blocklistUl();
   
})
closeUlbtn.addEventListener("click", function (e) {
    e.preventDefault();
    closeUl();
    blockNavbtn();
})
