let count = 31;
let finalScore;

// Target startup section
const startupScreen = document.getElementById("startup-screen");

// Target Start button
const startButton = document.getElementById("start-btn");

// Target question sections
const questionOneSection = document.getElementById("question-section-1");
const questionTwoSection = document.getElementById("question-section-2");
const questionThreeSection = document.getElementById("question-section-3");

// Target answers to questions
const q1a1 = document.getElementById("q1-a1");
const q1a2 = document.getElementById("q1-a2");
const q2a1 = document.getElementById("q2-a1");
const q2a3 = document.getElementById("q2-a3");
const q3a2 = document.getElementById("q3-a2");
const q3a3 = document.getElementById("q3-a3");

// Target timer display
const timerDisplay = document.getElementById("timer");

// Target save score section
const saveScoreSection = document.getElementById("saveHighScore");

// Target initials form
const initialsForm = document.getElementById("initialsForm");

// Target initials input window
const initialsText = document.getElementById("initials");

// Declare function to run and display countdown
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

// Display question 1 and Timer
const startQuiz = function () {
  setInterval(countdown, 1000);
  startupScreen.style.display = "none";
  questionOneSection.style.display = "block";
  timerDisplay.style.display = "block";
};

// Hide question 1, show question 2
const displayQ2 = () => {
  questionOneSection.style.display = "none";
  questionTwoSection.style.display = "block";
};

// Hide question 2, show question 3
const displayQ3 = () => {
  questionTwoSection.style.display = "none";
  questionThreeSection.style.display = "block";
};

// Hide question 3, show scores
const saveScore = () => {
  finalScore = count;
  console.log(finalScore);
  timerDisplay.style.display = "none";
  questionThreeSection.style.display = "none";
  saveScoreSection.style.display = "block";
};

// User clicks start button
startButton.addEventListener("click", startQuiz);

// User selects wrong answer
q1a1.addEventListener("click", wrongAnswer);
q1a2.addEventListener("click", wrongAnswer);
q2a1.addEventListener("click", wrongAnswer);
q2a3.addEventListener("click", wrongAnswer);
q3a2.addEventListener("click", wrongAnswer);
q3a3.addEventListener("click", wrongAnswer);

// User selects correct answer - Q1
const q1a3 = document.getElementById("q1-a3");
q1a3.addEventListener("click", displayQ2);

// User selects correct answer - Q2
const q2a2 = document.getElementById("q2-a2");
q2a2.addEventListener("click", displayQ3);

// User selects correct answer - Q2
const q3a1 = document.getElementById("q3-a1");
q3a1.addEventListener("click", saveScore);

// Submit initials and high score
const submitScore = (e) => {
  e.preventDefault();
  const initials = initialsText.value;
  localStorage.setItem(initials, finalScore);
  window.location.replace("high-scores.html");
};

// User submits initials
initialsForm.addEventListener("submit", submitScore);
