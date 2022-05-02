# timed-coding-quiz
A timed coding quiz with multiple choice answers.
High scores are stored on the high scores page.

[Screenshot](./assets/images/screenshot.jpg)

Live app: https://lonelyorphan.github.io/timed-coding-quiz/

User Journey

- Page loads
- User is presented with Start button
- User clicks start button
- A timer starts to count down and you are presented with the first question 
- When you are presented with a question you will have your multiple choice answers 
- When user clicks on answer (li or button) then move to next question
- When I click on an answer, then the selected answer is validated against the correct answer (how do we store correct answer for a question rendered)
- If answer is correct go to next question
- If answer is wrong subtract time from remaining time and go to the next question
- Game Over Logic
  - When all questions are answered (track current question)
  OR
  - When remaining time reaches 0
- When you answer all questions stop the timer and record that as your score and render form
