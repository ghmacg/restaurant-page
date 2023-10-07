import firstLoad from "./functions/firstLoad";
import home from "./pages/Home/home";
import menu from "./pages/Menu/menu";
import contact from "./pages/Contact/contact";
import "normalize.css";

firstLoad();

const homeBtn = document.querySelector('.home-button');
const menuBtn = document.querySelector('.menu-button');
const contactBtn = document.querySelector('.contact-button');
const main = document.getElementById('main');

homeBtn.addEventListener('click', () => {
    main.innerText = '';
    main.appendChild(home());
});

menuBtn.addEventListener('click', () => {
    main.innerText = '';
    main.appendChild(menu());
});

contactBtn.addEventListener('click', () => {
    main.innerText = '';
    main.appendChild(contact());
});