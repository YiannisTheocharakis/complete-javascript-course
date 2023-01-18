console.log("Parsing bmiCalc.js")
let massMark = 78;
let heightMark =1.69;
let massJohn=120;
let heightJohn=1.80;

let bmiMark = massMark/heightMark**2;
let bmiJohn = massJohn/heightJohn**2;

let markHigherBMI = bmiMark>bmiJohn;
console.log(bmiMark,bmiJohn,markHigherBMI);