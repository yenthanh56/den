// const object1 = {
// 	a: "somestring",
// 	b: 42,
// };

// for (const [key, value] of Object.entries(object1)) {
// 	const arr = `${key}, ${value}`;
// 	console.log(arr);
// }

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.slice(4));
//  ['Banana', 'Orange', 'Lemon', 'Apple'] fruits.slice(4)
// ['Orange', 'Lemon', 'Apple', 'Mango'] fruits.slice(1)

// const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(""));
// // expected output: "FireAirWater"

// console.log(elements.join("-"));
// // expected output: "Fire-Air-Water"

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words[2]);
// // expected output: "fox"

// const chars = str.split("");
// console.log(chars[8]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

// const array1 = [{ a: 1, b: 2, c: 3 }];

// for (const element of array1) {
// 	console.log(element);
// }
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
// 	console.log(property);
// }

// function create(obj) {
// 	obj = { ...obj };
// 	obj = JSON.parse(JSON.stringify(obj));
// 	// JSON.parse(JSON.stringify(obj))
// 	obj.famimy = [7, 5];
// 	obj.name = "Mercedes";
// 	console.log(obj);
// }

// const card = {
// 	name: "BWM",
// 	age: 20,
// 	address: "acb",
// 	famimy: [1, 2, 3],
// };
// Deep clone
// const newCard = { ...card, famimy: [...card.famimy] };
// const newCard = { ...card, famimy: [...card.famimy] };
// newCard.famimy.push(4);
// console.log(newCard);

// console.log(card);

// const newCard = JSON.parse(JSON.stringify(card));
// newCard.famimy.slice(0, 2);
// console.log(card);

// let myInfo = {
// 	name: "thanh",
// 	age: 25,
// 	address: "HCM",
// };
// let arr = [1, 23, 4];

// for (let value in myInfo) {
// 	// console.log(myInfo[key]); // value
// 	console.log(value); // key
// }
// for (let key in arr) {
// 	console.log(key); // key
// 	// console.log(arr[key]); // value
// }

// let arr = ["black", "white", "yellow"];
// for (let value of arr) {
// 	console.log([value]);
// }
// let user = {
// 	name: "thanh",
// 	age: 25,
// 	address: "HCM",
// };

// let arr = [2, 4, 5];
// for (let value of Object.keys(arr)) {
// 	console.log(value);
// }

// const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
// console.log([...new Set(numbers)]);

// const mySet1 = new Set();
// mySet1.add(5);
// mySet1.add(5);
// mySet1.add(5);

// mySet1.add(4);
// mySet1.add(undefined);
// mySet1.add(8);
// // mySet1.add(2);
// mySet1.delete(4);
// mySet1.has(2);

// console.log(mySet1);

// let text = 'India'
// const mySet = new Set(text)  // Set(5) {'I', 'n', 'd', 'i', 'a'}
// mySet.size  // 5

// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);
// console.log(map1.get("b")); // 2
// console.log(map1.size);
// // expected output: 1
// map1.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
// console.log(map1);

// const calcBill = (bill) => {
// 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [30, 25, 80, 100];
// const tip = [
// 	calcBill(bills[0]),
// 	calcBill(bills[1]),
// 	calcBill(bills[2]),
// 	calcBill(bills[3]),
// ];
// const total = [
// 	tip[0] + bills[0],
// 	tip[1] + bills[1],
// 	tip[2] + bills[2],
// 	tip[3] + bills[3],
// ];
// console.log(tip);
// console.log(total);
// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++) {
// 	const tip = calcBill(bills[i]);
// 	console.log(tip);
// 	tips.push(tip);
// 	const total = tip + bills[i];
// 	totals.push(total);
// 	// console.log(bills[i]);
// }
// console.log(tips);
// console.log(totals);

// const arrNumber = [10, 32, 23];

// const printForceCast = (arr) => {
// 	let temp = "";
// 	for (let i = 0; i < arr.length; i++) {
// 		temp = temp + `${arr[i]} in ${i + 1} days`;
// 	}
// 	console.log(temp);
// };

// printForceCast(arrNumber);

// const arrayTemp = [12, 25, 36];

// const printForceCast = (arr) => {
// 	let temp = "";
// 	for (let i = 0; i < arr.length; i++) {
// 		temp = temp + `${arr[i]}*C in ${i + 1} days...`;
// 	}
// 	console.log(temp);
// };

