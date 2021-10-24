// TABS
const tabs = document.querySelectorAll('.tabs-list__link');

tabs.forEach((item) => {
	item.addEventListener('click', function (e){
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '')

		document.querySelectorAll('.tabs-list__link').forEach(
			(child) => child.classList.remove('tabs-link--active') 
		);

		document.querySelectorAll('.gallery__img').forEach(
			(child) => child.classList.remove('gallery__img--active')
		);

		item.classList.add('tabs-link--active');
		document.getElementById(id).classList.add('gallery__img--active');
	})
})

document.querySelector('.gallery__img').click();

// BURGER


// COUNTER
const counters = document.querySelectorAll('.number__real');

counters.forEach((counter) => {
	counter.innerHTML = "0";

	const updateCounter = () => {
		const target = +counter.getAttribute("data-target");
		const c = +counter.innerText;

		if (c < target) {
			counter.innerText = c + 1;
			setTimeout(updateCounter, 80);
		} else {
			counter.innerText = traget;
		}
	};
	updateCounter();
})