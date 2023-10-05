const createBtn = (text, cssClass='') => {
    const button = document.createElement('button');
    button.textContent = text;
    if (cssClass) button.classList.add(cssClass);
    return button;
}

export default createBtn;