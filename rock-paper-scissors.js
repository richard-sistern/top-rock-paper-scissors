const moves = ['Rock', 'Paper', 'Scissors'];

function computerPlay(moves) {
    return moves[Math.floor(Math.random() * moves.length)];
}

console.log(computerPlay(moves));

const playerSelection = "Rock";
const computerSelection = computerPlay(moves);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw"
    }
    else {
        return "else"
    }
}

result = playRound(playerSelection, computerSelection);
console.log(result);
//console.log(playRound(playerSelection, computerSelection));