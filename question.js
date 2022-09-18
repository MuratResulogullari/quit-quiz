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
    "2-Which javascript doesn't has framework?",
    { a: "Angular", b: "reactJS", c: "Vue", d: "reactstrap" },
    "d"
  ),
  new Question(
    "3-Which file end .ts?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Javascript" },
    "b"
  ),
  new Question(
    "4-Which javascript's framework?",
    { a: ".Net", b: "reactJS", c: "Agile", d: "codeigniter" },
    "b"
  ),
  new Question(
    "5-Which does React has library ?",
    { a: "T-Sql", b: "reactstrap", c: "Pl-Sql", d: "Sql lite" },
    "b"
  ),
];