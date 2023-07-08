var startBtn = document.querySelector("#startBtn");
var quizPage = document.querySelector("#quizPage");
var askQuestion = document.getElementById("askQuestion");
var answerBtn1 = document.getElementById("answerBtn1");
var answerBtn2 = document.getElementById("answerBtn2");
var answerBtn3 = document.getElementById("answerBtn3");
var answerBtn4 = document.getElementById("answerBtn4");
var checkLine = document.querySelector(".checkLine");
var totalScore = 0;
var scoreRec = document.getElementById('scoreRecord');
var backBtn = document.getElementById('backBtn');
var clearBtn = document.getElementById('clearBtn');

var questions = [
  {
    question: "Question 1: What event happens when a user clicks an HTML element?",
    choices: ["a. onchange", "b. onmouseclick", "c. onmouseover", "d. onclick"],
    answer: "d. onclick",
  },
  {
    question: "Question 2: What is the condition of an if/else statement enclosed in?",
    choices: ["a. quotes", "b. parenthesis", "c. square brackets", "d. curly brackets"],
    answer: "c. square brackets",
  },
  {
    question: "Question 3: A CSS example of a pseudo selector is...",
    choices: ["a. hi>p", "b. :change", "c. :hover", "d.:click"],
    answer: "c. :hover",
  }
];
var questionNumber = 0;
var sec = 60;
var timer;

function quizStart() {
  startPage.style.display = "none";
  quizPage.style.display = "block";
  showQuestion();
  timer = setInterval(function () {
    document.getElementById('timer').innerHTML = +sec;
    sec--;

    if (sec < 0) {
      gameOver()
    }
  }, 1000);
};
function showQuestion() {
  askQuestion.textContent = questions[questionNumber].question;
  answerBtn1.textContent = questions[questionNumber].choices[0];
  answerBtn2.textContent = questions[questionNumber].choices[1];
  answerBtn3.textContent = questions[questionNumber].choices[2];
  answerBtn4.textContent = questions[questionNumber].choices[3];

  answerBtn1.setAttribute('value',questions[questionNumber].choices[0])
  answerBtn2.setAttribute('value',questions[questionNumber].choices[1])
  answerBtn3.setAttribute('value',questions[questionNumber].choices[2])
  answerBtn4.setAttribute('value',questions[questionNumber].choices[3])


};

function checkAnswer(event) {
  if (questions[questionNumber].answer === event.target.value) {
    checkLine.textContent = "Correct!";
    totalScore = totalScore + 1;
    questionNumber++;

  } else {
    checkLine.textContent = "Wrong! The correct answer is " + questions[questionNumber].answer + " .";
    questionNumber++;
  }


  if (questionNumber === questions.length) {
    gameOver();
  } else {
    showQuestion();
  }
}

function gameOver() {
  clearInterval(timer);
  quizPage.style.display = "none";
  console.log(totalScore);
  highscorePage.style.display = "block";
  scoreRec.textContent = totalScore;
};

function refresh () {
  window.location.reload()
}


backBtn.addEventListener("click", refresh);
startBtn.addEventListener("click", quizStart);
answerBtn1.addEventListener("click", checkAnswer);
answerBtn2.addEventListener("click", checkAnswer);
answerBtn3.addEventListener("click", checkAnswer);
answerBtn4.addEventListener("click", checkAnswer);