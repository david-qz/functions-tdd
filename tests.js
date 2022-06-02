// IMPORT MODULES under test here:
import {
    add,
    sub,
    minutesToSeconds,
    triangleArea,
    sumThreshold,
    parity,
    rockPaperScissors,
    fullName,
    constructPet,
    sumLoop,
    sumClosed,
    arrayWrap,
    countCats,
    countType,
} from './functions.js';

const test = QUnit.test;

/* 
    Write a function that takes in two numbers
    and returns their sum (add)

    2, 5 --> 7

    Uses: Math operator
*/

test('add(): two integers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 2;
    const y = 5;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

/* 
    Write a function that takes in two numbers
    and returns their difference (subtract)

    12, 8 --> 4

    Uses: Math operator
*/

test('sub(): two integers', expect => {
    const x = 12;
    const y = 8;
    const expected = 4;

    const actual = sub(x, y);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes in number of minutes
    and returns the number of seconds

    10 --> 600

    Uses: Math operator(s)
*/

test('minutesToSeconds(): integral minutes', expect => {
    const minutes = 10;
    const expected = 600;

    const actual = minutesToSeconds(minutes);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes in the base and height
    of a triangle and returns its area (google it)

    5, 10 --> 25

    Uses: Math operator(s)
*/

test('triangleArea(): integral base and height', expect => {
    const base = 5;
    const height = 10;
    const expected = 25;

    const actual = triangleArea(base, height);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes in two 2 numbers
    and returns true if their sum is less than 100 or 
    false if it is greater than 100
    (feel free to use your add function from this function!)

    25, 13 --> true
    88, 60 --> false

    Uses: Comparison operator(s), if/else control flow
*/

test('sumThreshold(): under threshold', expect => {
    const x = 25;
    const y = 13;
    const expected = true;

    const actual = sumThreshold(x, y);

    expect.equal(actual, expected);
});

test('sumThreshold(): above threshold', expect => {
    const x = 88;
    const y = 60;
    const expected = false;

    const actual = sumThreshold(x, y);

    expect.equal(actual, expected);
});

// The prompt doesn't cover this case, but we need it to be exhaustive. So, I'm going
// to decide that the threshold should be inclusive.
test('sumThreshold(): equals threshold', expect => {
    const x = 45;
    const y = 55;
    const expected = true;

    const actual = sumThreshold(x, y);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes a number and
    and returns 'even' if number is even, otherwise 'odd'.

    3 --> 'odd'
    6 --> 'even'

    Uses: modulo operator (remainder), comparison operator, if/else control flow
*/

test('parity(): odd integer', expect => {
    expect.equal(parity(3), 'odd');
});

test('parity(): even integer', expect => {
    expect.equal(parity(6), 'even');
});

/* 
    Write a function that takes two rock-paper-scissors throws
    and returns 'player 1' if first throw wins, 
    'player 2' if second throw wins, otherwise 'draw'.

    'rock', 'scissors' --> 'player 1'
    'rock', 'paper' --> 'player 2'
    'rock', 'rock' --> 'draw'
    
    Test all possible cases, but you can combine into tests like
    'player 1 wins', 'player 2 wins', 'players draw'

    Uses: comparison operator, if/else control flow
*/

test('rockPaperScissors(): player 1 wins', expect => {
    expect.equal(rockPaperScissors('rock', 'scissors'), 'player 1');
});

test('rockPaperScissors(): player 2 wins', expect => {
    expect.equal(rockPaperScissors('rock', 'paper'), 'player 2');
});

test('rockPaperScissors(): draw', expect => {
    expect.equal(rockPaperScissors('rock', 'rock'), 'draw');
});

/* 
    Write a function that takes in a first, last, and a third optional
    middle name parameter and returns a correctly formatted name

    'Ruth', 'Ginsburg' --> 'Ruth Ginsburg'
    'Ruth', 'Ginsburg', 'Bader' --> 'Ruth Bader Ginsburg'

    Uses: let variable with reassignment, string concatenation, 
    existence comparison operator, if control flow
*/

test('fullName(): first and last', expect => {
    expect.equal(fullName('Ruth', 'Ginsburg'), 'Ruth Ginsburg');
});

test('fullName(): first, last, and middle', expect => {
    expect.equal(fullName('Ruth', 'Ginsburg', 'Bader'), 'Ruth Bader Ginsburg');
});

/* 
    Write a function that takes a name, type, age, food, and a toys array
    and returns an object like:

    {
        name: 'felix',
        type: 'cat',
        age: 6,
        food: 'tuna',
        toys: ['feather chaser', 'laser pointer', 'ball of yarn']
    }

    Uses: object literal syntax, deepEqual assertion
*/

test('constructPet(): all parameters', expect => {
    const toys = ['feather chaser', 'laser pointer', 'ball of yarn'];

    expect.deepEqual(
        constructPet('felix', 'cat', 6, 'tuna', toys),
        {
            name: 'felix',
            type: 'cat',
            age: 6,
            food: 'tuna',
            toys: ['feather chaser', 'laser pointer', 'ball of yarn']
        }
    );
});

/*
    Write a function that takes a number
    and returns the total of all counting numbers from 1 to the supplied number

    4 --> 10 (1 + 2 + 3 + 4)

    Uses: let variable with reassignment, math operator, for...i loop
*/

test('sumLoop(): integer parameter', expect => {
    expect.equal(sumLoop(4), 10);
});

// Test my closed form too
test('sumClosed(): integer parameter', expect => {
    expect.equal(sumClosed(4), 10);
    // For Gauss
    expect.equal(sumClosed(100), 5050);
});

/*
    Write a function that takes name of three pets
    and returns an array of those names

    'felix', 'fido', 'alex' --> ['felix', 'fido', 'alex']

    Uses: array literal syntax, deepEqual assertion 
*/

test('arrayWrap(): three parameters', expect => {
    expect.deepEqual(arrayWrap('felix', 'fido', 'alex'), ['felix', 'fido', 'alex']);
});

/*
    Write a function that takes an array of pet types ('cat', 'dog', 'bird')
    and returns the count of cats

    ['cat', 'dog', 'bird', 'cat', 'cat'] --> 3

    Uses: let variable with reassignment, math operator, for...of loop
*/

test('countCats(): small array', expect => {
    expect.equal(countCats(['cat', 'dog', 'bird', 'cat', 'cat']), 3);
});

/*
    BONUS: Write a function that takes an array of pet types ('cat', 'dog', 'bird')
    and the pet type to count and returns the count of that type

    ['cat', 'dog', 'bird', 'cat', 'cat'], 'cat' --> 3
    ['cat', 'dog', 'bird', 'cat', 'cat'], 'bird' --> 1

    Uses: let variable with reassignment, math operator, for...of loop, if control flow
*/

test('countType(): small array', expect => {
    expect.equal(countType(['cat', 'dog', 'bird', 'cat', 'cat'], 'cat'), 3);
});

test('countType(): small array', expect => {
    expect.equal(countType(['cat', 'dog', 'bird', 'cat', 'cat'], 'bird'), 1);
});

/*
    Write a function takes in a month as input (represented as a 
    number between 1 and 12) and returns the number of days in that month. 
    For now, assume there are always 28 days in Feb.
    
    1 --> 31
    2 --> 28
    4 --> 30

    Uses: if/else control flow

    Bonus 1: Check the value of the number passed into the function and
    print a message to the user if the value is not between 1 and 12
    
    Bonus 2: Update the function to accept an optional parameter year
    that checks if the year is a leap year, and returns the correct
    number of days for Feb. The default value for the year should be
    the current year
*/
