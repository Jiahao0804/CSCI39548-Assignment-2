/*

Consider the following native Javascript methods:
1. map() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]
2. filter() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter]
3. some() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Some]
4. every() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Every]
5. reduce() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce]
6. includes() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes]
7. indexOf() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf]
8. lastIndexOf() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf]
9. Object.keys() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys]
10. Object.values() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values]

Use the test cases for all the function from javascript-method.js

*/


// myMap()
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.myMap(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]



// myFilter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.myFilter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]



// mySome()
const array2 = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array2.mySome(even));
// Expected output: true



// myEvery()
const isBelowThreshold = (currentValue) => currentValue < 40;

const array3 = [1, 30, 39, 29, 10, 13];

console.log(array3.myEvery(isBelowThreshold));
// Expected output: true



// myReduce()
const array4 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array4.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10



// myIncludes()
const array5 = [1, 2, 3];

console.log(array5.myIncludes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.myIncludes('cat'));
// Expected output: true

console.log(pets.myIncludes('at'));
// Expected output: false



// myIndexOf()
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.myIndexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.myIndexOf('bison', 2));
// Expected output: 4

console.log(beasts.myIndexOf('giraffe'));
// Expected output: -1



// myLastIndexOf()
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.myLastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.myLastIndexOf('Tiger'));
// Expected output: 1



// myKeys()
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.myKeys(object1));
  // Expected output: Array ["a", "b", "c"]



// myValues()
const object2 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.myValues(object2));
  // Expected output: Array ["somestring", 42, false]