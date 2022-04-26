/* Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)

Math.random() used with Math.floor() can be used to return random integers. 

Return a random integer from 0 to 9 ->

Math.floor(Math.random() * 10);

*/

function computerPlay() {
    let myArray = ["Rock","Paper","Scissors"];
    return myArray[Math.floor(Math.random()*myArray.length)];
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You Win! Rock beats Paper";
    } else if(playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! Scissors beats Paper";
    } else if(playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! Rock beats Scissors";
    } else if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! Scissors beats Paper";
    } else if(playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        return "Go Again!";
    } else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You win! Paper beats Rock";
    } else if(playerSelection === "PAPER" && computerSelection === "PAPER") {
        return "Go Again!";
    } else if(playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You lose! Paper beats Rock";
    } else {
        return "Go Again!";
    }
}

let playerSelection = window.prompt('Enter your choice');
let computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        let str;
        str = playRound(playerSelection,computerSelection);
        console.log(str);
        if(str === "You win! Paper beats Rock") {
            ++playerScore;
            console.log(`Player Score: ${playerScore}`);
        } else if(str === "You Win! Rock beats Paper" ) {
            ++playerScore;
            console.log(`Player Score: ${playerScore}`);
        } else if(str === "You win! Scissors beats Paper") {
            ++playerScore;
            console.log(`Player Score: ${playerScore}`);
        } else if(str == "Go Again!"){
        } else {
            ++computerScore;
            console.log(`Computer Score: ${computerScore}`);
        }
    }
    if(playerScore > computerScore) {
        console.log("Player wins!");
    } else if(computerScore > playerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}
console.log(game());

