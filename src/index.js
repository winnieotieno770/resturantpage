import _ from 'lodash';
 import './style.css';
import './pageLoadModule.js';
import {addHomeContent} from './homeContentModule.js';
import {addMenuContent} from './menuContentModule.js';
import {addContactContent} from './contactContentModule.js';

const header = document.querySelector('header');

const swapContent = function(event) {
	const newContentLink = event.target.closest('a');
	const mainSection = document.querySelector('.section-content');

	if(!newContentLink.dataset.content) return;

	const highlight = function(element) {
		const previousHighlight = header.querySelector('.sections-list__link_highlighted');
		if(previousHighlight) {
			previousHighlight.classList.remove('sections-list__link_highlighted');
		}
		element.classList.add('sections-list__link_highlighted');
	};
		
	if(mainSection) {
		mainSection.remove();
	}


	if(newContentLink.dataset.content === 'home') {
		addHomeContent();
	}else if(newContentLink.dataset.content === 'menu') {
		addMenuContent();
	}else if(newContentLink.dataset.content === 'contact') {
		addContactContent();
	}
	highlight(newContentLink);
};

header.addEventListener('click', swapContent);
header.querySelector('.sections-list__link[data-content="home"]').click();


