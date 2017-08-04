'use strict';

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
		choices: ['Mcihael Jordan', 'Magic Johnson', 'Larry Bird', 'Wilt Chamberlain'],
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
		choices: ['Dwight Howard', 'Kevin Garnett', 'Dwyane Wade', 'Kwame Brown']
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

// Global variable (GV) to copy the original into to work from
var userQuestions = [];
// GV to hold the current question object
var questionObject = {};
// GV to hold the question property/vaue
var questionText = '';
// GV to hold the correct answer
var correctAnswer = [];
// GV to hold the answer choices for the current question
var answerChoices = [];
// GV to hold the answer choices indexed from 0
var answerChoicesIndex = [];
// GV to hold the question count
var questionCounter = 0;
// GV to hold the score count
var scoreCounter = 0;
// var userAnswer = []; 


// This function will copy the array of questions into a new array
var copyArray = function() {
	var getOrigQuestions = quizQuestions.slice();
	return userQuestions = getOrigArray;
}; 

// This function will pull the 1st object from userQuestions
var getQuestionObject= function() {
	var retrieveObject = userQuestions.splice(0, 1);
	return questionObject = retrieveObject[0];
}

// This function will access the question object and return the question text
var getQuestionText = function() {
	var retrieveObject = questionObject.question;
	return questionText = retrieveObject;
}

// Get the correct answer and set it as correctAnswer
var getCorrectAnswer = function() {
	var retrieveObject = questionObject.correct;
	return correctAnswer = retrieveObject; 
}

// This function will provide users the 4 possible answer choices 
var getAnswerChoices = function() {
	var retrieveObject = questionObject.choices;
	return answerChoices = retrieveObject;
}


// This function will index the answer choices from 0
var getAnswerChoicesIndex = function() {
	answerChoicesIndex = [];
	var retrieveObject = questionObject.choices
	return retrieveObject.map(function(item, index) {
		answerChoicesIndex.push(index);
		return answerChoicesIndex;
	});

}

// This function will generate a list of questions
function questionGenerator() {
	// picks a question from the array, quizQuestions
	// Should be in random - Math.floor(Math.random())?
}

}

// This function will add the values of answerChoices to the radio buttons 


function checkAnswer() {
	// Checks to see if the user's answer evaluates to the correct answer 
	// Should also provide the correct answer if user answers incorrectly
	var selectedChoice = $('.js-choice:checked').val();
	var correctAnswerChoice = answerChoices[correctAnswer];
	if (selectedChoice === correctAnswerChoice) {
		swal({
			title: 'Posterized',
			text: 'That is correct. Keep ballin!!',
			imageUrl: 'https://i.ytimg.com/vi/xYiHvMuYJ44/maxresdefault.jpg',
			imageHeight: 250,
			imageWidth: 200
		})
		updateScore();
		nextQuestionButton();
		getQuestionObject();
		getQuestionText();
		getCorrectAnswer();
		getAnswerChoices();
		getAnswerChoicesIndex();
		updateQuestionCount();
	} else (
			swal({
				title: 'Airballlll',
				text: 'Maybe next time... ' + 'The correct answer is ' + correctAnswerChoice,
				imageUrl: 'http://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s900-c85.jpg',
				imageHeight: 250,
				imageWidth: 200
			})
		nextQuestionButton();
		getQuestionObject();
		getQuestionText();
		getCorrectAnswer();
		getAnswerChoices();
		getAnswerChoicesIndex();
		updateQuestionCount();
	)
}


function nextQuestionButton() {
	// Once the user answer question, the next question button should be functional
}

// This function makes sure users are not allowed to skip questions until they submit an answer
function disableNextQuestion() {
}

function clearRadioValues() {
// function to clear the input values for the next question
}

function updateQuestionCount() {
	// User should be able to see which question they are on
	$('.js-question-count').text(questionCounter);
	questionCounter++
	$(.'js-question-count').text(questionCounter);
}

function updateScore() {
	// User should be able to see their score as they progress
	$('.js-score-count').text(scoreCounter);
	scoreCounter++;
	$('.js-score-count').text(scoreCounter);
}


function disableElements() {
// function to disable elements at the start page 
}

function showQuestions() {
	// make questions visible after the start page 
}

function finalPage() {
	// Users should be able to see their final scores - the questions they got wrong/right
}


// event listener to start the quiz - listens for a click
function startQuiz() {
	// user presses the start button to begin quiz
}

function restartQuiz() {
	// After completing the quiz, user should have the option to restart the quiz 
}