// printForceCast(arrayTemp);

// const calcAverage = (arr) => {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	return sum / arr.length;
// };

// console.log(calcAverage([2, 2, 2]));

// const $$ = document.querySelectorAll.bind(document);
// const $ = document.querySelector.bind(document);

// const btnShowModal = $$(".btn-modal");
// const modal = $(".modal");
// const overlays = $(".overlays");
// const btnClose = $(".btn-close");
// console.log(modal);
// for (let i = 0; i < btnShowModal.length; i++) {
// 	btnShowModal[i].onclick = function () {
// 		displayShowModal();
// 	};
// }
// document.addEventListener("keydown", function (e) {
// 	let keyCode = e.key;
// 	console.log(keyCode);
// 	if (keyCode === "Escape") {
// 		displayCloseModal();
// 	}
// });
// const displayShowModal = () => {
// 	modal.classList.remove("hidden");
// 	overlays.classList.remove("hidden");
// };
// const displayCloseModal = () => {
// 	modal.classList.add("hidden");
// 	overlays.classList.add("hidden");
// };
// btnClose.onclick = displayCloseModal;
// overlays.onclick = displayCloseModal;

// const user = {
// 	lastName: "Thanh",
// 	family: ["mom", "dad"],
// };

// const user1 = user;
// user1.family.push("sister");
// user1.lastName = "Ngo";
// console.log("user1", user1);
// console.log("user", user);

// const user1 = Object.assign({}, user);

// user1.lastName = "Ngo";

// user1.family.push("sister");

// console.log("user1", user1);
// console.log("user", user);

// console.log(3 || "jona"); // => 3
// console.log("" || "Jona"); // Jona
// console.log(true || 0); // true
// console.log(undefined || null); //null
// console.log(undefined || 0 || "" || "Hello" || 23);

// console.log(false && "dog"); // false
// console.log(0 && "dog"); // 0
// console.log("ab" && "cd"); // cd
// console.log("ab" && "cd" && null); // null

// const game = {
// 	team1: "Chelsea FC",
// 	team2: "Mu FC",
// 	players: [
// 		[
// 			"Mendy",
// 			"Chilwell",
// 			"Azpilicueta",
// 			"Koulibaly",
// 			"Mount",
// 			"Jorginho",
// 			"Kovacic",
// 			"kante",
// 			"Havertz",
// 			"Sterling",
// 			"Pulisic",
// 		],
// 		[
// 			"De Gea",
// 			"Shaw",
// 			"Dalot",
// 			"Martinez",
// 			"Varane",
// 			"Fernandes",
// 			"Eriksen",
// 			"Casemiro",
// 			"Santos",
// 			"Sancho",
// 			"Ronaldo",
// 		],
// 	],
// 	score: "4:0",
// 	scored: ["Pulisic", "Sterling", "Havertz", "Mount"],
// 	date: "Sep 11th , 2022",
// 	odds: {
// 		team1: 1.33,
// 		x: 3.25,
// 		team2: 6.5,
// 	},
// };

// const [player1, player2] = game.players;

// console.log("team1", player1);
// console.log("team2", player2);

// const [GK1, ...fieldTeam1] = player1;
// const [GK2, ...fieldTeam2] = player2;

// console.log("GK1", GK1);
// console.log("GK2", GK2);

// const allTeam1 = [...player1];
// console.log(allTeam1);

// const {
// 	odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const remainPlayer = [...allTeam1, "kaka", "messi"];
// console.log("RemainPlayer", remainPlayer);

// const printGoals = (...players) => {
// 	console.log(players);
// };

// printGoals("kaka", "Ronaldo", "Messi");

// printGoals(...game.scored);

function twoSum(nums, target) {
	const hashMap = {};
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		console.log({ num }, hashMap);
		if (hashMap[target - num] !== undefined) {
			return [hashMap[target - num], i];
		}
		hashMap[num] = i;
	}
}
console.log(twoSum([2, 7, 11, 15], 26));
// function twoSum2(nums, target) {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = 0; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// }
// console.log(twoSum2([2, 3, 4], 5));

// const regexPhoneNumber = (phone) => {
// 	const regexPhoneNumber = /((09|03|07|08|05)+([0-9]{8})\b)/g;

// 	return phone.match(regexPhoneNumber) ? true : false;
// };

// console.log(regexPhoneNumber(84387771137));
