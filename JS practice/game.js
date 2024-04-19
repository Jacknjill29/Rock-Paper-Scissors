let computerScore = 0;
let playerScore = 0;
let playerWin = false;
let computerWin = false;

function getComputerChoice(choice1, choice2, choice3){
	let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1)
 if (randomNumber == 1){
 return 'rock';
}
else if (randomNumber == 2) {
return 'paper';
}
else if (randomNumber == 3) {
return 'scissors';
}
}

function playRound(playerSelection, computerSelection){
if (playerSelection == "rock" && computerSelection == "paper"){
	computerWin = true	
	return "Computer wins the round!, Paper beats rock! ";
}
if (playerSelection == "paper" && computerSelection == "rock"){
	playerWin = true
	return "PLayer wins the round, paper beats rock!";
}
else if (playerSelection == "scissors" && computerSelection == "rock"){
	computerWin = true
	return "Computer wins the round!, Rock beats scissors";
}
else if (playerSelection == "rock" && computerSelection == "scissors"){
	playerWin = true
	return "Player wins the round!, Rock beats scissors";
}
else if (playerSelection == "paper" && computerSelection == "scissors"){
	computerWin = true
	return "Computer wins the round!, scissors beats paper";
}
else if (playerSelection == "scissors" && computerSelection == "paper"){
	playerWin = true
	return "Player wins the round!, Scissors beats paper";
}
else if (playerSelection === computerSelection){
	return "Its a tie!!"
}
}
function playGame() {
while (playerScore < 5 && computerScore < 5){
	const playerSelection = prompt("What do you pick this round?: (Rock, Paper, Scissors)").toLowerCase();
    const computerSelection = getComputerChoice();
	const roundResult = playRound(playerSelection, computerSelection);
	console.log(roundResult)
	if (playerWin == true) {
		playerScore++;
		console.log("You won this round");
	}
	else if (computerWin == true){
		computerScore++;
		console.log("You lost this round");
	}
	playerWin = false;
	computerWin = false;
}

if (playerScore == 5){
	console.log("You beat a Computer");
}
else {
	console.log("You lost to a Computer haha");
}
}

playGame();