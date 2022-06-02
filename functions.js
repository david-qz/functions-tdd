
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

export function fullName(first, last, middle) {
    const sequence = middle ? [first, middle, last] : [first, last];
    return sequence.join(' ');
}

export function constructPet(name, type, age, food, toys) {
    return {
        name: name,
        type: type,
        age: age,
        food: food,
        toys: toys,
    };
}

// What the prompt is asking for.
export function sumLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// A closed form for this particular sum.
export function sumClosed(n) {
    return n * (n + 1) / 2;
}

export function arrayWrap(a, b, c) {
    return [a, b, c];
}

export function countCats(list) {
    let count = 0;
    for (const animal of list) {
        if (animal === 'cat') count++;
    }
    return count;
}