import firstLoad from "./functions/firstLoad";
import home from "./pages/Home/home";
import menu from "./pages/Menu/menu";
import contact from "./pages/Contact/contact";
import "normalize.css";
import "./style.css";
import "./pages/Header/style.css";
import "./pages/Home/style.css";
import "./pages/Menu/style.css";
import "./pages/Contact/style.css";

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