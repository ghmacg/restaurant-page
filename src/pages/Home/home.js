import createBtn from "../../components/button";
import createDiv from "../../components/div";

const home = () => {
	const home = document.createElement('div');
	home.id = 'home';

	const textContainer = document.createElement('div');
	textContainer.id = 'text-container';
	textContainer.appendChild(createDiv("Chicago’s beloved Italian sandwich shop!"));
	textContainer.appendChild(createDiv('Serving since 1997'));

	home.appendChild(textContainer);
	home.appendChild(createBtn('View Menu', 'view-menu-button'));
  
	return home;
}
  
export default home;