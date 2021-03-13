const moves = ['Rock', 'Paper', 'Scissors'];

const allowedMoves = {
    Rock:0,
    Paper:1,
    Scissors:2
};
console.log(allowedMoves);

// 0 == Rock, 1 == Paper, 2 == Scissors
// D == Draw, L == Loss, W == Win
const winConditions = [
    ['D','L', 'W'],
    ['W','D', 'L'],
    ['L','W', 'D']
];
console.log(winConditions);
// Paper Vs Rock
console.log(winConditions[1][0]); // Win
// Rock Vs Scissors
console.log(winConditions[0][2]); // Win
// Rock Vs Paper
console.log(winConditions[0][1]); // Loss

function computerPlay(moves) {
    return moves[Math.floor(Math.random() * moves.length)];
}

console.log(computerPlay(moves));

const playerSelection = "Rock";
const computerSelection = computerPlay(moves);

function playRound(playerSelection, computerSelection) {

    
}

result = playRound(playerSelection, computerSelection);
console.log(result);
//console.log(playRound(playerSelection, computerSelection));