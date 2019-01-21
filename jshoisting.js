// console.log(' hello')


// var magicalUnicorns = "awesome"; // the declaration gets hoisted to the top of the scope by itself
// console.log(magicalUnicorns); // we log it as undefined
// magicalUnicorns = "awesome"; // the assignment stays exactly where it was


// let magicalUnicorns = "this is for let example awesome!";
// console.log(magicalUnicorns); 


// var foo = "bar";
// function magic(){
//     foo = "hello world";
//     console.log(foo);
//     var foo;
// }
// magic();
// console.log(foo);


// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


// console.log(example);
// let example = "I'm the example!";    

// js hoisting examples and exercises as follows 


// console.log(hello);                                   
// var hello = 'world';                                 
//  undefined


// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

// magnet


// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// super cool

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

//  chicken
//  half chicken

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// mean in not even a function, so it wont run, food is not defined, 

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);


// genre is not defined , then the function rewind will run and o/p is rock, r&b, disco


// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// san jose,   seattle, burbank, san jose, 


// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }


// {name: Chicago, students: 65, hiring: True}


// var ninja = 'Libby';
// setTimeout( function (){ console.log(ninja); }, 5000 ); // run the function defined after 2000 milliseconds
// console.log(ninja);

// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");



// var a = 2;
// var b = function() { console.log("something"); };
// function doSomething(x) {
//   console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);


// function doSomething(possibleCallback) {
//     if (typeof(possibleCallback) === 'function'){
//       console.log('possibleCallback is a callback!');
//       possibleCallback(); //we can invoke the callback!
//     }
//     else {
//       console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//     }
//   }
//   doSomething(function myCallback(){ console.log('yes, I am a callback!') });
//   doSomething('string');
 


