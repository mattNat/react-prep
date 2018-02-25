const fakeTitles = [
  'Pirate Of Reality',
  'Guardians Of Hell',
  'Witches With Vigor',
  'Spies And Heroes',
  'Robots And Kings',
];

const abbreviations = fakeTitles.map(
  title => title.toLowerCase().slice(0, 4));

// equivalent using non-arrow functions
const abbreviationsEs5 = fakeTitles.map(function(title) { return title.toLowerCase().slice(0, 3); });

console.log(abbreviations); // ['pir', 'gua', 'wit', 'spi', 'rob']

// object.assign
const objA = {
  foo: 'foo',
  bar: 'bar'
 };
 
 const objB = {
  foo: 'something else',
  bizz: 'bizz',
  bang: 'bang'
 };
 
 console.log(Object.assign({}, objA, objB)); // => {foo: "something else", bar: "bar", bizz: "bizz", bang: "bang"}

// classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log(`${this.name} makes a noise`);
  }
}

const fido = new Animal('fido');
fido.talk();

const pluto = new Animal('pluto');
pluto.talk();

// classes can inherit other classes

// parent class of dog is animal
class Dog extends Animal {
  constructor(name, breed) {
    // super calls the constructor of the parent class
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const lassie = new Dog('lassie', 'Rough collie');
lassie.speak(); // lassie barks

