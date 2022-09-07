let count = 31;

const timerDisplay = document.getElementById("timer");

// Countdown
const countdown = () => {
  if (count > 0) {
    count--;
  }
  timerDisplay.innerHTML = count;
};

// Remove 10 seconds from timer if wrong answer is selected
const wrongAnswer = () => {
  count -= 10;
};

// Hide question 1, show question 2
const displayQ2 = () => {
  const questionTwo = document.getElementById("question-section-2");
  questionOne.style.display = "none";
  questionTwo.style.display = "block";
};

// User selects wrong answer
const q1a1 = document.getElementById("q1-a1");
const q1a2 = document.getElementById("q1-a2");
q1a1.addEventListener("click", wrongAnswer);
q1a2.addEventListener("click", wrongAnswer);

// User selects correct answer - Q1
const q1a3 = document.getElementById("q1-a3");
q1a3.addEventListener("click", displayQ2);

// Target Start button
const startButton = document.getElementById("start-btn");

// Target startup section
const startupScreen = document.getElementById("startup-screen");

// Target question section
const questionOne = document.getElementById("question-section-1");

// Remove startup screen
const removeStartupScreen = function () {};

// Start Button Click - Display Question 1 and Timer
const handleStartButtonClick = function () {
  setInterval(countdown, 1000);
  startupScreen.style.display = "none";
  questionOne.style.display = "block";
  timerDisplay.style.display = "block";

  removeStartupScreen();
  renderQuestion();
};

// Add event handler to start button
startButton.addEventListener("click", handleStartButtonClick);

// Render Question
// const renderQuestion = function () {
//   // Create question container section
//   const section = document.createElement("section");
//   section.setAttribute("class", "question-container");

//   // Create question
//   const h2 = document.createElement("h2");
//   h2.textContent = "What is JavaScript?";

//   // Create question answers
//   const ul = document.createElement("ul");
//   ul.setAttribute("class", "answers-list");

//   // Loop over li items to create
//   const li1 = document.createElement("li");
//   li1.setAttribute("class", "list-item");
//   li1.textContent = "Indonesian penmanship";

//   const li2 = document.createElement("li");
//   li1.setAttribute("class", "list-item");
//   li2.textContent = "Indonesian penmanship";

//   const li3 = document.createElement("li");
//   li1.setAttribute("class", "list-item");
//   li3.textContent = "Indonesian penmanship";
// };
