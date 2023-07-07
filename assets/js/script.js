var startBtn = document.querySelector ("#startBtn");
var quizPage = document.querySelector ("#quizPage");
var askQuestion = document.getElementById("askQuestion");
var questionNumber = 0;
var answerBtn1 = document.getElementById("answerBtn1");
var answerBtn2 = document.getElementById("answerBtn2");
var answerBtn3 = document.getElementById("answerBtn3");
var answerBtn4 = document.getElementById("answerBtn4");


function quizStart () {
  startPage.style.display = "none";
  quizPage.style.display = "block";
  questionNumber = 0;
  showQuestion(questionNumber);
  var sec = 60;
  var timer = setInterval(function(){
      document.getElementById('timer').innerHTML=+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
};

var questions = [
  {
    question: "Question 1: What event happens when a user clicks an HTML element?",
  choices: ["a. onchange", "b. onmouseclick", "b. onmouseover", "d. onclick"],
  answer: "a",
},
  {
    question: "Question 2: What is the condition of an if/else statement enclosed in?",
  choices: ["a. quotes", "b. parenthesis", "c. square brackets", "d. curly brackets"],
  answer: "c",
},
  {
    question: "Question 3: A CSS example of a pseudo selector is...",
  choices: ["a. hi>p", "b. :change", "c. :hover", "d.:click"],
  answer: "c",
}
];

function showQuestion (n) {
  askQuestion.textContent = questions[n].question;
  answerBtn1.textContent = questions[n].choices[0];
  answerBtn2.textContent = questions[n].choices[1];
  answerBtn3.textContent = questions[n].choices[2];
  answerBtn4.textContent = questions[n].choices[3];
  questionNumber = n;
  

}



startBtn.addEventListener("click", quizStart);