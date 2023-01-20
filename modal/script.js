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

// for (const [index, player] of Object.entries(game.scored)) {
// 	console.log(`Goals ${index} : ${player}`);
// }

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
// 	average += odd;
// }

// average /= odds.length;

// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
// 	const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
// 	console.log(`Odd of ${teamStr} ${odd}`);
// }

// let scorers = {};
// const players = game.scored.entries();

// for (const [key, player] of players) {
// 	scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

// const gameEvents = new Map([
// 	[17, "Goal"],
// 	[34, "Goal"],
// 	[65, "Goal"],
// 	[55, "Yellow"],
// 	[56, "Yellow"],
// 	[92, "Red"],
// 	[922, "Red"],
// 	[924, "Red"],
// 	[925, "Red"],
// 	[926, "Red"],
// 	[9262, "Red"],
// ]);

// const events = new Set(gameEvents.values());
// // gameEvents.delete(17);
// console.log(gameEvents);
// console.log(gameEvents.size);

// console.log(events);
// console.log(
// 	`an event happend on average every ${90 / gameEvents.size} minutes`
// );

// for (const [min, event] of gameEvents) {
// 	const half = min <= 45 ? "FIRST" : "SECOND";
// 	console.log(`[${half} HALF] ${min}: ${event}`);
// }

const score0EL = document.querySelector(".point_0");
const score1EL = document.querySelector(".point_1");
const scoreCurrent0EL = document.querySelector(".point__current0");
const scoreCurrent1EL = document.querySelector(".point__current1");
const btnNewgame = document.querySelector(".btn_newgame");
const btnRolldice = document.querySelector(".btn_rolldice");

const btnHold = document.querySelector(".btn_hold");
const diceEL = document.querySelector(".dice");
const player0El = document.querySelector(".player0");
const player1El = document.querySelector(".player1");

let score, currentScore, activePlayer, playing;

const init = () => {
	score = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;

	score0EL.textContent = 0;
	score1EL.textContent = 0;
	scoreCurrent0EL.textContent = 0;
	scoreCurrent1EL.textContent = 0;
	player0El.classList.add("player--active");
	player1El.classList.remove("player--active");
	player0El.classList.remove("player--winner");
	player1El.classList.remove("player--winner");
};

init();

const switchPlayer = () => {
	document.querySelector(`.point__current${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0El.classList.toggle("player--active");
	player1El.classList.toggle("player--active");
};

btnRolldice.addEventListener("click", () => {
	if (playing) {
		// random
		const dice = Math.trunc(Math.random() * 6 + 1);
		// display dice
		diceEL.classList.remove("hidden");
		diceEL.src = `dice-${dice}.png`;

		if (dice !== 1) {
			currentScore += dice;
			document.querySelector(
				`.point__current${activePlayer}`
			).textContent = currentScore;
		} else {
			switchPlayer();
		}
	}
});

btnHold.addEventListener("click", () => {
	if (playing) {
		score[activePlayer] += currentScore;

		document.querySelector(`.point_${activePlayer}`).textContent =
			score[activePlayer];

		if (score[activePlayer] >= 10) {
			playing = false;
			diceEL.classList.add("hidden");
			document
				.querySelector(`.player${activePlayer}`)
				.classList.add("player--winner");
			document
				.querySelector(`.player${activePlayer}`)
				.classList.remove("player--active");
		} else {
			switchPlayer();
		}
	}
});

btnNewgame.addEventListener("click", init);
