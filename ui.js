function UI() {
  this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></i></div>',
    this.incorrectIcon = '<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div>',
    this.score_box = document.querySelector(".score_box"),
    this.score_text = document.querySelector(".score_text"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.time_text = document.querySelector(".time_text")
  this.time_second = document.querySelector(".time_second"),
  this.time_line = document.querySelector(".time_line") 
}
UI.prototype.viewQuestion=function(question) {
  this.btn_next.classList.remove("show")
  let questionText=`<span>${question.questionText}</span>`;
  let optionshtml = ``;
  for (let option in question.options) {    
          optionshtml += `
          <div class="option" onclick="optionSelected(this)">
            <span><b>${option}</b>: ${question.options[option]}</span>     
          </div>
          `;
  }
  
  document.querySelector(".question_test").innerHTML = questionText;
  this.option_list.innerHTML = optionshtml;
  

}
UI.prototype.viewQuestionCount= function (questionSort,totalQuestion) {
  
  let tag = `<span class="badge bg-warning">${questionSort} / ${totalQuestion}</span>`;
  document.querySelector(".quiz_box .question_index").innerHTML = tag;

}
UI.prototype.viewScore =function(trueAnswer,totalQuestion) {
  let tag=`Total: ${trueAnswer} true of ${totalQuestion} questions`;
  this.score_text.innerHTML = tag;
}