const hero = document.getElementById("heroimage");
const header = document.getElementById("fixednav");

const burger = document.querySelector(".menu-trigger");
const navMenu = document.querySelector(".navbar");

const bodyLock = document.body;

const heroOptions = {
	threshold: 1,
};

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			header.classList.add("header__inner--blackout");
		} else {
			header.classList.remove("header__inner--blackout");
		}
	});
}, heroOptions);

heroObserver.observe(hero);

burger.addEventListener("click", () => {
	burger.classList.toggle("menu-trigger--active");
	navMenu.classList.toggle("navbar--open");

	bodyLock.classList.toggle("lock");
});
