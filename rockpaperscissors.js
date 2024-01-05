const CHOICES = ['rock','paper','scissors']
let playerWin = true;


function getComputerChoice() {
    choiceComputer = Math.floor(Math.random() * 3)
    switch(choiceComputer) {
    case 0:
        choiceComputer = CHOICES[0];
        break;
    case 1: 
        choiceComputer = CHOICES[1];
        break;
    case 2:
        choiceComputer = CHOICES[2];
        break;
    }
    return choiceComputer;
    console.log(`computer has chosen ${choiceComputer}`)
}
function getPlayerChoice() {
    choicePlayer = prompt('Rock paper or scissors?');
    choicePlayer = choicePlayer.toLowerCase();
    while (CHOICES.indexOf(choicePlayer) == -1 ) {
        choicePlayer = prompt('Please select only rock paper or scissors')
        choicePlayer = choicePlayer.toLowerCase();
        console.log(choicePlayer);
    }
    return choicePlayer;
}
function roundRockPaperScissors(throwComputer, throwPlayer) {
    playerWin = true;
    throwComputer = getComputerChoice();
    throwPlayer = getPlayerChoice();
    console.log(`computer threw ${throwComputer} player threw ${throwPlayer}`);
    while (throwComputer === throwPlayer) {
        alert('tie!, throw again');
        throwComputer = getComputerChoice();
        throwPlayer = getPlayerChoice();
        console.log(`computer threw ${throwComputer} player threw ${throwPlayer}`);
    }
    if (throwPlayer === 'rock' && throwComputer != 'paper') {
        console.log('player wins!')
    }
    else if (throwPlayer === 'paper' && throwComputer != 'scissors') {
        console.log('player wins!')
    }
    else if (throwPlayer === 'scissors' && throwComputer != 'rock') {
        console.log('player wins!')
    }
    else { 
        playerWin = false;
        console.log('player lost! :(')
    } 
    return playerWin;
}
// TODO: create loop for a game of rockpaper scissors

function gameRockPaperScissors(playerPoints, computerPoints, winner) {
    // loop through round function with a counter until the counter reaches 3 wins or 3 losses
    // true = player win false = computer win
    playerPoints = 0;
    computerPoints = 0;
    winner = false;
    for (let iRoundsPlayed = 0; iRoundsPlayed < 5; iRoundsPlayed++) {
        if(roundRockPaperScissors()) {
            playerPoints++;
        } 
        else {
            computerPoints++;
        }
        console.log(`player has ${playerPoints} points and computer has ${computerPoints}`)
        if (playerPoints === 3) {
            winner = true;
            break;
        }
        else if (computerPoints === 3) {
            winner = false;
            break;
        }
    }
    if (winner = true) {
        console.log(`Player has won ${playerPoints}-${computerPoints}`);
        return winner;
    }
    else {
        console.log(`Computer has won ${computerPoints}-${playerPoints}`);
        return winner;
    }

}