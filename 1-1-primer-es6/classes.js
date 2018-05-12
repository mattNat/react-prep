// constructor used to set any initial properties of an object created from class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

// instantiate a class using "new" keyword
const fido = new Animal('fido');
fido.speak();

// extends keyword, classes inherit from other classes
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks \"${this.breed}\"`);
  }
}

const lassie = new Dog('lassie', 'Rough collie');
lassie.speak();