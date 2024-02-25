"use strict";
//Shrinking Guest List: 
const guesttList$ = ["yusuf", "hamza", "saleh", "talha", "ahmed"];
console.log('due to iappropriate management system im just inviting two of my friends.');
while (guesttList$.length > 2) {
    const removedGuesttt = guesttList$.pop();
    if (removedGuesttt) {
        console.log(' i can not invite you to dinner today.');
    }
}
for (const remainingGuestt of guesttList$) {
    console.log(`${remainingGuestt}, you're still invited to dinner! `);
}
guesttList$.length = 0;
console.log('guest list after removing evryone :', guesttList$);
