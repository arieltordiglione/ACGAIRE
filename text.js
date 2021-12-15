/* DESPLEGABLE CATALOGO*/
console.log("hola ritrac, no te copies -.-");
document.querySelectorAll(".accordion__button").forEach((button) => {
	button.addEventListener("click", () => {
		const accordionContent = button.nextElementSibling;

		button.classList.toggle("accordion__button--active");

		if (button.classList.contains("accordion__button--active")) {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
		} else {
			accordionContent.style.maxHeight = 0;
		}
	});
});

/* SLIDER INDEX */
(function () {
	const sliders = [...document.querySelectorAll(".slider__body")];
	const arrowNext = document.querySelector("#next");
	const arrowBefore = document.querySelector("#before");
	let value;

	arrowNext.addEventListener("click", () => changePosition(1));

	arrowBefore.addEventListener("click", () => changePosition(-1));

	function changePosition(change) {
		const currentElement = Number(
			document.querySelector(".slider__body--show").dataset.id
		);

		value = currentElement;
		value += change;

		if (value == 0 || value == sliders.length + 1) {
			value = value === 0 ? sliders.length : 1;
		}

		sliders[currentElement - 1].classList.toggle("slider__body--show");
		sliders[value - 1].classList.toggle("slider__body--show");
	}
})();
