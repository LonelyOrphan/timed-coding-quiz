// Target high scores section
const highScores = document.getElementById("highScoreValues");

// Display high score values from local storage
let sortable = [];
for (let key in Object.entries(localStorage)) {
  sortable.push([key, localStorage[key]]);
}
sortable.sort(function (a, b) {
  return a[1] - b[1];
});

console.log(sortable);

for (let [key, value] of Object.entries(localStorage)) {
  console.log(`${key}: ${value}`);
  highScores.innerHTML += `<li>${key}: ${value}</li>`;
}
