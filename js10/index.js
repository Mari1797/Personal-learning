//Loops
/* While Loops
let myNumber = 0;
while (myNumber < 50) {
  console.log(myNumber);
  myNumber++;
}

// don't create an endless loop
//let x = 0;
//while (x < 10000000000000000000000000000000) {
//console.log(x);
//x += 0.1;
///}

The Do While Loop

let myNumber = 0;
do {
  myNumber += 2;
  console.log(myNumber);
} while (myNumber < 50);


// The For Loop

for (let x = 0; x <= 10; x++) {
  console.log(x);
}

let name = "Isidahomen";
for (let i = 0; i <= name.length; i++) {
  console.log(name.charAt(i));
}*/
let name = "Isidahomen";
let counter = 0;
let myLetter;
while (true) {
  myLetter = name[counter];
  console.log(myLetter);
  if (myLetter === "n") break;
  counter++;
}
