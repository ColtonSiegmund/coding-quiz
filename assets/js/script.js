var startBtn = document.querySelector ("#startBtn");
var quizPage = document.querySelector ("#quizPage");


function quizStart () {
  startPage.style.display = "none";
  quizPage.style.display = "block";
};

startBtn.addEventListener("click", quizStart);