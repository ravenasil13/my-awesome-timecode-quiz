//array of JavaScript fundamental questions x 5
//change "question" to "prompt"
var questions = [
    {
        prompt: ("What is the correct place to insert a JavaScript?")
        choices: ["The <head> section ", "The <body> section ", "Both the <body> and <head> section are correct"];
        answer: "Both the <head> and <body> section are correct";
    }
]

var questions = [
    {
        prompt: ("The external JavaScript file must contain the <script> tag?");
        choices: ["True", "False"];
        answer: "False";
    }
]

var questions = [
    {
        prompt: ("How does a FOR loop start?");
        choices: ["for (i <= 5; i++)", "for (i = 1 to 5)", "for(i=0; i <=5)", "for (i = 0; i <=5)" , "for (i = 0; i < = 5)"];
        answer: "for (i = 0; < 5; i++)";
    }
]

var questions = [
    {
        prompt: ("How do you find the number with the highest value of x and y?");
        choices: ["Math.ceil(x,y)" , "ceil(x,y)" , "top(x,y)", "Math.max(x,y)"];
        answer: "Math.max(x,y)";
    }
]

var questions = [
    {
        prompt: ("How can you detect the client's brower name?");
        choices: ["client.navName", "brower.name", "navigator.appName"];
        answer: "navigator.appName";
    }
];


var score = 0;
var currentQuestion = -1
var timeRemaining = 0;
var timer;


var beginQuiz = document.getElementById("begin");
var question = document.getElementById("quiz");
var submission = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timer");

function proceedToNextQuestion(clickedByUser) {
    var correctOption = questions[currentQuestionIndex].answer;

if (clickedByUser === correctOption) {
    console.log("Correct!");
    score++;
}
else {
    console.log("Wrong");
    score--;
}
currentQuestionIndex++;
proceedToNextQuestion(currentQuestionIndex);

}


//function and add event listeners to access answer choices

function answerOption() {
var one = document.getElementById("answer1");
var two = document.getElementById("answer2");
var three = document.getElementById("answer3");
var four = document.getElementById("answer4");
var five = document.getElementById("answer5");

    one.addEventListener("click", function () {proceedToNextQuestion(a.innerText); });
    two.addEventListener("click", function () {proceedToNextQuestion(a.innerText); });
    three.addEventListener("click", function () {proceedToNextQuestion(a.innerText); });
    four.addEventListener("click", function () {proceedToNextQuestion(a.innerText); });
    five.addEventListener("click", function () {proceedToNextQuestion(a.innerText); });

}


beginQuiz.addEventListener("click", function () {
    proceedToNextQuestion(currentQuestionIndex)
});

document.getElementById("question").innerText = title;
document.getElementById("answer1").innerText = option1;
document.getElementById("answer2").innerText = option2;
document.getElementById("answer3").innerText = option3;
document.getElementById("answer4").innerText = option4;


var currentQuestion;

var option1 = question.option[0];
var answerEl1 = document.getElementById("answer1");
answerEl1.innerText = option2;

var option2 = question.option[1];
var answerEl2 = document.getElementById("answer2");
answerEl2.innerText = option1;

var option3 = question.option[2];
var El3 = document.getElementById("answer3");
answerEl3.innerText = option3;

var option4 = question.option[3];
var El4 = document.getElementById("answer4");
answerEl4.innerText = option4;

}

// function to track score w/ correct answer
function scoreTracker() {
    document.getElementById("score").innerHTML = count++;
}

// function to track score w/ incorrect answer
function scoreTracker() {
    document.getElementById("score");
}



