const navbar = document.querySelector('.navbar');
const active = document.querySelector('.active');

window.onscroll = function() { scrollFunction() };

const goto = document.querySelector(".goto");

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.background = "#000000e5";
        active.style.color = "#f51707d2";
        active.style.border = "2px solid transparent";
        goto.style.display = "inline-block";
    } else {
        document.getElementById("navbar").style.background = "transparent";
        active.style.color = "#ffffff";
        active.style.border = "2px solid #ffffff";
        goto.style.display = "none";
    }
}
const menuBtn = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu_items');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menu.style.width = "100%";
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menu.style.width = "0";
    }
});