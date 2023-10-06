const createDiv = (text, cssClass='') => {
    const div = document.createElement('div');
    if (cssClass) div.classList.add(cssClass);
    div.textContent = text;
    return div;
}

export default createDiv;