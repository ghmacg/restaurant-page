const createParagraph = (text, cssClass='') => {
    const paragraph = document.createElement('p');
    if (cssClass) paragraph.classList.add(cssClass);
    paragraph.textContent = text;
    return paragraph;
}

export default createParagraph;