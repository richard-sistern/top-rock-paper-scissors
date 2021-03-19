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

function computerPlay(moves) {
    return Math.floor(Math.random() * moves.length);
}

function playRound(playerInt, computerInt) {
    let roundResult = "???"
    switch (winConditions[playerInt][computerInt]) {
        case 'D':
            return roundResult = `You drew :| ${moves[playerInt]} vs ${moves[computerInt]}`;
        case 'L':
            return roundResult = `You lost :( ${moves[playerInt]} vs ${moves[computerInt]}`;
        case 'W':
            return roundResult = `You won :) ${moves[playerInt]} vs ${moves[computerInt]}`;
            
    }
}

const playerSelection = 1; // Paper
const computerSelection = computerPlay(moves);

result = playRound(playerSelection, computerSelection);
console.log(result);
