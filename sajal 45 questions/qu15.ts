//Changing Guest List
const guestList :string[]=["yusuf","hamza","saleh","talha","ahmed"]

const guestwhocntmke=guestList.pop()

console.log(`${guestwhocntmke} cant make it to dinner.`)

guestList.push("kamran")

guestList.forEach((guest)=>{
    console.log(`salam ${guest} it would be a great honour for me if you join me at my place for the dinner.`);
});
