const container = document.querySelector('#container');

function gridCreate(nSides) {
	let width = container.getBoundingClientRect().width
	const length = Math.floor(width/nSides);
	var i;
	for (i = 0; i < nSides**2; i++) {
		let div = document.createElement('div');
		div.classList.add('content');
		div.setAttribute('style', 'width: ' + length + 'px; ' + ' height: ' + length + 'px')
		container.appendChild(div);
	}
}

function buttonEvent() {
	const children = container.children
	let child = container.lastElementChild
	while (child) {
		container.removeChild(child);
		child = container.lastElementChild;
	}
	const sides = Number(prompt('How many sides should it have?', '8'));
	gridCreate(sides);
}
gridCreate(16);