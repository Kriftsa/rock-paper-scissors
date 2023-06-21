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

    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {
        console.log(`You won! Your ${playerSelection} beats the computer's ${computerSelection}.`)
        scorePlayer = 1
    } else if (playerSelection == computerSelection) {
        console.log(`It's a draw! You both selected ${playerSelection}.`)
    } else {
        console.log(`Oh no, you lost! Your ${playerSelection} lost to the computer's ${computerSelection}.`)
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
        
        switch (playRound("Rock", getComputerChoice())) {
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