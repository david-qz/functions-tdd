
export function add(x, y) {
    return x + y;
}

export function sub(x, y) {
    return x - y;
}

export function minutesToSeconds(minutes) {
    return minutes * 60;
}

export function triangleArea(base, height) {
    return (base * height) / 2;
}

export function sumThreshold(x, y) {
    return x + y <= 100 ? true : false;
}

export function parity(n) {
    return n % 2 === 0 ? 'even' : 'odd';
}

const winCondition = {
    player1: 'player 1',
    player2: 'player 2',
    draw: 'draw',
};
// For nine cases, I think a truth table is a bit easier to audit than if/else chaining.
// First column is player1's throw, second column is player2's throw.
const rockPaperScissorsLookup = {
    'rock': {
        'rock': winCondition.draw,
        'paper': winCondition.player2,
        'scissors': winCondition.player1,
    },
    'paper': {
        'rock': winCondition.player1,
        'paper': winCondition.draw,
        'scissors': winCondition.player2,
    },
    'scissors': {
        'rock': winCondition.player2,
        'paper': winCondition.player1,
        'scissors': winCondition.draw,
    },
};
export function rockPaperScissors(player1Throw, player2Throw) {
    return rockPaperScissorsLookup[player1Throw][player2Throw];
}