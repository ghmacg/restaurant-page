const createBtn = (text, cssClass='', type='') => {
    const button = document.createElement('button');
    if (cssClass) button.classList.add(cssClass);
    if (type) button.setAttribute('type', type);
    button.textContent = text;
    return button;
}

export default createBtn;