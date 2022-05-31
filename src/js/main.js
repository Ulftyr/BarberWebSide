const burgerBtn = document.querySelector('.nav__mobile')
const iconAnimation = document.querySelector('.nav__mobile-burger')
const menuList = document.querySelector('.nav__menu-list')

const slider = document.querySelector('.gallery__slider-box')
const leftBtnSlider = document.querySelector('.gallery__btn-left')
const rightBtnSlider = document.querySelector('.gallery__btn-right')
const carouselSlider = document.querySelectorAll('.gallery__slider-img')
const carouselWidth = 800
const carouselSpeed = 2500

let indexCarousel = 0

const animationBurger = () => {
	iconAnimation.classList.toggle('active')

	if (iconAnimation.classList.contains('active')) {
		menuList.style.transform = 'translateX(0)'
	} else {
		menuList.style.transform = 'translateX(100%)'
	}
}

const handleCarousel = () => {
	indexCarousel++
	changeImg()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImg = () => {
	if (indexCarousel > carouselSlider.length - 1) {
		indexCarousel = 0
	} else if (indexCarousel < 0) {
		indexCarousel = carouselSlider.length - 1
	}

	slider.style.transform = `translateX(${-indexCarousel * carouselWidth}px)`
}

const handleLeftBtn = () => {
	indexCarousel--
	resetCarousel()
}

const handleRightBtn = () => {
	indexCarousel++
	resetCarousel()
}

const resetCarousel = () => {
	changeImg()
	clearInterval(startCarousel)
	startCarousel = setInterval(handleCarousel, carouselSpeed)
}

leftBtnSlider.addEventListener('click', handleLeftBtn)
rightBtnSlider.addEventListener('click', handleRightBtn)
burgerBtn.addEventListener('click', animationBurger)
