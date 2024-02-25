"use strict";
//more conditionall tests:
//tests for equality and inquaity between strings:
const a = 'hello';
const b = 'world';
console.log(a === b);
console.log(a !== b);
//Tests using the lowercase function:
const c = 'sajal adeel';
const d = 'Advocate sajal';
console.log(c.toLowerCase() === c);
console.log(d.toLowerCase() !== d);
//Numerical tests:
const num1 = 17;
const num2 = 11;
console.log(num1 === num1);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= 17);
console.log(num1 <= 30);
//Tests using “and” and “or” operators:
const x = 5;
const y = 10;
const z = 15;
// Using "and" operator (&&)
const result1 = (x < y) && (y < z);
console.log(result1); // true
// Using "or" operator (||)
const result2 = (x > y) || (y > z);
console.log(result2); // false
//Test whether an item is in an array:
const fruits = ['apple', 'orange', 'peach'];
const item = "banana";
const isInArray = fruits.includes(item);
console.log(isInArray); // true
