"use strict";
//Ordinal Numbers:
//An ordinal number is a type of number that is used to represent the position or rank of an object or a person.
//i.e. 1st,2nd,3rd,4th and so on.
//array of numbers 
const numbers = [1, 2, 3, 4, 5, 6, 9, 7, 8, 11];
//loop
for (const num of numbers) {
    if (num === 1) {
        console.log(`${num}st`);
    }
    else if (num === 2) {
        console.log(`${num}nd`);
    }
    else if (num === 3) {
        console.log(`${num}rd`);
    }
    else {
        console.log(`${num}th`);
    }
    ;
}
;
