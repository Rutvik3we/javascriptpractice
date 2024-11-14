const prompt = require("prompt-sync")(); // first you you need to install this module for use take user input
// also install npm i nodemon -g > for auto compile our code 
//in package.json down to the mail paste in this >  "nodemon" : "yourPlayground.js", > run this command in terminal >  nodemon filename


//name = "Rutvik"
//console.log(name);


//* Operator

// food = 20;
// tipPercentage = 0.2;
// tipAmount =  food * tipPercentage;

// console.log(tipAmount)


//* User Input

// food = Number( prompt('how Much was the food'));

// tipPercentage = Number( prompt('tip %?')) / 100;
// tipAmount =  food * tipPercentage;

// total = food + tipAmount;

// console.log(`Your Total is ${total}`)


//* Data Types (Strings, Number)

// number > 1,2,3,100,2.5
// strings > 'hello', "what is up"
// array > []
// object > {}
// boolean > true / false


//* Math Operations

//Multiply *
//Divide /
//Exponents **
//Modulo/Remainder % 5%2
//add +
//Subtract -


//* Math Methods

// Floor > the Math.floor() method rounds a number down to the nearest Integer, and returns the Result.
// Ceil > The Math.ceil() method rounds a number up to the nearest integer , and returns the result.
// Random > gives you a random number 

// console.log(Math.floor(110.28));
// console.log(Math.ceil(110.28));
//console.log(Math.floor(Math.random() * 3));


//*  Variable

// const > The Value cannot be chnaged
// let > The Value can be changed
// var > The Value Can be chnaged - Not Recommended


// let fullname = "rutvik mak";
// console.log(fullname);


//* Baby weather app

// if rain > 'Grab your umbrella'
//else > 'Wear your sunglasses'

// let weather = 'rain';

// if (weather == 'rain'){
//     console.log('Grab your umbrella');
// }else{
//     console.log('Wear your sunglasses');
// }

// Conditional operators
// ==, ===, >, <, <=, >=, !=, !==

//* Function 

// function sayMyName(){
//     console.log('Mak');
// }

// sayMyName();

// function sayMyName2(name){
//     console.log(`hii ${name}`)
// }

// sayMyName2("Rutvik Mak");


// function sum(a,b){
//     return a+b;
// }
// num1 = sum(2,4);
// console.log(num1);

// function tipCalculator(food,tip){
   
// tipPercentage = tip / 100;
// tipAmount =  food * tipPercentage;

// total = food + tipAmount;

// return total ;

// }

// console.log(tipCalculator(100,20));


//* ES6 Arrow Function 

// const sumArrow = (a,b) =>{
//     return a+b;
// }

// console.log(sumArrow(2,2));

//* Array
// const groceries = ['banana','apple','orange','pear'];

// console.log(groceries);
// console.log(groceries[3]); // Indexing

// Array Methods > slice,push,indexOf, length
// groceries.push('Cookie'); // adds one or more elements to the end of an array and returns the new lenght of te array
// console.log(groceries);


// console.log(groceries.slice(3,5)); //Array Slice > The slice() method returns the portion of the array you want in a new array
// console.log(groceries.indexOf('Cookie'));
// console.log(groceries.length);


//* Objects > object are a type of variable,quite similar to arrays but they have something called key-value pairs

const person = {
    name: 'Rutvik',
    shirt: 'White'
}

console.log(person);
console.log(person.name); // dot notation
console.log(person['name']); //bracket notation


person.phone = '7228883385'; // assign object
console.log(person.phone);

console.log(person);























