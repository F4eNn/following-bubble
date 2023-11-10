/** @format */

const cards = document.querySelectorAll('article');

cards.forEach(card => {
	
	const handleMoveRectangle = e => {
		const { left, top } = card.getBoundingClientRect();

		const leftVar = e.clientX - left + 'px';
		const topVar = e.clientY - top + 'px';

		card.style.setProperty('--left', leftVar);
		card.style.setProperty('--top', topVar);
	};

	card.addEventListener('mousemove', handleMoveRectangle);
});
