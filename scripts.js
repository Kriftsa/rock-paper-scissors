// Player enters selection
// Computer generates random selection
// Determine who winner would be

function getComputerChoice() {
    
    let compNumber = Math.floor(Math.random() * 3) +1 

    switch (compNumber) {
        case 1:
            return "Rock"
        case 2:
            return "Scissors"
        case 3:
            return "Paper"
    }

    return "Something went wrong"
}

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {
        return `You won! Your ${playerSelection} beats the computer's ${computerSelection}.`
    } else if (playerSelection == computerSelection) {
        return `It's a draw! You both selected ${playerSelection}.`
    } else {
        return `Oh no, you lost! Your ${playerSelection} lost to the computer's ${computerSelection}.`
    }
    }

console.log(playRound("Rock", getComputerChoice()))