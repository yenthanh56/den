// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const player0El = document.querySelector(".player0");
// const player1El = document.querySelector(".player1");
// const point0El = document.querySelector(".point_0");
// const point1El = document.querySelector(".point_1");
// const pointcurrent0El = document.querySelector(".point__current0");
// const pointcurrent1El = document.querySelector(".point__current1");
// const btnNewgame = document.querySelector(".btn_newgame");
// const btnRolldice = document.querySelector(".btn_rolldice");
// const btnHold = document.querySelector(".btn_hold");
// const diceEl = document.querySelector(".dice");

// let currentScore, activePlayer, score, playing;

// const init = () => {
// 	currentScore = 0;
// 	activePlayer = 0;
// 	playing = true;
// 	score = [0, 0];
// 	point0El.textContent = 0;
// 	point1El.textContent = 0;
// 	pointcurrent0El.textContent = 0;
// 	pointcurrent1El.textContent = 0;

// 	player0El.classList.add("player--active");
// 	player0El.classList.remove("player--winner");
// 	player1El.classList.remove("player--active");
// 	player1El.classList.remove("player--winner");
// };

// init();

// const switchPlayer = () => {
// 	document.querySelector(`.point__current${activePlayer}`).textContent = 0;
// 	currentScore = 0;
// 	activePlayer = activePlayer === 0 ? 1 : 0;
// 	player0El.classList.toggle("player--active");
// 	player1El.classList.toggle("player--active");
// 	document
// 		.querySelector(`.player${activePlayer}`)
// 		.classList.remove("player--winner");
// 	document
// 		.querySelector(`.player${activePlayer}`)
// 		.classList.add("player--active");
// };

// btnRolldice.addEventListener("click", () => {
// 	if (playing) {
// 		const dice = Math.trunc(Math.random() * 6 + 1);
// 		diceEl.src = `dice-${dice}.png`;
// 		diceEl.classList.remove("hidden");

// 		if (dice !== 1) {
// 			currentScore += dice;
// 			document.querySelector(
// 				`.point__current${activePlayer}`
// 			).textContent = currentScore;
// 		} else {
// 			switchPlayer();
// 		}
// 	}
// });

// btnHold.addEventListener("click", () => {
// 	if (playing) {
// 		score[activePlayer] += currentScore;

// 		document.querySelector(`.point_${activePlayer}`).textContent =
// 			score[activePlayer];

// 		if (score[activePlayer] >= 10) {
// 			console.log("you win");
// 			playing = false;
// 			diceEl.classList.add("hidden");
// 			pointcurrent0El.textContent = 0;
// 			pointcurrent1El.textContent = 0;
// 			document
// 				.querySelector(`.player${activePlayer}`)
// 				.classList.add("player--winner");
// 			document
// 				.querySelector(`.player${activePlayer}`)
// 				.classList.remove("player--active");
// 		} else {
// 			switchPlayer();
// 		}
// 	}
// });

// btnNewgame.addEventListener("click", init);
