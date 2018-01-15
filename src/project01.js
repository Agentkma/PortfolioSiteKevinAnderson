import './stylesheets/styleProject.css';

function findImages() {
	Array.prototype.map.call(
		document.querySelectorAll('img[require-src]'),
		img => {
			img.src = require(img['require-src']);
		}
	);
}

window.onload = findImages;
