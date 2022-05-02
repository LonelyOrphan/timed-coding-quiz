// Target Start button
const startButton = document.getElementById("start-btn");

// Target startup section
const startupScreen = document.getElementById("startup-screen");

// Target main element
const mainElement = document.getElementById("main");

// Target question section
const questionElement = document.getElementById("question-section");

// Remove startup screen
const removeStartupScreen = function() {
    
}

// Render Question
const renderQuestion = function() {

    // Create question container section
    const section = document.createElement("section");
    section.setAttribute("class", "question-container");

    // Create question
    const h2 = document.createElement("h2");
    h2.textContent = "What is JavaScript?";

    // Create question answers
    const ul = document.createElement("ul");
    ul.setAttribute("class", "answers-list");
    

    // Loop over li items to create
    const li1 = document.createElement("li");
    li1.setAttribute("class", "list-item");
    li1.textContent = "Indonesian penmanship";

    const li2 = document.createElement("li");
    li1.setAttribute("class", "list-item");
    li2.textContent = "Indonesian penmanship";

    const li3 = document.createElement("li");
    li1.setAttribute("class", "list-item");
    li3.textContent = "Indonesian penmanship";

}

// Declare event handler function for start button click
const handleStartButtonClick = function() {
    startupScreen.style.display = "none";
    questionElement.style.display = "block";

    removeStartupScreen();
    renderQuestion();
}

// Add event handler to start button
startButton.addEventListener("click", handleStartButtonClick);