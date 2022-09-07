// Target high scores section
const highScores = document.getElementById("highScoreValues");

// Display high score values from local storage
for (let key in localStorage) {
  console.log(key);
  console.log(localStorage.getItem(key));
}
highScores.innerHTML = localStorage;
