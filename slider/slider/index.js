const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let sliderNumber = 1;
const lenghtImage = images.length;

for (let i = 0; i < lenghtImage; i++) {
	const div = document.createElement("div");
	div.className = "button";
	bottom.appendChild(div);
}
const onChangeButtonSlider = () => {
	resetBg();
	buttons[sliderNumber - 1].style.backgroundColor = "white";
};

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
	buttons.forEach((button) => (button.style.backgroundColor = "transparent"));
};

buttons.forEach((button, i) =>
	button.addEventListener("click", (e) => {
		resetBg();
		slider.style.transform = `translateX(-${i * 800}px)`;
		button.style.backgroundColor = "white";
	})
);

const nextSlider = () => {
	slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
	sliderNumber++;
};
const prevSlider = () => {
	slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
	sliderNumber--;
};
const lastSlider = () => {
	slider.style.transform = `translateX(-${(lenghtImage - 1) * 800}px)`;
	sliderNumber = lenghtImage;
};

const firstSlider = () => {
	slider.style.transform = `translateX(0px)`;
	sliderNumber = 1;
};

btnLeft.addEventListener("click", (e) => {
	e.preventDefault();
	// can't  sliderNumber < 1, initvalue = 1
	sliderNumber > 1 ? prevSlider() : lastSlider();
	onChangeButtonSlider();
});
btnRight.addEventListener("click", (e) => {
	e.preventDefault();
	// can't  sliderNumber < lenghtImage, initvalue = 1

	sliderNumber < lenghtImage ? nextSlider() : firstSlider();
	onChangeButtonSlider();
});
