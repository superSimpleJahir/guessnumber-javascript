let numberOfWon = 0;
let numberOfLost = 0;
for (let i = 1; i <= 5; i++) {
  let guessumber = parseInt(prompt("Enter a number 1 to 5: "));

  let randomeNumber = Math.floor(Math.random() * 5 + 1);

  if (guessumber == randomeNumber) {
    console.log("You have won");
    numberOfWon++;
  } else {
    console.log("You have lost. Random number was " + randomeNumber);
    numberOfLost++;
  }
}
document.write("Total Number of won: " + numberOfWon + "<br><br>");
document.write("Total Number of lost: " + numberOfLost);

// dat mathod and object

let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

let Day = date.getDay();
console.log(year);

let date1 = date.getDate();
console.log(date1);

let year1;
console.log(year1);



