// Javascript Classes

/*class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.toppings = [];
  }
  getCrust() {
    return this.crust;
  }
  setCrush(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  getToppings() {
    return this.toppings;
  }
  setToppings(topping) {
    this.toppings.push(topping);
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust Pizza`);
  }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
myPizza.bake();
console.log(myPizza.getToppings());

class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "original";
  }
  getCrust() {
    return this.crust;
  }
  setCrush(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}
  class SpecialtyPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "The Works";
  }
  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
  }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();

// Naming Conventions
// Private properties are not be modified within the class, only outside the class with the get and set method

class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;
    this._crust = "original";
  }
  getCrust() {
    return this._crust;
  }
  setCrush(pizzaCrust) {
    this._crust = pizzaCrust;
  }
}

// Factory Function
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake();

class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this._crust;
  }
  setCrush(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`
    );
  }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();

console.log(myPizza.crust);
console.log(myPizza.sauce);
console.log(myPizza.#sauce);
console.log(myPizza.getCrust);*/
