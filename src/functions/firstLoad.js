import header from "../pages/header";
import home from "../pages/home";

const firstLoad = () => {
    const container = document.createElement('div');
    container.id = 'container';

    const main = document.createElement('div');
    main.id = 'main';
    
    main.appendChild(home());
    container.appendChild(header());
    container.appendChild(main);
    
    document.body.appendChild(container);
}

export default firstLoad;