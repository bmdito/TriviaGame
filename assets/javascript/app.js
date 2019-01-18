

var questionArray = [

"What year did the U.S. land on the Moon?",
"Where was the first shot of the American Revolutionary War fired?",
"The Louisiana Purchase was made when the US bought 827,000 sq miles of land from _________ for $ ________? ",
"The Statue of Liberty was gifted to the United States by which Country?",
"In which city can you find the original 'Liberty Bell'?",
"Who became President after J.F.K. was assassinated in 1963?",
"Who said 'Give me liberty, or give me death!'",
"In what year did the American Civil War Begin?"
 
]

var answerArray = [
    ["1954", "1958", "1969", "The moon Landing was staged"],
    ["Concord", "Saratoga", "New York", "Lexington"],
    ["Russia, 10 million", "Spain, 23 million", "France, 15 million", "Sioux Nation, beads & rifles"],
    ["Italy", "Great Britain", "Spain", "France"],
    ["St. Louis", "New York", "Boston", "Philadelphia"],
    ["Richard Nixon", "Lyndon Baines Johnson", "Gerald Ford", "Your Mom"],
    ["Thomas Jefferson", "Patrick Henry", "John Adams", "John Ellington"],
    ["1861", "1873", "1776", "1883"]
]

var realAnswerArray = [
    "C ) 1969", "D ) Lexington", "C ) France, 15 million" , "D ) France", "D ) Philadelphia", "B ) Lyndon Baines Johnson", "B ) Patrick Henry", "A ) 1861"
]

// var answerGifs = [
//     https://thumbs.gfycat.com/ShyShortHuia-small.gif    //ronald reagan
// ]

var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var questionCounter = 0;
var answerCounter = 0;
var rightAnswerCounter = 0;
var timeLeft = 30;
var clockRun = false;
var selectedAnswer;

$(window).on("load", function(){
    $("#gameArea").hide();
    $("#results").hide();
    $("#showAnswer").hide();
})

// start quiz, clear jumbo

$(".btn").on("click", function(event){
    console.log("you clicked!")
    $(".jumbotron").hide();
    generateQuestion();
    startClock();

    
});

// populate question & answers

function generateQuestion() {
    $("#gameArea").show();
    $("#question").html(questionArray[questionCounter]);
    var ansA = $("#answerA").html("A ) " +answerArray[answerCounter][0]);   
    var ansB = $("#answerB").html("B ) " +answerArray[answerCounter][1]);
    var ansC = $("#answerC").html("C ) " +answerArray[answerCounter][2]);
    var ansD = $("#answerD").html("D ) " +answerArray[answerCounter][3]);
    $("#timer").show();
    $("#timer").text(timeLeft);
    console.log(questionCounter);
    questionCounter++;
}

// select your answer
$(".answers").on("click", function(){
    selectedAnswer = $(this).text();
    console.log("selected answer " +selectedAnswer);
    console.log("real answer "+realAnswerArray[rightAnswerCounter])
    answerCheck();
    
})

// check selected answer, correct or incorrect
function answerCheck () {
    
    
    if(selectedAnswer===realAnswerArray[rightAnswerCounter]) {
        
        $("#showAnswer").text("You Got It!!");
        generateWin();
        
        
    } else {
        $("#showAnswer").text("Oops!!");
        generateLoss();
        
    }
}

// actions if answer is correct; answer reveal
function generateWin() {
    timeLeft = 30;
    // $("#timer").text(timeLeft);
    $("#gameArea").hide();
    $("#showAnswer").show();
    $("#timer").hide();
    answerTemp = $("<div> The Correct Answer Was: </div>").attr("class", "temp");
    showAnswer = $("<div> "+selectedAnswer+"</div>");
    $("#showAnswer").append(answerTemp);
    $("#showAnswer").append(showAnswer);
    correctAnswers++;
     console.log("correct Answers "+correctAnswers);
    setTimeout(wait, 3000);
    clearInterval(clock);
}

// actions if answer is incorrect ; answer reveal
function generateLoss(){
    
    $("#gameArea").hide();
    $("#showAnswer").show();
    $("#timer").hide();
    answerTemp = $("<div> The Correct Answer Was: </div>").attr("class", "temp");
    showAnswer = $("<div> "+realAnswerArray[rightAnswerCounter]+"</div>");
    $("#showAnswer").append(answerTemp);
    $("#showAnswer").append(showAnswer);
    wrongAnswers++;
    timeLeft = 30;
    console.log("wrong answers "+wrongAnswers);
    setTimeout(wait, 3000);
    clearInterval(clock);

}

// runs function if you run out of time answering question
function timeOutLoss(){
    $("#showAnswer").text("You Ran out of Time!!");
    $("#gameArea").hide();
    $("#showAnswer").show();
    $("#timer").hide();
    timeLeft=30;
    answerTemp = $("<div> The Correct Answer Was: </div>").attr("class", "temp");
    showAnswer = $("<div> "+realAnswerArray[rightAnswerCounter]+"</div>");
    $("#showAnswer").append(answerTemp);
    $("#showAnswer").append(showAnswer);
    wrongAnswers++;
    console.log("wrong answers "+wrongAnswers);
    setTimeout(wait, 3000);
    clearInterval(clock);
}


// hide revealed answerArray, generate next question + move forward
function wait(){
    $("#showAnswer").hide().empty();
    if(questionCounter<8){
        stepforward();
        
    } else {
        console.log("gameover!");
        finalResults();
        
    }
}

// add to tallies, run next question
function stepforward() {
    
    answerCounter++;
    rightAnswerCounter++;
    generateQuestion();
    startClock();
    
}

// timer clock function

function startClock() {
    
    
    clock = setInterval(count, 1000);

    function count() {
    
        timeLeft--;
        $("#timer").text(timeLeft);

        if(timeLeft===0) {
            clearInterval(clock);
            timeOutLoss();
        }
    }

    
}
// Shows final results at end of game
function finalResults (){
    $("#gameArea").hide();
    $("#results").show();
    
    
    $("#correct").text("Correct Answers: "+correctAnswers);
    $("#wrong").text("Wrong Answers: " + wrongAnswers);
   $("#noAnswer").text("Unanswered: "+unanswered);
   var restartClick = $("<button>Restart Game!</button>").attr("class", "btn btn-success restart" );
   $("#res").append(restartClick);
   
   
}

// reset the game

$("#res").on("click", function(){

    
    function resetGame(){
    correctAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;
    questionCounter = 6;
    answerCounter = 0;
    rightAnswerCounter = 0;
    timeLeft = 30;
        generateQuestion();
        $("#res").empty();
        $(results).hide();
        startClock();
    }
    
    resetGame();
});
