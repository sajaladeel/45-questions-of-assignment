"use strict";
//more guests 
//15
const guesttList = ["yusuf", "hamza", "saleh", "talha", "ahmed"];
const guestwhocntmke1 = guestList.pop();
console.log(`${guestwhocntmke1} cant make it to dinner.`);
guestList.push("kamran");
//16
console.log("hey everyone, we found a bigger dining table for the dinner.");
guesttList.unshift("farhan");
guesttList.splice(Math.floor(guesttList.length / 2));
guesttList.push("subhan");
guesttList.forEach((guest) => {
    console.log(`salam${guest} it would be a great honour for me if you join me at my place for the dinner`);
});
