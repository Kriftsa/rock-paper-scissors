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

    if (playerSelection === null) {
        return "Cancelled";
    }

    let playerSelectionLower = playerSelection.toLowerCase()
    let computerSelectionLower = computerSelection.toLowerCase()

    const validInputs = ['rock', 'scissors', 'paper'];

    while (!validInputs.includes(playerSelectionLower)) {
        const newPlayerSelection = prompt("User input not recognised, please try again", "Rock/Paper/Scissors");

        if (newPlayerSelection === null) {
            return "Cancelled";
        }

        playerSelectionLower = newPlayerSelection.toLocaleLowerCase();
    }
    
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
        
        switch (playRound(prompt("Choose your selection (Round " + i + "/" + numberRounds + ")", "Rock/Paper/Scissors"), getComputerChoice())) {
            case 1:
                
                winsPlayer += 1;
                console.log(winsPlayer)
                break;

            case -1:
            
                winsComputer += 1;
                console.log(winsComputer)
                break;

            case "Cancelled":
                return "User cancelled game"

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

const btnRock = document.querySelector('button.rock')
const btnPaper = document.querySelector('.paper')
const btnScissors = document.querySelector('.scissors')

btnRock.addEventListener('click', () => {
    playRound(btnRock.className,getComputerChoice());
});

btnPaper.addEventListener('click', () => {
    playRound(btnPaper.className,getComputerChoice());
});

btnScissors.addEventListener('click', () => {
    playRound(btnScissors.className,getComputerChoice());
});