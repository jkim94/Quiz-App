'use strict';
/* global $ */
/* global swal */
/* global location */

let counter =0;
var correctAnswer = [];
var answerChoices = [];
let questionCounter = 0;
let scoreCounter = 0;
let copyQuiz = [];
let endQuiz=false;

// Get score counter to 1 - put in logic to stop the application, 
// When you reach the end of an array - 
var quizQuestions = [
	{
		question: 'How many basketball teams are there in the NBA?',
		choices: ['32', '30', '20', '26'],
		answer: '1'
	},
	{
		question: 'Which NBA team won the most championships?',
		choices: ['New York Knicks', 'Los Angeles Lakers', 'Chicago Bulls', 'Boston Celtics'],
		answer: '3'
	},
	{
		question: 'Which player holds the all-time record for points scored throughout his NBA career?',
		choices: ['Kobe Bryant', 'Wilt Chamberlain', 'Michael Jordan', 'Kareem Abdul Jabbar'],
		answer: '3'
	},
	{
		question: 'Which team did Kobe Bryant drop 81 points against?',
		choices: ['Toronto Raptors', 'Phoenix Suns', 'San Antonio Spurs', 'Boston Celtics'],
		answer: '0'
	},
	{
		question: 'Which team did Michael Jordan retire with?',
		choices: ['Seattle Supersonics', 'Chicago Bulls', 'Washington Wizards', 'New York Knicks'],
		answer: '2'
	},
	{
		question: 'Which NBA player won the most championships?',
		choices: ['Kobe Bryant', 'Bill Russell', 'Michael Jordan', 'Kareem Abdul Jabbar'],
		answer: '1'
	},
	{
		question: 'Which player won the finals MVP his rookie season?',
		choices: ['Michael Jordan', 'Magic Johnson', 'Larry Bird', 'Wilt Chamberlain'],
		answer: '1'
	},
	{
		question: 'How many championships has Lebron James won?',
		choices: ['3', '5', '4', '2'],
		answer: '0'
	},
	{
		question: 'Who was the first player to average a triple double in a season?',
		choices: ['Oscar Robertson', 'Lebron James', 'Magic Johnson', 'Russel Westbrook'],
		answer: '0'
	},
	{
		question: 'Which one of these players is not a high school draftee?',
		choices: ['Dwight Howard', 'Kevin Garnett', 'Dwyane Wade', 'Kwame Brown'],
		answer: '2'
	},
	{
		question: 'Who is the current commissioner of the NBA?',
		choices: ['Roger Goodell', 'David Stern', 'Rob Manfred', 'Adam Silver'],
		answer: '3'
	},
	{
		question: 'Which player holds the record for most points scored in a game?',
		choices: ['Michael Jordan', 'Larry Bird', 'Wilt Chamberlain', 'Kobe Bryant'],
		answer: '2'
	},
	{
		question: 'Which one of these players is a high school draftee?',
		choices: ['Tracy Mcgrady', 'Michael Jordan', 'Carmelo Anthony', 'Shaquille O\'Neal'],
		answer: '0'
	},
	{
		question: 'Who is the one and only player to be on the NBA logo?',
		choices: ['John Havlicek', 'Jerry West', 'Oscar Robertson', 'Pete Maravich'],
		answer: '1'
	},
	{
		question: 'Which player holds the all-time record for assists throughout his NBA career?',
		choices: ['Steve Nash', 'Jason Kidd', 'Magic Johnson', 'John Stockton'],
		answer: '3'
	}
];

/*
const copyArray = function () {
 copyQuiz = quizQuestions.slice();
 return copyQuiz
}
*/

