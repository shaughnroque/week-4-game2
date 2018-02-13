// User is given a random number at the start of the game
// There are 4 crystals that have random numbers everytime you start a new game
// Each crystal should have a number ranging from 1-12 
// Every time you click on a crystal your User score will go up *add up*
// Your goal is to match your User score to the Total Score that you are given from the start
// If you go over the  Total Score that you received from the start you lose and the game restarts and gives you a Total Score
// Everytime you lose the crystals values change to form a new game and new number to beat
// Track your Wins and Loses

 $(document).ready(function() {
//Global Variables
 	var userNumber = 0;
 	var randomNumber =0;
 	var winner = 0;
 	var loser =  0;
 	
 	
 	var newGame = function () {
 		$(".cryscont").empty();
// Gives the Total Score at the beginning of the Game!
	randomNumber = [Math.floor(Math.random()*(120-19+1)+19)];
	
	$(".cryscont").text("Total Score : ").append(randomNumber);

	$("h1").addClass("score");
	
	
// Loop that gives me 4 divs for each crystal and it also gives me a random value for each div created 

	for(var i=0; i < 4 ; i++){

		var crystalImages = [
			"https://vignette.wikia.nocookie.net/starwars/images/5/5f/LightsaberCrystal-SWE.png/revision/latest?cb=20160911062335",
			"https://images-na.ssl-images-amazon.com/images/I/71GADww3MwL._SL1200_.jpg",
			"https://data.whicdn.com/images/132848716/original.png",
			"https://i.pinimg.com/originals/d6/64/f7/d664f731d14c77d328ace04e3231b549.png",
		];

		var crystalValues = Math.floor(Math.random()*11)+1;
		
		$(crystalValues).empty();
		console.log(crystalValues);

		var crystalDiv = $("<div>");
		//Made multiple attributes to the class .theCrystals
		crystalDiv.attr({
			"class": "theCrystals",
			"randomcrystals": crystalValues	

	});

		crystalDiv.css({
			"background-image":"url(" + crystalImages[i] + ")",
			"background-size":"cover"



		});


		// Makes crystals appear	
		$(".cryscont").append(crystalDiv);
		

	};


	$("#YourScore").html("Your Score: " + userNumber);

	$("#Loser").html("Loses: " + loser);

	$("#Winner").html("Wins : " + winner);
};



newGame();
// Everytime I click on the crystal div it should give a value
//* Changed the onclick function because the DOM does not restart when you win or lose because .theCrystals only does its job once. 	
	$(document).on("click",".theCrystals", function(click){

	$("#YourScore").html("Your Score: " + userNumber);
		
		number = parseInt($(this).attr("randomcrystals"));
		
		userNumber += number;
// These are the conditions basically saying that if the User Number is greater than the total score you lose and if you match your user number you win.
		 if(userNumber > randomNumber){
			loser--;

		 	$("#Loser").html("Loses: " + loser);


		 	userNumber = 0;

		 	newGame();

		}
		else if(userNumber == randomNumber){
			
			winner++;

			$("#Winner").html("Wins : " + winner);
			
			userNumber = 0;

			newGame();
			
			
		}


	});

	




});
