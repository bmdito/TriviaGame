

var questionArray = [

"Which U.S. President was shot outside the Hilton Hotel in 1981?",
"Who became President after J.F.K. was assassinated in 1963?",
"Which of these are not a branch of the U.S. Government?",
"In which French city did Germany surrender in the first World War?",
"The Statue of Liberty was gifted to the United States by which Country?",
"In which city can you find the original 'Liberty Bell'?",
"What do the 13 stripes on the American Flag represent?"
    
]

var answerArray = [
    ["J.F.K", "Abraham Lincoln","Richard Nixon" , "Ronald Reagan"],
    ["Richard Nixon", "Linden Baines Johnson", "c", "d"],
    ["a", "b", "c", "d"],
    ["a", "b", "c", "d"],
    ["a", "b", "c", "d"],
    ["a", "b", "c", "d"],
    ["a", "b", "c", "d"]
]

var realAnswerArray = [
    "D ) Ronald Reagan", "B ) Lyndon Baines Johnson"
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
var selectedAnswer;



// start quiz, clear jumbo

$(".btn").on("click", function(event){
    console.log("you clicked!")
    $(".jumbotron").hide();
    generateQuestion();
    
});

// populate question & answers

function generateQuestion() {
    $("#gameArea").show();
    $("#question").html(questionArray[questionCounter]);
    var ansA = $("#answerA").html("A ) " +answerArray[answerCounter][0]);   
    var ansB = $("#answerB").html("B ) " +answerArray[answerCounter][1]);
    var ansC = $("#answerC").html("C ) " +answerArray[answerCounter][2]);
    var ansD = $("#answerD").html("D ) " +answerArray[answerCounter][3]);
    
    console.log(questionCounter);
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
        alert("You Got it!");
        generateWin();
        
        
    } else {
        alert("WRONNGGGGG!");
        generateLoss();
        
    }
}

// actions if answer is correct; answer reveal
function generateWin() {
    $("#gameArea").hide();
    $("#showAnswer").show();
    answerTemp = $("<div> The Correct Answer Was: </div>").attr("class", "temp");
    showAnswer = $("<div> "+selectedAnswer+"</div>");
    $("#showAnswer").append(answerTemp);
    $("#showAnswer").append(showAnswer);
    correctAnswers++;
    console.log("correct Answers "+correctAnswers);
    setTimeout(wait, 3000);
}

// actions if answer is incorrect ; answer reveal
function generateLoss(){
    $("#gameArea").hide();
    $("#showAnswer").show();
    answerTemp = $("<div> The Correct Answer Was: </div>").attr("class", "temp");
    showAnswer = $("<div> "+realAnswerArray[rightAnswerCounter]+"</div>");
    $("#showAnswer").append(answerTemp);
    $("#showAnswer").append(showAnswer);
    wrongAnswers++;
    console.log("wrong answers "+wrongAnswers);
    setTimeout(wait, 3000);

}


// hide revealed answerArray, generate next question + move forward
function wait(){
    $("#showAnswer").hide().empty();
    if(questionCounter<7){
        stepforward();
        
    }
}

// add to tallies, run next question
function stepforward() {
    questionCounter++;
    answerCounter++;
    rightAnswerCounter++;
    generateQuestion();
}




