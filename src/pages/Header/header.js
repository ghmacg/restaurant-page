import createBtn from '../../components/button';

const header = () => {
    const header = document.createElement('div');
    header.id = 'header';
    
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'BEEF';

    const navbar = document.createElement('div');
    navbar.classList.add('nav-bar');
    navbar.appendChild(createBtn('Home', 'home-button'));
    navbar.appendChild(createBtn('Menu', 'menu-button'));
    navbar.appendChild(createBtn('Contact Us', 'contact-button'));

    header.appendChild(title);
    header.appendChild(navbar);
    
    return header;
}

export default header;