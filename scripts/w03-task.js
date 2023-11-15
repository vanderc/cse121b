/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value)
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2
}

function subtractNumbers () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value)
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2)
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
function multiply (number1, number2) {
    return number1 * number2;
}

multiplyNumbers = () => {
    let number1 = Number(document.querySelector('#factor1').value)
    let number2 = Number(document.querySelector('#factor2').value)
    document.querySelector('#product').value = multiply(number1, number2)
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)
/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2
}

function divideNumbers () {
    let Number1 = Number(document.querySelector('#dividend').value);
    let Number2 = Number(document.querySelector('#divisor').value)
    document.querySelector('#quotient').value = divide(Number1, Number2)
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numbersArray.join();
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
let sum = numbersArray.reduce(function(total, number){
    return total + number;
  });
  document.getElementById(`sumOfArray`).innerHTML = sum;
/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(function(number){
    return number * 2;
});
document.getElementById('multiplied').innerHTML = multiplied.join(',');
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multiplied.reduce(function(total, number){
    return total + number;
});
document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplied;