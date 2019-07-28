const container = document.querySelector('#container');

function gridCreate(nSides) {
	const length = container.style.width;
	var i;
	for (i = 0; i < nSides**2; i++) {
		let div = document.createElement('div');
		console.log(div);
		div.classList.add('content');
		div.style.width = '' + length + 'px';
		div.style.height = '' + length + 'px';
		console.log(div.style.height);
		container.appendChild(div)
	}
}

gridCreate(16);