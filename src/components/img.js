const createImg = (src, alt, cssClass='') => {
	const img = document.createElement('img');
	if (cssClass) img.classList.add(cssClass);
	img.src = src;
	img.alt = alt;
	img.style.width = '100%';
	return img;
}

export default createImg;