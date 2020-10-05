/*jshint esversion:6*/
const initialLoad = (function() {
	const header = document.createElement('header');
	header.classList.add('header');
	header.innerHTML = `
		<h1 class="h1"><a href="#" class="logo">mr<span class="h1_ _letter-highlight">winny </span></a></h1>
		<ul class="sections-list header__sections">
			<li class="sections-list__item"><a href="#" class="sections-list__link" data-content="home">Home</a></li>
			<li class="sections-list__item"><a href="#" class="sections-list__link" data-content="menu">Menu</a></li>
			<li class="sections-list__item"><a href="#" class="sections-list__link" data-content="contact">Contact</a></li>
        </ul>
      
	`;
	content.append(header);
})();