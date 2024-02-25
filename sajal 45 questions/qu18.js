"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
let placesfav = ["makkah madina ", "rio de jenero", "turkey", "palestine", "swiss"];
//Print your array in its original order.
console.log("Original order:");
console.log(placesfav);
//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:");
console.log([...placesfav].sort());
//Show that your array is still in its original order by printing it.
console.log(placesfav);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:");
console.log([...placesfav].sort().reverse());
//Show that your array is still in its original order by printing it.
console.log(placesfav);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed order:");
placesfav.reverse();
console.log(placesfav);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reversed order again (back to original):");
placesfav.reverse();
console.log(placesfav);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in alphabetical order:");
console.log(placesfav.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Sorted in reverse alphabetical order:");
console.log(placesfav.sort().reverse());
