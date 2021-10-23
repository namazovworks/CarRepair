// TABS
document.querySelectorAll('.tabs-list__link').forEach((item)=>{
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