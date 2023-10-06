import createItem from "../../components/menuItem";
import createTitle from "../../components/menuSectionTitle";
import data from "./data";

const menu = () => {
    const menu = document.createElement('div')
    menu.id = 'menu';

    // DOM elements for 'Beverages and Shakes' section
    const firstSection = document.createElement('div');
    firstSection.appendChild(createTitle('Beverages and Shakes'));

    data['Beverages and Shakes'].forEach(item => {
        firstSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Sandwiches and Burgers' section
    const secondSection = document.createElement('div');
    secondSection.appendChild(createTitle('Sandwiches and Burgers'));

    data['Sandwiches and Burgers'].forEach(item => {
        secondSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Hot Dogs' section
    const thirdSection = document.createElement('div');
    thirdSection.appendChild(createTitle('Hot Dogs'));

    data['Hot Dogs'].forEach(item => {
        thirdSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Subs from our Deli' section
    const fourthSection = document.createElement('div');
    fourthSection.appendChild(createTitle('Subs from our Deli'));

    data['Subs from our Deli'].forEach(item => {
        fourthSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Oddities' section
    const fifthSection = document.createElement('div');
    fifthSection.appendChild(createTitle('Oddities'));

    data['Oddities'].forEach(item => {
        fifthSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Sides' section
    const sixthSection = document.createElement('div');
    sixthSection.appendChild(createTitle('Sides')); 

    data['Sides'].forEach(item => {
        sixthSection.appendChild(createItem(item.name, item.price, item.description));
    });

    // DOM elements for 'Sweets' section
    const seventhSection = document.createElement('div');
    seventhSection.appendChild(createTitle('Sweets'));

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