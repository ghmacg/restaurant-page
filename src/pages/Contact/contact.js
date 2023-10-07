import createDiv from '../../components/div';
import createInput from '../../components/formInput';
import createTextArea from '../../components/formTextArea';
import createBtn from '../../components/button';

const contact = () => {
    const contact = document.createElement('div');
    contact.id = 'contact';
    
    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';

    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';

    const form = document.createElement('form');
    form.id = 'contact-form';
    
    form.appendChild(createInput('text', 'FULL NAME', 'full-name'));
    form.appendChild(createInput('email', 'EMAIL', 'email'));
    form.appendChild(createTextArea('TYPE YOUR MESSAGE...', 'message'));
    form.appendChild(createBtn('Send', 'form-button', 'submit'));
    
    formContainer.appendChild(createDiv('Message Us', 'form-title'));
    formContainer.appendChild(form);

    contactContainer.appendChild(createDiv('666 N Orleans St, Chicago, IL 60654', 'contact-info'));
    contactContainer.appendChild(createDiv('Mon - Sat	10:00 AM - 3:30 PM', 'contact-info'));
    contactContainer.appendChild(createDiv('(312) 337-8500', 'contact-info'));
    contactContainer.appendChild(formContainer);

    contact.appendChild(createDiv('Contact Us', 'contact-title'));
    contact.appendChild(contactContainer);
    return contact;
}

export default contact;