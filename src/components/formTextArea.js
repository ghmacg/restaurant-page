const createTextArea = (text, id) => {
    const container = document.createElement('div');
    container.classList.add('input-container');
    
    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', id);
    textarea.setAttribute('placeholder', ' ');
    textarea.setAttribute('required', '');
    textarea.id = id;
    
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = text;
    
    container.appendChild(label);
    container.appendChild(textarea);
    return container;
}

export default createTextArea;