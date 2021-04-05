// Allowed set of moves
const moves = ['Rock', 'Paper', 'Scissors'];

// 0 == Rock, 1 == Paper, 2 == Scissors
// D == Draw, L == Loss, W == Win
/* 
    RR, RP, RS
    PR, PP, PS
    SR, SP, SS
*/
const winConditions = [
    ['D','L', 'W'],
    ['W','D', 'L'],
    ['L','W', 'D']
];

// Ask player for their move
function playerSelection(allowedMoves) {
    let selectionInt;
    
    do {
        let selection = prompt('Rock, Paper, Scissors?');
        selectionInt = allowedMoves.findIndex(move => move.toLowerCase() === selection.toLowerCase());
    }
    while (selectionInt === -1)
    
    return selectionInt;
}

// Random move from computer
function computerPlay(allowedMoves) {
    return Math.floor(Math.random() * allowedMoves.length);
}

// Play a round
function playRound(playerInt, computerInt) {
    console.log(`${ moves[playerInt] } vs ${ moves[computerInt]}`); 
    return winConditions[playerInt][computerInt];    
}

// Play a game
function game(rounds = 5) {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i <= rounds; i++) {
        console.log("Round: " + i)
        
        roundResult = playRound(playerSelection(moves), computerPlay(moves));
        switch (roundResult) {
            case 'D':
                console.log("You drew that round :|");
                break;
            case 'L':
                console.log("You lost that round :(");
                computerScore++;
                break;
            case 'W':
                console.log("You won that round :)");
                playerScore++;
                break;
        }
    }
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);
    
    if(playerScore > computerScore) {
        console.log("You won the game :)")
    } 
    else if (playerScore == computerScore) {
        console.log("You drew the game :|")
    }
    else {
        console.log("You lost the game :(")
    }
}

//game(5);
