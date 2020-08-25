// Return the sum of two numbers.
const addition = (a, b) => a + b;

function addition2(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Sorry but you didnt pass two numbers";
    }
    return a + b;
}

// Return Area of a Triangle
const triangle = (a, b) => (a * b) / 2;

const triangle2 = (a, b) => {
    return (a * b) / 2;
}


// Function that returns "something" joined with a space and the given argument
const giveMeSomething = a => `something ${a}`;

function giveMeSomething2(a) {
    return "something " + a;
}


// Function using the && operator
const add = (a, b) => a && b;

function and2 (a, b) {
    return a && b;
}

// Convert hours into seconds
const howManySeconds = a => (a * 60) * 60;

function howManySeconds2(a) {
    return (a * 60) * 60;
}

// Return the first element in an array
const getFirstValue = arr => arr[0];

function getFirstValue(arr) {
    return arr[0];
} 

// Maximum edge of a triangle
const nextEdge = (a, b) => (a + b) - 1;

function nextEdge(a, b) {
    return (a + b) - 1;
}

