// Target Start button
const startButton = document.getElementById("start-btn");

// Target main section
const mainContent = document.getElementById("startup-screen");

// Remove startup screen
const removeStartupScreen = function() {

}

// Render Question
const renderQuestion = function() {
    
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