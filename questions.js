//array of JavaScript fundamental questions x 5
//change "question" to "prompt"
var questions = [
    {
        prompt: "What is the correct place to insert a JavaScript?";
        choices: ["The <head> section ", "The <body> section ", "Both the <body> and <head> section are correct"];
        answer: "Both the <head> and <body> section are correct";
    }
]

var questions = [
    {
        prompt: "The external JavaScript file must contain the <script> tag?";
        choices: ["True", "False"];
        answer: "False";
    }
]

var questions = [
    {
        prompt: "How does a FOR loop start?";
        choices: ["for (i <= 5; i++)", "for (i = 1 to 5)", "for(i=0; i <=5)", "for (i = 0; i <=5)" , "for (i = 0; i < = 5)"];
        answer: "for (i = 0; < 5; i++)";
    }
]

var questions = [
    {
        prompt: "How do you find the number with the highest value of x and y?";
        choices: ["Math.ceil(x,y)" , "ceil(x,y)" , "top(x,y)", "Math.max(x,y)"];
        answer: "Math.max(x,y)";
    }
]

var questions = [
    {
        prompt: "How can you detect the client's brower name?";
        choices: ["client.navName", "brower.name", "navigator.appName"];
        answer: "navigator.appName";
    }
];


var score = 0;
var currentQuestion = -1
var timeExtra = 0;
var timer;


//this function will start countdown timer. game will end once at 0 seconds
function begin() {
    timeRemaining = 60;
    document.getElementById(timeRemaining).innerHTML = timeRemaining;

    timer = setInterval(function() {
        timeRemaining--;
        document.getElementById("timeRemaining").innerHTML = timeRemaining;
            if (timeRemaining <=0) {
                clearInterval(timer);
                endGame();
            }
    }, 1000;
    next()
}

//function that will stop timer and end game





//function to deduct 5 seconds from timer

//add boolean




