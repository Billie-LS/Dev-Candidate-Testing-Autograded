// Import the readline-sync module for user input
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
// Define candidateName to empty string
let candidateName = '';

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// Initialize question 
let question = "Who was the first American woman in space? ";
// Initialize correctAnswer
let correctAnswer = "Sally Ride"
// set candidateAnswer to empty string
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // console.log(question);
  candidateAnswer = input.question(question);


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  if (candidateAnswer === "Sally Ride") {
    console.log(`Great job! ${correctAnswer} is the right answer.`);
  } else {
    console.log(`My apologies, you have failed this quiz.  ${candidateAnswer} is incorrect.`);
  }



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello ${candidateName}, I hope you have studied for this quiz!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};