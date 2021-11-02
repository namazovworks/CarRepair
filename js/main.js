// TABS
const tabs = document.querySelectorAll('.tabs-list__link');

tabs.forEach((item) => {
	item.addEventListener('click', function (e){
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '')

		tabs.forEach(
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

const menuIcon = document.querySelector('.toggle-menu');
const menuHeader = document.querySelector('.header');

if (menuIcon) {
  	menuIcon.addEventListener("click", function (e) {
		menuIcon.classList.toggle('toggle-menu-open');
		menuHeader.classList.toggle('header__menu-open');
	});
}

// COUNTER

window.addEventListener('scroll', () => {
	
	const counters = document.querySelectorAll('.number');
	counters.forEach((number) => {
	number.innerHTML = "0";

		const updateCounter = () => {
			const target = +number.getAttribute("data-target");
			const c = +number.innerText;

			if (c < target) {
				number.innerText = c + 1;
				setTimeout(updateCounter, 100);
			} else {
				number.innerText = target;
			}
		};
		updateCounter();
	})
});