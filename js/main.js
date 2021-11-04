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

const counters = document.querySelectorAll('.number');

const updateCounter = (number, e) => {
  const target = +number.getAttribute("data-target");
  const c = +number.innerText;

  if (c < target && e.intersectionRatio === 1) {
    number.innerText = c + 1;
    setTimeout(() => updateCounter(number, e), 100);
  }
};

function createObserver(number) {
  let observer;

  let options = {
    threshold: 1
  };

  observer = new IntersectionObserver(([e]) => updateCounter(number, e), options);
  observer.observe(number);
}

counters.forEach(number => {
  number.innerHTML = "0";
  createObserver(number)
});
