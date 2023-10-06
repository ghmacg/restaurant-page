import createImg from "../../components/img";
import createParagraph from "../../components/paragraph";
import chefImg from "../../assets/img/chef.jpg";

const home = () => {
	const home = document.createElement('div');
	home.id = 'home';

	home.appendChild(createParagraph('Local family sandwich shop'));
	home.appendChild(createParagraph('Managed by aclaimed chef Carmy Berzatto'))
	home.appendChild(createImg(chefImg, 'Chef'));
  
	return home;
}
  
export default home;