$(document).ready(function() {
    // console.log( "ready!" );

    // track which question we are on
    var questionCounter = 0;
    // initial time of 15 seconds for each question
    var time = 15;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
    var questions = [
      {
	    question: "Who is the main character of Uncharted?",
	    choices: ["Nathan Drake", "Aloy", "Master Chief", "Mario"],
	    correctAnswer: "Nathan Drake",
	    image: "<img src='assets/images/nathanDrake.jpg' class='img-circle shadow'>"
	  }]
	//   {
	//     question: "What is the name of the fictional English archaeologist in the game Tomb Raider?",
	//     choices: ["Cortana", "Lara Croft", "Faith", "Kitana"],
	//     correctAnswer: "Lara Croft",
	//     image: "<img src='assets/images/laraCroft.jpg' class='img-circle shadow'>"
	//   }, 
	//   {
	//     question: "Black Ops is the subtitle of which game?",
	//     choices: ["Call of Duty", "Battlefield", "Operation:", "Sims 4"],
	//     correctAnswer: "Call of Duty",
	//     image: "<img src='assets/images/blackOps.jpg' class='img-circle shadow'>"
	//   }, 
	//   {
	//     question: "Pikachu is one of the species of creatures in which series of games?",
	//     choices: ["Digimon", "Space Invaders", "Rick & Morty", "Pokemon"],
	//     correctAnswer: "Pokemon",
	//     image: "<img src='assets/images/pikachu.jpg' class='img-circle shadow'>"
	//   }, 
	//   {
	//     question: "What color is Pac-Man?",
	//     choices: ["Pink", "Blue", "Burnt Orange", "Yellow"],
	//     correctAnswer: "Yellow",
	//     image: "<img src='assets/images/pacMan.png' class='img-circle shadow'>"
	//   },
	//   {
	//     question: "Which character from CD Projekt Red's popular series, The Witcher, is known as The Lady of Space and Time?",
	//     choices: ["Yennefer of Vengerberg", "Ciri", "Triss Merigold", "Keria Metz"],
	//     correctAnswer: "Ciri",
	//     image: "<img src='assets/images/ciri.jpg' class='img-circle shadow'>"
	//   },
	//   {
	//     question: "Spyro is a:",
	//     choices: ["Fighter Pilot", "Dragon", "Hedgehog", "Race Car"],
	//     correctAnswer: "Dragon",
	//     image: "<img src='assets/images/spyro.jpg' class='img-circle shadow'>"
	//   },
	//   {
	//     question: "I'm _____ and this is my favorite store on the Citadel:",
	//     choices: ["Master Chief", "Darth Revan", "Thor", "Commander Shepard"],
	//     correctAnswer: "Commander Shepard",
	//     image: "<img src='assets/images/shep.jpg' class='img-circle shadow'>"
	//   },
	//   {
	//     question: "Who is the protagonist of Nintendo's franchise often set in the Kingdom of Hyrule?",
	//     choices: ["Zelda", "Mario", "Donkey Kong", "Link"],
	//     correctAnswer: "Link",
	//     image: "<img src='assets/images/link.png' class='img-circle shadow'>"
	//   },
	//   {
	//     question: "Which game is most likely to never come out?",
	//     choices: ["Half Life 3", "Half Life 3", "Half Life 3", "Half Life 3"],
	//     correctAnswer: "Half Life 3",
	//     image: "<img src='assets/images/halfLife.jpg' class='img-circle shadow'>"
	//   },
	//   {
	//     question: "Joel and Ellie are two companions in what video game?",
	//     choices: ["Dragon Quest VIII", "Final Fantsay XIII", "The Last of Us", "Dragon Age: Origins"],
	//     correctAnswer: "The Last of Us",
	//     image: "<img src='assets/images/lastOfUs.jpg' class='img-circle shadow'>"
	//   },
	//   {
	//     question: "In which game can you find tears, vigors and robotic patriots?",
	//     choices: ["Bioshock: Infinite", "Modern Warfare", "Wolfenstein", "Civilization IV"],
	//     correctAnswer: "Bioshock: Infinite",
	//     image: "<img src='assets/images/bioshock.jpg' class='img-circle shadow'>"
	//   },
	//   {
	//     question: "Who developed the Mass Effect series? ",
	//     choices: ["Bethesda", "Bioware", "Ubisoft", "2K Games"],
	//     correctAnswer: "Bioware",
	//     image: "<img src='assets/images/bioware.jpg' class='img-circle shadow'>"
	//   },
	//   {
	//     question: "Inhabitants of which fictional town find themselves under the influence of the doctrines of The Order?",
	//     choices: ["Raccoon City", "Silent Hill", "Bright Falls", "Rapture"],
	//     correctAnswer: "Silent Hill",
	//     image: "<img src='assets/images/silentHill.jpg' class='img-circle shadow'>"
	//   },
	//   {
	//     question: "Which of these characters can't jump in any of their games?",
	//     choices: ["Link", "Agent 47", "Pac Man", "James Bond"],
	//     correctAnswer: "Agent 47",
	//     image: "<img src='assets/images/hitman.jpg' class='img-circle shadow'>"
	//   }];
	  

	// create question contents according to question count
	function questionContent() {
		// a for loop would be cool here...
    	$("#gameScreen").append("<p><strong>" + 
    		questions[questionCounter].question + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	// user guessed correctly
	function userWin() {
		$("#gameScreen").html("<p>You got it right!</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user guessed incorrectly
	function userLoss() {
		$("#gameScreen").html("<p>Nope, that's not it!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user ran out of time
	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[questionCounter].image);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	// screen that shows final score and nice message :)
	function resultsScreen() {
		if (correctGuesses === questions.length) {
			var endMessage = "Perfection! Might want to go outside more tho";
			var bottomText = "#nerdalert!";
		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "Good work! But do better you can...";
			var bottomText = "all your base are belong to us";
		}
		else {
			var endMessage = "You seem to have taken an arrow to the knee";
			var bottomText = "#scrub";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 15 seconds
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 15;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	// console.log(questionCounter);
	// console.log(questions[questionCounter].correctAnswer);
	}

	// reset score and counter parameters on restart
	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
    	// $("#gameScreen").append("<div id='question'>");
    	// var nextQuestion = questionContent(questionCounter);
    	// $("#gameScreen").append(nextQuestion);

		// $("#gameScreen").append("<p>" + questions[questionCounter].question + "</p><p>" + questions[questionCounter].choices[0] + "</p><p>" + questions[questionCounter].choices[1] + "</p><p>" + questions[questionCounter].choices[2] + "</p><p>" + questions[questionCounter].choices[3] + "</p>");
		// questionCounter++;
		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    $("#start").click(nextQuestion);

    // click function to trigger right or wrong screen
	$("#gameScreen").on("click", ".choices", (function() {
		// alert("clicked!");
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
});