const data = [
	{
		id: "1",
		question: "Cầu vòng có bao nhiêu màu",
		answers: [
			{
				id: "ans1",
				answer: "6 màu",
				iscorrectly: false,
			},
			{
				id: "ans2",
				answer: "7 màu",
				iscorrectly: true,
			},
			{
				id: "ans1",
				answer: "8 màu",
				iscorrectly: false,
			},
			{
				id: "ans1",
				answer: "9 màu",
				iscorrectly: false,
			},
		],
	},
	{
		id: "2",
		question: "5+4",
		answers: [
			{
				id: "ans1",
				answer: "9",
				iscorrectly: true,
			},
			{
				id: "ans2",
				answer: "7",
				iscorrectly: false,
			},
			{
				id: "ans1",
				answer: "5",
				iscorrectly: false,
			},
			{
				id: "ans1",
				answer: "3",
				iscorrectly: false,
			},
		],
	},
	{
		id: "2",
		question: "5+4",
		answers: [
			{
				id: "ans1",
				answer: "9",
				iscorrectly: true,
			},
			{
				id: "ans2",
				answer: "7",
				iscorrectly: false,
			},
			{
				id: "ans1",
				answer: "5",
				iscorrectly: false,
			},
			{
				id: "ans1",
				answer: "3",
				iscorrectly: false,
			},
		],
	},
];

const game = document.querySelector(".game");
const result = document.querySelector(".result");
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const done = document.querySelector(".done");
const again = document.querySelector(".again");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const showResult = () => {
	game.style.display = "none";
	result.style.display = "block";
	done.querySelector(".iscorrectly").textContent = correctCount;
	done.querySelector(".wrong").textContent = wrongCount;
	const score = done.querySelector(".score");
	let totalScore = correctCount * 10;

	if (totalScore < 0) {
		return (score.innerHTML = 0);
	} else {
		return (score.innerHTML = `Tổng Điểm ` + totalScore);
	}
};

const showQuiz = (qNumber) => {
	selectedAnswer = null;

	if (qIndex === data.length) return showResult();
	question.textContent = data[qNumber].question;
	answers.innerHTML = data[qNumber].answers
		.map(
			(item, index) =>
				`
		<div class="answer"> 
			<input type="radio" id=${index} name="answer" value=${item.iscorrectly}>
			<label for=${index}>${item.answer}</label>
		</div> 
		`
		)
		.join("");
	selectAnswer();
};

const selectAnswer = () => {
	answers.querySelectorAll("input").forEach((el) => {
		el.addEventListener("click", (e) => {
			selectedAnswer = e.target.value;
		});
	});
};

const submitQuiz = () => {
	submit.addEventListener("click", () => {
		if (selectedAnswer !== null) {
			selectedAnswer === "true" ? correctCount++ : wrongCount++;
			qIndex++;
			showQuiz(qIndex);
		} else {
			alert("Please choose answer");
		}
	});
};
const againPlay = () => {
	again.addEventListener("click", () => {
		game.style.display = "block";
		result.style.display = "none";
		qIndex = 0;
		correctCount = 0;
		wrongCount = 0;
		total = 0;
		selectedAnswer;
		showQuiz(qIndex);
	});
};

againPlay();
submitQuiz();
showQuiz(qIndex);
