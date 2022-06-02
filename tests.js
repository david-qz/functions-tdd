// IMPORT MODULES under test here:
import {
    add,
} from './functions.js';

const test = QUnit.test;

/* 
    Write a function that takes in two numbers
    and returns their sum (add)

    2, 5 --> 7

    Uses: Math operator
*/

test('adds two numbers', (expect) => {
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

/* 
    Write a function that takes in number of minutes
    and returns the number of seconds

    10 --> 600

    Uses: Math operator(s)
*/

/* 
    Write a function that takes in the base and height
    of a triangle and returns its area (google it)

    5, 10 --> 25

    Uses: Math operator(s)
*/

/* 
    Write a function that takes in two 2 numbers
    and returns true if their sum is less than 100 or 
    false if it is greater than 100
    (feel free to use your add function from this function!)

    25, 13 --> true
    88, 60 --> false

    Uses: Comparison operator(s), if/else control flow
*/

/* 
    Write a function that takes a number and
    and returns 'even' if number is even, otherwise 'odd'.

    3 --> 'odd'
    6 --> 'even'

    Uses: modulo operator (remainder), comparison operator, if/else control flow
*/

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

/* 
    Write a function that takes in a first, last, and a third optional
    middle name parameter and returns a correctly formatted name

    'Ruth', 'Ginsburg' --> 'Ruth Ginsburg'
    'Ruth', 'Ginsburg', 'Bader' --> 'Ruth Bader Ginsburg'

    Uses: let variable with reassignment, string concatenation, 
    existence comparison operator, if control flow
*/

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

/*
    Write a function that takes a number
    and returns the total of all counting numbers from 1 to the supplied number

    4 --> 10 (1 + 2 + 3 + 4)

    Uses: let variable with reassignment, math operator, for...i loop
*/

/*
    Write a function that takes name of three pets
    and returns an array of those names

    'felix', 'fido', 'alex' --> ['felix', 'fido', 'alex']

    Uses: array literal syntax, deepEqual assertion 
*/

/*
    Write a function that takes an array of pet types ('cat', 'dog', 'bird')
    and returns the count of cats

    ['cat', 'dog', 'bird', 'cat', 'cat'] --> 3

    Uses: let variable with reassignment, math operator, for...of loop
*/

/*
    BONUS: Write a function that takes an array of pet types ('cat', 'dog', 'bird')
    and the pet type to count and returns the count of that type

    ['cat', 'dog', 'bird', 'cat', 'cat'], 'cat' --> 3
    ['cat', 'dog', 'bird', 'cat', 'cat'], 'bird' --> 1

    Uses: let variable with reassignment, math operator, for...of loop, if control flow
*/

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
