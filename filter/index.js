const data = [
	{
		id: "m1",
		name: "Chronograph",
		img: "https://cdn.tgdd.vn/Files/2020/03/11/1241419/c12_600x450.jpg",
		price: 100,
		cat: "Chronograph",
	},

	{
		id: "m2",
		name: "Automatic",
		img: "https://cdn.tgdd.vn/Files/2020/03/11/1241419/c9_600x600.jpg",
		price: 70,
		cat: "Automatic",
	},
	{
		id: "m3",
		name: "Quartz Movement",
		img: "https://cdn.tgdd.vn/Files/2020/03/11/1241419/c7_1280x908-800-resize.jpg",
		price: 80,
		cat: "Quartz Movement",
	},
	{
		id: "m4",
		name: "SmartWatch",
		img: "https://cdn.tgdd.vn/Files/2019/12/17/1227223/a8_800x450.jpg",
		price: 50,
		cat: "SmartWatch",
	},
	{
		id: "m5",
		name: "electronic",
		img: "https://cdn.tgdd.vn/Files/2020/03/11/1241419/c3_1280x960-800-resize.jpg",
		price: 20,
		cat: "electronic",
	},
	{
		id: "m6",
		name: "solar ",
		img: "https://cdn.tgdd.vn/Files/2020/03/11/1241419/c14_1280x960-800-resize.jpg",
		price: 30,
		cat: "solar",
	},
	{
		id: "m7",
		name: "Hybrid Watch",
		img: "https://cdn.tgdd.vn/Files/2020/03/11/1241419/c5_800x600.jpg",
		price: 75,
		cat: "Hybrid Watch",
	},
];

const products = document.querySelector(".products");
const search = document.querySelector(".search");
const cats = document.querySelector(".cats");
const priceRange = document.querySelector(".pricerange");
const priceValue = document.querySelector(".pricevalue");

const displayProducts = (filterProducts) => {
	products.innerHTML = filterProducts
		.map(
			(item, index) =>
				`
		<div class="product" key=${index}>
			<img src=${item.img}
				alt=${item.name}>
			<span>${item.name}</span>
			<span>${item.price}</span>
		</div> 
		`
		)
		.join(" ");
};

search.addEventListener("input", (e) => {
	const searchKeyword = e.target.value;
	if (searchKeyword) {
		displayProducts(
			data.filter((item) => item.name.indexOf(searchKeyword) !== -1)
		);
	} else {
		displayProducts(data);
	}
});

const setCategories = () => {
	const allCats = data.map((item) => item.cat);
	const categories = [
		"All",
		...allCats.filter((item, index) => allCats.indexOf(item) === index),
	];

	cats.innerHTML = categories
		.map(
			(cat) =>
				`
		 	<span class="cat">${cat}</span>

		`
		)
		.join(" ");

	cats.addEventListener("click", (e) => {
		const selectedCat = e.target.textContent;
		if (selectedCat) {
			selectedCat === "All"
				? displayProducts(data)
				: displayProducts(
						data.filter((item) => item.cat === selectedCat)
				  );
		}
	});
};

const setPrice = () => {
	const priceList = data.map((item) => item.price);
	const priceMin = Math.min(...priceList);
	const priceMax = Math.max(...priceList);

	priceRange.min = priceMin;
	priceRange.max = priceMax;

	priceRange.value = priceMax;
	priceValue.textContent = `$` + priceMax;

	priceRange.addEventListener("input", (e) => {
		priceValue.textContent = `$` + e.target.value;
		displayProducts(data.filter((item) => item.price <= e.target.value));
	});
};
setPrice();
setCategories();
displayProducts(data);
