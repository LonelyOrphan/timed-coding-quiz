// Target Start button
const startButton = document.getElementById("start-btn");

// Target startup section
const startupScreen = document.getElementById("startup-screen");

// Target main element
const mainElement = document.getElementById("main");

// Remove startup screen
const removeStartupScreen = function() {

}

// Render Question
const renderQuestion = function() {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
}

// Declare event handler function for start button click
const handleStartButtonClick = function() {
    console.log(startButton);
    // 
    removeStartupScreen();
    renderQuestion();
}

// Add event handler to start button
startButton.addEventListener("click", handleStartButtonClick);