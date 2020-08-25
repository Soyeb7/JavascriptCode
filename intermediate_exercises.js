// Semantic Versioning 
// Write three separate functions, one to retrieve each element in the semantic versioning specification.
const retrieveMajor = v => v.split(".")[0];
const retrieveMinor = v => v.split(".")[1];
const retrievePatch = v => v.split(".")[2];

function retrieveMajor2(semver) {
    return semver.split(".")[0];
}


// Get Word Count
const countWords = a => a.split(' ').length;

function countWords(str) {
    return str.split(' ').length;
}

// Cube the Square Root
const cubeSquareRoot = a => a ** 1.5

const cubeSquareRoot2 = a => Math.sqrt(a)**3;


// Count Syllables 
// Function that counts the number of syllables a word has.
const numberSyllables = a => a.split('-').length;

function numberSyllables2(word) {
    return word.split('-').length;
}


// Return the first and last element in an array
const firstLast = ([first, ...rest]) => [first, rest.pop()];

function firstLast(arr) {
    return [arr.shift(), arr.pop]
}

// Next element in Arithmetic Sequence
// i.e. Adding the same constant as the previous element

const nextElement = arr => {
    const [secondLast, last] = arr.slic(-2);
    return last + (last - secondLast)
}

function nextElement(arr) {
    return arr[arr.length - 1] + (arr[i] - arr[0]);
}


// Where is Bob
// Search an array for a name and return the location 
const findBob = names => names.indexOf('Bob')

function findBob(names) {
    return names.indexOf('Bob')
}


// Take in an integer and return string with the given number of 'a's in string.

const howManyTimes = num => `Ed${'a'.repeat(num)}bit`

function howManyTimes(num) {
     
    return 'Ed' + 'a'.repeat(num)+'bit'
}

// Capture the Rook
// return true if two rooks can attack each other

const canCapture = arr => arr[0][0] === arr[1][0] || arr[0][1] === arr[1][1];

function canCapture([yourRook, opponentsRook]) {
    return yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1];
}


// Convert number to corresponding Month Name
// Take a number from 1 to 12 and return its corresponding month

function monthName(num) {
    return new Date(2000, num - 1).toLocaleString("en-us", {month: "long"});
}

function monthName(num) {
    const mapping = {
        1: 'January',
		2: 'February',
		3: 'March',
		4: 'April',
		5: 'May',
		6: 'June',
		7: 'July',
		8: 'August', 
		9: 'September', 
		10:	'October', 
		11:	'November', 
		12:	'December'
    }
    return mapping[num];
}

function monthName(num) {
    switch(num) {
        case 1:
            return "January";
        break;
        case 2: 
            return "February";
        break;
        case 3: 
            return "March";
        break;
        case 4: 
            return "April";
        break;
        case 5: 
            return "May";
        break;
        case 6: 
            return "June";
        break;
        case 7: 
            return "July";
        break;
        case 8: 
            return "August";
        break;
        case 9: 
            return "September";
        break;
        case 10: 
            return "October";
        break;
        case 11: 
            return "November";
        break;
        case 12: 
            return "December";
        break;
        default: 
            return "Please enter a number between 1 and 12"
    }

}


// Find the largest number in Array

const findLargestNum = arr => Math.max(...arr)

function findLargestNum(num) {
    return Math.max(...num)
}


// Checking even numbers
// Check if all numbers in an array are even.

const checkAllEven = arr => arr.every(x => x % 2 === 0);

function checkAllEven(arr){
    return arr.every(x => x % 2 === 0)
}


// Check if there are more odd numbers than even numbers
// Using ternary operator
function oddEven(list) {
    let odd = 0;
    let even = 0;
    list.forEach(num => num % 2 == 0 ? even++ : odd++)
    return odd > even
}


// Additive inverse
// Return an array of additive inverses
const additiveInverse = arr => arr.map(x => 0 - x)

function additiveInverse(arr) {
    return arr.map(x => -x)
}


// Negate the array of numbers 
const negate = a = a.map(x => -x)

function negate(arr) {
    return arr.map(val => -val)
}

// Basic Calculator
// Take two numbers and a mathematical operator and perform operation

function calculate(num1, operator, num2) {
    return{
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num2 ? num1 / num: 'Cannot divide by 0!' 
    }[operator]
}


// Make a circle with OOP
// Create a Circle constructor that creates a circle with a radius provided through argument.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}


// Shuffle the Name
// String that takes in first and last name then swaps them around

const nameShuffle = str => str.split(' ').reverse().join(' ')

function nameShuffle(str) {
    return str.split(' ').reverse().join(' ');
}



// Throwing errors if no arguments passed or argument passed is undefined
function ensure(value) {
    if(value === undefined || value === '') {
      throw new Error('no arguments');
    }
  
    return value;
  }


// Implement the setup function that registers a click event handler and implements....
// ... the following logic:
// When the button of class remove is clicked, its parent <div> element should be removed from the gallery

function setup() {
    // Write your code here.
    var element = document.getElementsByClassName('remove');

    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('div.image').remove();
        })
    }
  }
  
  // Example case. 
  document.body.innerHTML = `
  <div class="image">
    <img src="https://goo.gl/kjzfbE" alt="First">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="https://goo.gl/d2JncW" alt="Second">
    <button class="remove">X</button>
  </div>`;
  
  setup();
  
  document.getElementsByClassName("remove")[0].click();
  console.log(document.body.innerHTML);


//   Write CSS so that the link looks like the one in the image

// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Styling links</title>
//     <style type="text/css">
//       /* Write your CSS solution here (do not edit the surrounding HTML) */
//       a {
//         text-transform: uppercase;
//         text-decoration: none;
//       }
//       a:hover {
//         cursor: help;
//       }
//       a::before {
//         content: ">"
//       }
//       a::after {
//         content: "<"
//       }
//     </style>
//   </head>
//   <body>
//     <a href="http://www.testdome.com">Check documentation</a>
//   </body>
// </html>



// Fix the bugs:
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Company page</title>
//   </head>
//   <body>
//     <p>Welcome! Here you can find the following things:</p>
//     <ol>
//       <em><li><a href="#logo">Company's logo</a></li></em>
//       <li><a href="#employees">List of employees</a></li>
//     </ol>

//     <h1>Company's logo </h1>
//     <p>Company uses the following logos:</p>
//     <ul>
//       <li>New logo:</li><img src="https://www.testdome.com/content/images/logo/favicon_32x32.png">
//       <li>Old logo:</li><img src="https://www.testdome.com/content/images/icons/order-bullet.png">
//     </ul>

//     <h1>List of employees </h1>
//     <table>
//     <thead>
//       <th>First name</th>
//       <th>Last name</th>
//     </thead>
    
//       <tr>
//         <td>Mary</td>
//         <td>Williams</td>
//       </tr>
//       <tr>
//         <td>James</td>
//         <td>Smith</td>
//       </tr>
//     </table>
//   </body>
// </html>