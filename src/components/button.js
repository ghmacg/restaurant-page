const createBtn = (text, cssClass='') => {
    const button = document.createElement('button');
    if (cssClass) button.classList.add(cssClass);
    button.textContent = text;
    return button;
}

export default createBtn;