const moves = ['Rock', 'Paper', 'Scissors'];

function computerPlay(moves) {
    return moves[Math.floor(Math.random() * moves.length)];
}

console.log(computerPlay(moves));