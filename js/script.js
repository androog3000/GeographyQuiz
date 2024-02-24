//Event listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

//Global variables
var score = 0;

function isFormValid() {
  let isValid= true;
  if(document.querySelector("#q1").value == ""){
    isValid = false;
    document.querySelector("#validationFdbk").innerHTML = "Question 1 was not answered";
  }
  return isValid;
} //isFormValid

function gradeQuiz() {
  console.log("Grading quiz…");
  document.querySelector("#validationFdbk").innerHTML = "";//resets validation feedback
  if (!isFormValid()) {
    return;
  }

  function wrongAnswer(index) {
    document.querySelector(`#q${index}Feedback`).innerHTML = "Incorrect!";
    document.querySelector(`#q${index}Feedback`).className = "bg-warning text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/xmark.png' alt='xmark'>";
  }
  
  function rightAnswer(index) {
    document.querySelector(`#q${index}Feedback`).innerHTML = "Correct!";
    document.querySelector(`#q${index}Feedback`).className = "bg-success text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
    score += 20;
  }

  //variables
  score = 0;
  let q1Response = document.querySelector("#q1").value.toLowerCase();
  console.log(q1Response);
  let q2Response = document.querySelector("#q2").value;
  console.log(q2Response);
  let q4Response = document.querySelector("input[name=q4]:checked").value;

  //Grading question 1
  if (q1Response == "sacramento"){
    rightAnswer(1);
  } else {
    wrongAnswer(1);
  }
  //document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;

  //Grading question 2
  if (q2Response == "mo"){
    rightAnswer(2);
  } else {
    wrongAnswer(2);
  }
  //document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;
  
  //Grading question 3
  if (document.querySelector("#Jefferson").checked && document.querySelector("#Roosevelt").checked && !document.querySelector("#Jackson").checked && !document.querySelector("#Franklin").checked) {
    rightAnswer(3);
    }
  else {
    wrongAnswer(3);
  }

  //Grading question 4
  if(q4Response == "Rhode Island"){
    rightAnswer(4);
  } else {
    wrongAnswer(4);
  }
} //gradeQuiz