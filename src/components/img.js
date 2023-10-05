const createImg = (src, alt, cssClass='') => {
	const img = document.createElement('img');
	img.src = src;
	img.alt = alt;
	img.style.width = '100%';
	if (cssClass) img.classList.add(cssClass);
	return img;
}

export default createImg;