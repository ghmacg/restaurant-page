const createTitle = (text) => {
    const title = document.createElement('div');
    title.textContent = text;
    title.classList.add('section-title');
    return title;
}

export default createTitle;