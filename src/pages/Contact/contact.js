import createDiv from '../../components/div';
import createInput from '../../components/formInput';
import createTextArea from '../../components/formTextArea';
import createBtn from '../../components/button';
import createMap from '../../components/map';

const contact = () => {
    /* Page structure
    **
    ** contact > 
    **    div #title
    **    contactContainer >
    **        infoContainer >
    **            div #contact-info * 3
    **            formContainer >
    **                div #form-title
    **                form
    **        map          
    */
    const contact = document.createElement('div');
    contact.id = 'contact';
    
    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';

    const infoContainer = document.createElement('div');
    infoContainer.id = 'info-container';

    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';

    const form = document.createElement('form');
    form.id = 'contact-form';
    
    form.appendChild(createInput('text', 'FULL NAME', 'full-name'));
    form.appendChild(createInput('email', 'EMAIL', 'email'));
    form.appendChild(createTextArea('TYPE YOUR MESSAGE...', 'message'));
    form.appendChild(createBtn('Send', 'form-button', 'submit'));
    
    /*            formContainer >
    **                div #form-title
    **                form
    */
    formContainer.appendChild(createDiv('Message Us', 'form-title'));
    formContainer.appendChild(form);

    /*        infoContainer >
    **            div #contact-info * 3
    **            formContainer...
    */
    infoContainer.appendChild(createDiv('666 N Orleans St, Chicago, IL 60654', 'contact-info'));
    infoContainer.appendChild(createDiv('Mon - Sat	10:00 AM - 3:30 PM', 'contact-info'));
    infoContainer.appendChild(createDiv('(312) 337-8500', 'contact-info'));
    infoContainer.appendChild(formContainer);

    /*    contactContainer >
    **        infoContainer...
    **        map
    */
    contactContainer.appendChild(infoContainer);
    contactContainer.appendChild(createMap());
    
    /* contact > 
    **    div #title
    **    contactContainer...
    */
    contact.appendChild(createDiv('Contact Us', 'contact-title'));
    contact.appendChild(contactContainer);
    return contact;
}

export default contact;