const getQuestion = function(questionCounter) {
	
	let copyQuiz = quizQuestions.slice();
	let currentQuestionObject = copyQuiz.splice(counter,1)
	let currentQuestion = currentQuestionObject[0].question
	//let currentQuestionObject = quizQuestions[0];
	//let currentQuestion = currentQuestionObject.question;
	//let currentQuestionObject = quizQuestions.splice(0,1);
	//let currentQuestion = currentQuestionObject[0];
	$('p.question').html("<p class='question'>"+ currentQuestion +"</p>");
	$('.answer-0').html(currentQuestionObject[0].choices[0]);
	$('.answer-1').html(currentQuestionObject[0].choices[1]);
	$('.answer-2').html(currentQuestionObject[0].choices[2]);
	$('.answer-3').html(currentQuestionObject[0].choices[3]);
	//let currentQuestionObject = quizQuestions.splice(0,1);//Find better way to get current question
	console.log('question counter '+questionCounter+" currentQuestionObject"+currentQuestionObject);
  console.log(currentQuestion+" current questions");
	console.log(quizQuestions.length);
}



// Answer validation - include checkAnswer() 
$('#quiz').on('click', 'input:radio[name=answerChoice]', event => {
	console.log('Radio clicker is working!');
	checkAnswer();
	});


function checkAnswer() {
	// Checks to see if the user's answer evaluates to the correct answer 
	// Should also provide the correct answer if user answers incorrectly
	let selectedChoice = ($('input:radio[name=answerChoice]:checked').val());
	console.log(selectedChoice+"selected answer");
	let correctAnswerChoice = quizQuestions[counter].answer;
	let correctAnswer = quizQuestions[counter].choices[correctAnswerChoice]
	if (selectedChoice === correctAnswerChoice) {
		swal({
					title: 'Ballin',
					text: 'That is correct. Keep ballin!!',
					imageUrl: 'https://i.ytimg.com/vi/xYiHvMuYJ44/maxresdefault.jpg',
					imageHeight: 250,
					imageWidth: 200
				})
				updateScore();
				updateQuestionCount();
			} else {
					swal({
						title: 'Airballlll',
						text: 'Maybe next time... ' + 'The correct answer is ' + correctAnswer,
						imageUrl: 'http://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s900-c85.jpg',
						imageHeight: 250,
						imageWidth: 200
					})
				updateQuestionCount();
			}
			counter++;
			nextQuestion();
		}

function clearRadioButtons() {
	$('#quiz').find('.js-choice').prop('checked', false);	
}

function updateQuestionCount() {
	// User should be able to see which question they are on
	$('.js-question-count').text(questionCounter);
	
}

function updateScore() {
	// User should be able to see their score as they progress
	$('.js-score-count').text(scoreCounter);
	scoreCounter++;
	$('.js-score-count').text(scoreCounter);
}

// This function should hide the questions when the page is first loaded
function hideQuestions() {
	$('.hide-header').hide();
}

// This function should show the questions afte the user clicks start to begin the quiz
function showQuestions() {
	$('.landing').hide();
	$('.hide-header').show();
}


function finalPage() {
	// Users should be able to see their final scores - the questions they got wrong/right
	if(questionCounter===15){
		endQuiz= true;
	}
	console.log(endQuiz+" Has the quiz ended?");
	
	if (endQuiz===true) {
	nextQuestion();
		swal({
		  title: 'Results',
		  text: "You scored a " + scoreCounter + " out of 10!",
		  type: 'info',
		  confirmButtonColor: '33BBFF',
		  confirmButtonText: 'Want to try again?'
		}).then(function () {
		  restartQuiz();
		})
	}
}

function restartQuiz() {
	location.reload();
}


// event listener to start the quiz - listens for a click
function startQuiz() {
	// user presses the start button to begin quiz
	$('header').find('.startQuiz').on('click', event => {
		console.log('Quiz started');
		updateQuestionCount();
		showQuestions();
	});
}

function nextQuestion(){
	questionCounter++;
	updateQuestionCount();
	console.log(counter+" counter"+ " questionCounter"+ questionCounter);
	getQuestion(questionCounter);
	clearRadioButtons();
	finalPage();
}



function main(){
	console.log('Ready2');
	getQuestion(questionCounter);
	startQuiz();
	console.log("Working");
	nextQuestion();
	console.log("questionCounter "+ questionCounter);
}


(function() {
	console.log('Ready!!');
	main();
	hideQuestions();
})();
