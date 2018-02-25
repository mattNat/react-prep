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

 