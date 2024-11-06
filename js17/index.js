// Objects
// key-value pairs in curly braces

const myObj = { name: "Dave" };
console.log(myObj);

// Dot Notation
const anotherObj = {
  name: "Ofure",
  age: 27,
  hobbies: ["Eat", "Sleep", "Chores", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },

  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};
console.log(myObj.name);
console.log(anotherObj.age);

console.log(anotherObj.hobbies);
console.log(anotherObj.beverage);

console.log(anotherObj["hobbies"]);
console.log(anotherObj["beverage"]);

console.log(anotherObj.beverage.morning);

console.log(anotherObj.action());

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrroooom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //Inheritance
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whooooosh!";
};
console.log(car.engine());
console.log(car.wheels);

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(`band[job]`);
}

for (let job in band) {
  console.log(`On ${job}, it's ${band[job]}!`);
}

//Destructing Objects

const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);

function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
