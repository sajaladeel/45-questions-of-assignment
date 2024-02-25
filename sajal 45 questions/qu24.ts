//more conditionall tests:
//tests for equality and inquaity between strings:
 
const a :string='hello';
const b :string ='world';
console.log(a===b);
console.log(a!==b);

//Tests using the lowercase function:
const c:string= 'sajal adeel';
const d:string= 'Advocate sajal';
console.log(c.toLowerCase()===c);
console.log(d.toLowerCase()!==d);

//Numerical tests:
const num1:number =17
const num2:number =11
console.log(num1===num1)
console.log(num1!==num2)
console.log(num1>num2)
console.log(num1<num2)
console.log(num1>=17)
console.log(num1<=30)

//Tests using “and” and “or” operators:
const x:number=5;
const y:number=10;
const z :number=15;

// Using "and" operator (&&)
const result1: boolean = (x < y) && (y < z);
console.log(result1); // true

// Using "or" operator (||)
const result2: boolean = (x > y) || (y > z);
console.log(result2); // false


//Test whether an item is in an array:
const fruits :string[]=['apple','orange','peach'];

const item: string = "banana";

const isInArray: boolean = fruits.includes(item);

console.log(isInArray); // true