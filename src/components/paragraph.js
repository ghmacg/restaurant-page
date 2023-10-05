const createParagraph = (text, cssClass='') => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    if (cssClass) paragraph.classList.add(cssClass);
    return paragraph;
}

export default createParagraph;