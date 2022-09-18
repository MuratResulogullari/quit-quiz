const ui = new UI();
const quiz = new Quiz(questions);

    ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
      startTimer(10);
      startTimerLine();
      ui.viewQuestion(quiz.getQuestion());
      ui.viewQuestionCount(quiz.questionIndex+1,quiz.questions.length)
      ui.btn_next.classList.remove("show")
      
});
ui.btn_next.addEventListener("click", () => {
  
  if (quiz.questions.length != quiz.questionIndex+1) {
    ui.quiz_box.classList.add("active");
    quiz.questionIndex += 1;
    clearInterval(counter);
    clearInterval(counterLine);

    ui.time_text.textContent = "remaining time";

    startTimer(10);
    startTimerLine();
    ui.viewQuestion(quiz.getQuestion());
    ui.viewQuestionCount(quiz.questionIndex+1,quiz.questions.length)
  }
  else {
    clearInterval(counter);
    clearInterval(counterLine);

    ui.time_text.textContent = "remaining time";
    ui.quiz_box.classList.remove("active")
    ui.btn_start.style = "display:none;";
    ui.score_box.classList.add("active");
    console.log("Quiz Finished");
    ui.viewScore(quiz.trueAnswerCount, quiz.questions.length);
  }
})
ui.btn_quit.addEventListener("click", () => {
  window.location.reload();
});
ui.btn_replay.addEventListener("click", () => {
  quiz.questionIndex = 0;
  quiz.trueAnswerCount = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
});

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counterLine);
  ui.time_text.textContent = "remaining time";
  let answer = option.querySelector("span b").textContent;
  let question = quiz.getQuestion();
  if (question.rightOption==answer) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
    quiz.trueAnswerCount += 1;
  } else
  {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }
  const options = document.querySelectorAll(".option");
  for (let opt in options) {
    
    if (Object.hasOwnProperty.call(options, opt)) {
      const element = options[opt];
      element.classList.add("disabled");  
    }
  }
  ui.btn_next.classList.add("show");
}
let counter;
function startTimer(time) {
  counter=setInterval(timer, 1000);
  function timer() {
    ui.time_second.textContent = time;
    time--;
    if (time<0) {
      clearInterval(counter);
      ui.time_text.textContent = "time finish";
      let answer = quiz.getQuestion().rightOption;
     
      for (let opt of ui.option_list.children) {
        if (opt.querySelector("span b").textContent==answer) {
          opt.classList.add("correct");
          opt.insertAdjacentHTML("beforeend", ui.correctIcon);
        }
        opt.classList.add("disabled");
        
      }
      ui.btn_next.classList.add("show");
    }
  }
}
let counterLine;
function startTimerLine() {

  let line_width = 0;
 counterLine=setInterval(timer, 20);
    function timer() {
      line_width += 1;
      ui.time_line.style.width = line_width + "px";
      if (line_width>545) {
        clearInterval(counterLine);
      }
  }
}