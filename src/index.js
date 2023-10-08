import firstLoad from "./functions/firstLoad";
import changeActiveBtn from "./functions/changeActiveBtn";
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

let activeBtn = homeBtn;

homeBtn.addEventListener('click', () => {
    activeBtn = changeActiveBtn(activeBtn, homeBtn);
    main.innerText = '';
    main.appendChild(home());
});

menuBtn.addEventListener('click', () => {
    activeBtn = changeActiveBtn(activeBtn, menuBtn);
    main.innerText = '';
    main.appendChild(menu());
});

contactBtn.addEventListener('click', () => {
    activeBtn = changeActiveBtn(activeBtn, contactBtn);
    main.innerText = '';
    main.appendChild(contact());
});