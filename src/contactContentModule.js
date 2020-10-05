const addContactContent = function() {
	const mainSection = document.createElement('section');
	mainSection.classList.add('section-content');
	mainSection.innerHTML = `
		<div class="contact">
				<h2 class="contact__h2 h2">Contact Us</h2>
				<ul class="networks-list">
					<li class="networks-list__item">
						<a href="https://www.instagram.com/" class="networks-list__item-link">
							<svg class="networks-list__icon-svg">
								<use xlink:href="img/icons/icons.svg#facebook"></use>
							</svg>
							Facebook
						</a>
					</li>
					<li class="networks-list__item">
						<a href="https://www.instagram.com/" class="networks-list__item-link">
							<svg class="networks-list__icon-svg">
								<use xlink:href="img/icons/icons.svg#instagram"></use>
							</svg>
							@instagram
						</a>
					</li>
					<li class="networks-list__item">
						<a href="https://www.instagram.com/" class="networks-list__item-link">
							<svg class="networks-list__icon-svg">
								<use xlink:href="img/icons/icons.svg#twitter"></use>
							</svg>
							Twitter
						</a>
					</li>
				</ul>
		</div>
	`;
	document.body.append(mainSection);
};
export {addContactContent};