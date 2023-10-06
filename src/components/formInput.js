const createInput = (type, text, id) => {
    const container = document.createElement('div');
    container.classList.add('input-container');

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', id);
    input.setAttribute('placeholder', ' ');
    input.setAttribute('required', '');
    input.id = id;
    

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = text;

    container.appendChild(input);
    container.appendChild(label);
    return container;
}

export default createInput;