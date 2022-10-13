//Numbers
let numOne = 1;
let numTwo = 2;
let numThree = 5.8;
//Number methods
numOne.toString();

//Strings
let firstString = 'This is a test string 1';
let secondString = 'This is a test string 2';
//String Methods
let firstStringUpperCase = firstString.toUpperCase();
let splitfirstString = firstString.split(' ');
//console.log(firstStringUpperCase)
//console.log(splitfirstString)

//Booleans
let truthValue = true;
let falsevalue = false;

//Arrays /Lists
let firstArray = [firstString, secondString];
let secondArray = [numOne, firstString, truthValue, firstArray];
//Array Methods
let arrayConcat = firstArray.concat(secondArray)
let lastItem = secondArray.pop()

//console.log(arrayConcat)
//console.log(lastItem)

//Objects / Map / JSON
let firstObject = { 'objectOne': numOne, 'objectTwo': firstString }
let secondObject = { 'objectOne': truthValue, 'objectTwo': firstObject }
//Object Methods
const valueOne = firstObject.objectOne;
// console.log(firstObject)
// console.log(secondObject)

//Functions
// Anatomy 1 -> const functionName = () => {}
// Anatomy 2 -> function name(param1, param2) {}

//Definition
const addTwoNumbers = (num1, num2) => { return num1 + num2 }
const multiplyFourNumbers = (num1, num2, num3, num4) => { return num1 * num2 * num3 * num4 }
const transactionCodeExtractor = (message) => {
    return message.split(' ')[0];
}

function subtractTwoNumbers(param1, param2) {
    return param1 - param2;
}

//Calling /Implementation
const result = addTwoNumbers(5, 8);
const multiplicationResult = multiplyFourNumbers(1, 2, 7, 100)
const extractionResult = transactionCodeExtractor('QWEEEEEEEE confirmed')
const subtractionResult = subtractTwoNumbers(9, -3);


//PRINT OUTPUT TO TERMINAL

// console.log(result)
// console.log(multiplicationResult)
// console.log(extractionResult)
// console.log(subtractionResult)


//Control Flow
//if /else
const weatherPredictor = (weatherType) => {
    if (typeof weatherType == 'string') {
        const weatherTypes = ['Sunny', 'Windy', 'Rainy', 'Cloudy',];
        if (weatherTypes.includes(weatherType)) {
            if (weatherType == 'Sunny') {
                return 'Dress Lightly';
            }
            else {
                return 'Carry a Jacket';
            }
        }
        else {
            return 'ERROR: This weather type is not known';

        }
    }
    else {
        return 'ERROR: Please input a string';
    }
}

const mondayWeather = weatherPredictor('Sunny')
const tuesdayWeather = weatherPredictor('Rainy')
const wednesdayWeather = weatherPredictor('Cloudy')
const thursdayWeather = weatherPredictor('Windy')

// console.log('Monday ->', mondayWeather)
// console.log('Tuesday ->', tuesdayWeather)
// console.log('Wednesday ->', wednesdayWeather)
// console.log('Thursday ->', thursdayWeather)


const myCalc = (num1, num2, operation) => {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        const allowedOps = ['+', '-', '/', '*'];
        if (allowedOps.includes(operation)) {
            if (operation == '+') {
                return num1 + num2;
            }
            else if (operation == '-') {
                return num1 - num2;
            }
            else if (operation == '/') {
                return num1 / num2;
            }
            else if (operation == '*') {
                return num1 * num2;
            }
            else if (operation == '+') {
                return num1 + num2;
            }
            else {
                return 'Error: The operation is not recognized';
            }
        } else {
            return 'Error: This operator is not recognized. Use +,-,*,/ operators only';
        }
    } else {
        return 'Error: NUM1 and NUM2 variables both have to be integers';
    }
}

const firstCalc =myCalc('one',5,'+')

console.log(firstCalc)

// for
// let newArray =['Mark','Charles','James'];
// function genderCreator(array){
//     array.forEach(arrayValue => {
//         console.log(arrayValue + ' is a male')
//     })
    
//     // genderCreator(newArray)
// }



