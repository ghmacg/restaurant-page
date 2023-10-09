import createItem from "../components/menuItem";
import createDiv from "../components/div";
import data from "../data/data";

const menu = () => {
    const menu = document.createElement('div')
    menu.id = 'menu';

    // DOM elements for 'Beverages and Shakes' section
    const firstSection = document.createElement('div');
    firstSection.classList.add('section-container');
    firstSection.appendChild(createDiv('Beverages and Shakes', 'section-title'));

    data['Beverages and Shakes'].forEach(item => {
        firstSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Sandwiches and Burgers' section
    const secondSection = document.createElement('div');
    secondSection.classList.add('section-container');
    secondSection.appendChild(createDiv('Sandwiches and Burgers', 'section-title'));

    data['Sandwiches and Burgers'].forEach(item => {
        secondSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Hot Dogs' section
    const thirdSection = document.createElement('div');
    thirdSection.classList.add('section-container');
    thirdSection.appendChild(createDiv('Hot Dogs', 'section-title'));

    data['Hot Dogs'].forEach(item => {
        thirdSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Subs from our Deli' section
    const fourthSection = document.createElement('div');
    fourthSection.classList.add('section-container');
    fourthSection.appendChild(createDiv('Subs from our Deli', 'section-title'));

    data['Subs from our Deli'].forEach(item => {
        fourthSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Oddities' section
    const fifthSection = document.createElement('div');
    fifthSection.classList.add('section-container');
    fifthSection.appendChild(createDiv('Oddities', 'section-title'));

    data['Oddities'].forEach(item => {
        fifthSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Sides' section
    const sixthSection = document.createElement('div');
    sixthSection.classList.add('section-container');
    sixthSection.appendChild(createDiv('Sides', 'section-title')); 

    data['Sides'].forEach(item => {
        sixthSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Sweets' section
    const seventhSection = document.createElement('div');
    seventhSection.classList.add('section-container');
    seventhSection.appendChild(createDiv('Sweets', 'section-title'));

    data['Sweets'].forEach(item => {
        seventhSection.appendChild(createItem(item.name, item.price, item.description));
    });

    menu.appendChild(firstSection);
    menu.appendChild(secondSection);
    menu.appendChild(thirdSection);
    menu.appendChild(fourthSection);
    menu.appendChild(fifthSection);
    menu.appendChild(sixthSection);
    menu.appendChild(seventhSection);
    return menu;
}

export default menu;