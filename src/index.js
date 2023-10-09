import firstLoad from "./functions/firstLoad";
import changeActiveBtn from "./functions/changeActiveBtn";
import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";
import "normalize.css";
import "./style.css";

firstLoad();

const homeBtn = document.querySelector('.home-button');
const menuBtn = document.querySelector('.menu-button');
const contactBtn = document.querySelector('.contact-button');
const main = document.getElementById('main');
let homeMenuBtn = document.querySelector('.view-menu-button');

let activeBtn = homeBtn;

const homeHandler = () => {
    activeBtn = changeActiveBtn(activeBtn, homeBtn);
    main.innerText = '';
    main.appendChild(home());

    homeMenuBtn = document.querySelector('.view-menu-button');
    homeMenuBtn.addEventListener('click', menuHandler);
}

const menuHandler = () => {
    activeBtn = changeActiveBtn(activeBtn, menuBtn);
    main.innerText = '';
    main.appendChild(menu());
}

const contactHandler = () => {
    activeBtn = changeActiveBtn(activeBtn, contactBtn);
    main.innerText = '';
    main.appendChild(contact());
}

homeBtn.addEventListener('click', homeHandler);

homeMenuBtn.addEventListener('click', menuHandler);

menuBtn.addEventListener('click', menuHandler);

contactBtn.addEventListener('click', contactHandler);