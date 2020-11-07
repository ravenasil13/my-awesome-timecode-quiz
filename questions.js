//array of JavaScript fundamental questions x 5

var questions = [
    {
        question: "What is the correct place to insert a JavaScript?";
        choices: ["The <head> section ", "The <body> section ", "Both the <body> and <head> section are correct"];
        answer: "Both the <head> and <body> section are correct";
    }
]

var questions = [
    {
        question: "The external JavaScript file must contain the <script> tag?";
        choices: ["True", "False"];
        answer: "False";
    }
]

var questions = [
    {
        question: "How does a FOR loop start?";
        choices: ["for (i <= 5; i++)", "for i = 1 to 5", "for(i=0; i <=5)", "for (i = 0; i <=5") , "for (i = 0; i < = 5)"];
        answer: "for (i = 0; < 5; i++)";
    }
]

var questions = [
    {
        question: "How do you find the number with the highest value of x and y?";
        choices: ["Math.ceil(x,y)" , "ceil(x,y)" , "top(x,y)", "Math.max(x,y)"];
        answer: "Math.max(x,y)";
    }
]

var questions = [
    {
        question: "How can you detect the client's brower name?";
        choices: ["client.navName", "brower.name", "navigator.appName"];
        answer: "navigator.appName";
    }
];


var score = 0;
var currentQuestion = -1
var timeExtra = 0;
var timer;

//need function and button to start quiz
function begin(){
    timeExtra = 60;
    document.getElementById(timeExtra).innerHTML = timeExtra;
}
//timer needs to start when 'Begin' button clicked
//use onclick event for quiz to start?
//function to deduct 5 seconds from timer

//add boolean




