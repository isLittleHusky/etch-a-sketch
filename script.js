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

gridCreate(16);