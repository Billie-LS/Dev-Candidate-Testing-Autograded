// added to
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
// Declare and initialize variable candidateName to empty string
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// Initialize question 
let question = "Who was the first American woman in space? ";
// Initialize correctAnswer
let correctAnswer = "Sally Ride"
// Declare and initialize variable candidateAnswer to empty string
let candidateAnswer = '';


//TODO: Variables for Part 2
// Declare and initialize variable questions to an array of questions
let questions = [
  'Who was the first American woman in space? ',  // index 0
  'True or false: 5 kilometer == 5000 meters? ',  // index 1
  '(5 + 3)/2 * 10 = ? ',  // index 2
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",  // index 3
  'What is the minimum crew size for the ISS? '  // index 4
];
// Declare and initialize variable correctAnswers to an array of answers
let correctAnswers =[
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
]; 
// Declare and initialize variable candidateAnswers to empty array
let candidateAnswers = [];


// prompt candidate for their name
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  let response = '';
  // Iterate through each question
  // candidateAnswer.push(input.question(questions[i]))
  for (let i = 0; i < questions.length; i++) {
    // Ask the question and assign input answer to response
    response = input.question(questions[i]);
    // add value of response to array candidateAnswers
    candidateAnswers.push(response);
  }
  return candidateAnswers;
}


function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  // initialize counter variable for correct answers count
  let correctCount = 0;
  // Loop through each item in the candidate's answers
  for (let i = 0; i < candidateAnswers.length; i++){
    // Check candidateAnswer equal to correctAnswers, make case-insensitive
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      // Increment correct answer counter
      correctCount+=1;
      console.log(
        // check strict equality each item candidateAnswers to each item correctAnswers, loop through arrays
        // ternary operator
        candidateAnswers[i] === correctAnswers[i]
          // Output answer correct or answer incorrect and here is correct 
          ? `\nGreat job! \n${candidateAnswers[i]} is the correct answer.`
          : `\nYou're answer ${candidateAnswers[i]} is incorrect.\nThe correct answer is: ${correctAnswers[i]}`
      );
    }
  }
  
  return giveScore(correctCount);
}

function giveScore(correctCount) {
  
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  console.log('this is givescore', correctCount);
  // let correctResponseCount = gradeQuiz(candidateAnswers);
  // Calculate the grade based on the number of correct answers
    grade = (correctCount / 5) * 100
    // output score and pass or fail
    console.log(
      // ternary operator 80 or above is pass
      grade >= 80
      ? `\nGreat job! You have achieved a passing score with \n${grade}% correct.`
      : `\nUnfortunately you have not passed this examination. \n${grade}% is a failing score.`
    )
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