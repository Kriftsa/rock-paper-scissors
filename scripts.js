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

    let scorePlayer = 0
    let scoreComputer = 0

    let playerSelectionLower = playerSelection.toLowerCase()
    let computerSelectionLower = computerSelection.toLowerCase()

    if ((playerSelectionLower == "rock" && computerSelectionLower == "scissors") ||
        (playerSelectionLower == "scissors" && computerSelectionLower == "paper") ||
        (playerSelectionLower == "paper" && computerSelectionLower == "rock")) {
        console.log(`You won! Your ${playerSelectionLower} beats the computer's ${computerSelectionLower}.`)
        scorePlayer = 1
    } else if (playerSelectionLower == computerSelectionLower) {
        console.log(`It's a draw! You both selected ${playerSelectionLower}.`)
    } else {
        console.log(`Oh no, you lost! Your ${playerSelectionLower} lost to the computer's ${computerSelectionLower}.`)
        scoreComputer = 1
    }

    if (scorePlayer > scoreComputer) {
        return 1
    } else if (scorePlayer < scoreComputer) {
        return -1
    } else {
        return 0
    }

}

function game(numberRounds) {
    
    let winsPlayer = 0
    let winsComputer = 0

    for (let i = 1; i <= numberRounds; i++) {
        
        switch (playRound(prompt("Choose your selection"), getComputerChoice())) {
            case 1:
                
                winsPlayer += 1;
                console.log(winsPlayer)
                break;

            case -1:
            
                winsComputer += 1;
                console.log(winsComputer)
                break;

            default:
                break;
        }
    }

    if (winsPlayer > winsComputer) {
        return `Congratulations! You won ${winsPlayer} times while the computer won ${winsComputer} times!`
    } else if (winsPlayer < winsComputer) {
        return `Unlucky! You won ${winsPlayer} times while the computer won ${winsComputer} times!`
    } else {
        return `Wow! It was a draw! You both won ${winsPlayer} times!`
    }

}

    console.log(game(5))