// hamburger = document.querySelector(".hamburger");
// hamburger.onclick = function () {
//     navBar = document.querySelector(".nav-bar");
//     navBar.classList.toggle("active");
// };

// nampilkan navbar hamberger
burger = document.querySelector(".hamburger")
burger.addEventListener("click", function () {
    nav = document.querySelector(".nav-bar");
    nav.classList.toggle("active"); 
})

// remove navbar hamberger
test = document.querySelector(".test")
test.addEventListener("click", function () {
    nav = document.querySelector(".nav-bar");
    nav.classList.remove("active")
})

// srolltop
function scrollToTop(){
    window.scrollTo(0, 0);
}