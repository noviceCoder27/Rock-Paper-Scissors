# Rock-Paper-Scissors
Applying some fundamental javascript concepts

## HTML

Linking the javascript to the HTML file

```sh 

<script src="myscripts.js"></script>

```
## Javascript


*Computer Input ->* 

To choose a random string between "rock","paper" & "scissors" we make an array & use the Math.random along with Math.floor to get a random array index number

```sh

let myArray = ["Rock","Paper","Scissors"];
    return myArray[Math.floor(Math.random()*myArray.length)];

```

*User Input ->*

Use prompt() to get the input from the user use [window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)


*A function playRound()* is created to return a string that declares winner or loser message based on the current input of the player & the random number selected by the computer

**A function game is created ->**

A for loop is created to create a 5 round Rock Paper Scissors Game
computerSelection is called so that the computer chooses a random string for each round

The result from the function playround is stored in a string & used to determine the winner using if else conditions

```sh

console.log();

```
`Print given input to the console`