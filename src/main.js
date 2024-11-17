// Work in this directory: src
//1
let string1 = "Homework2";
console.log(string1);

//2
let example1 = "5";
let example2 = 5;
console.log(typeof example1); //string
console.log(typeof example2); //number

//3
let number1 = 15;
console.log(number1);

//4
let boolean = true;
console.log(boolean);

//5
//answer - >, <, =, >=, <=, ==, !=

//6
let hello = "Hello";
let hello2 = hello.toUpperCase();
console.log(hello2);

//7
let world = "World";
let world2 = world.toLowerCase();
console.log(world2);

8//
//let text = 'Hello';
//text.toUpperCase();
//console.log(text);

//answer - In both cases the value value of the variable 'text' is Hello.

//9
//let text;
//console.log(text);

//answer - it's undefined

10//
//answer - the word case in toLowercase should be with capital C, like toLowerCase.

//11
// let age = prompt('How old are you?');
//let nextAge = Number(age) + 1;
//console.log(`Next year you will be ${nextAge}`);

//answer - we can't add number to a sring. So we should convert string to a number

//12
let name = prompt('What is your name?');
let age = Number(prompt('How old are you?'));
let isInSixties = age >= 60 && age <= 69;
console.log(`${name} is in sixties: ${isInSixties}`);

//13
let x = 5;
console.log(x++);
console.log(x);

//answer - x=6

//14
let y = 5;
console.log(++y);
console.log(y);

//answer - y=6

//15
// x++ = x + 1
// x-- = x - 1

//16
// ++x The variable is added before its value is used.
// x++ The current value is used before the variable is added.

//17
//undefined

//18
let a = 5;
let b = 4 +1;
console.log(a == b);

//19
let c = 15;
let d = 23;
console.log(c == d);

//20
let str = "1990";
let num = 34;
console.log(str + num);
console.log(num + str);

//answer - in first case we will get 199034, in second case 341990. we will not get 2024. So we should convert string to number and then add.