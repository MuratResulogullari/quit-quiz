// OOP :  Object Orientad Programming

function Question(questionText, options, rightOption) {
  this.questionText = questionText;
  this.options = options;
  this.rightOption = rightOption;
}
// prototype  sayesinde function defalarca üretmek yerine bir kez üretilip
// sınıf üzerinden ulaşılrak tekrar  tekrar kullanılabilir
Question.prototype.optionControl = function (params) {
  return params === this.rightOption;
};
let questions = [
  new Question(
    "1-Which javascripts application package?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Javascript" },
    "c"
  ),
  new Question(
    "2-Which javascripts application package?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Javascript" },
    "a"
  ),
  new Question(
    "3-Which javascripts application package?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Javascript" },
    "b"
  ),
  new Question(
    "4-Which javascripts framework?",
    { a: "Node.tx", b: "reactJS", c: "scrum", d: "codeigniter" },
    "b"
  ),
];