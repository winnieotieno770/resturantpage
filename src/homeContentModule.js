/*jshint esversion:6*/
const addHomeContent = function() {
	const mainSection = document.createElement('section');
	mainSection.classList.add('section-content');
	mainSection.classList.add('section-content_flex-direction_column');
	mainSection.innerHTML = `
		<h2 class="h2 home__h2">Food <span class="h2__text-decoration">with</span> Passion</h2>
		<p class="home__description">We are always in the mood for food #your happy place.
	</p>
	`;
	document.body.append(mainSection);
};
export {addHomeContent};