
/**
 * ReadOnlyArray should be immutable
 * Every operation should create a new ReadOnlyArray
 *
 */

import ReadOnlyArray from './readonly_array';

let arr = new ReadOnlyArray([1,2,3,4]);

console.log(arr[0]); // 1

console.log(arr[3]); // 4

// a[2] = 3; // should not work!

let newArray = arr.push(5);

console.log(newArray); // [1,2,3,4,5]
console.log(newArray instanceof ReadOnlyArray); // true

let addedMany = arr.push(5, 6, 7, 8, 9);
console.log(addedMany); //[1,2,3,4,5,6,7,8,9]

let newArray2 = arr.unshift(-2, -1, 0);

console.log(newArray2); // [-2, -1, 0, 1, 2, 3, 4]

let partOfArray = arr.slice(1, 3);

console.log(partOfArray); // [1,2,3]

let mappedArray = arr.map((element, index, originalArray) => {
  return element + 2;
});

console.log(mappedArray); // [3,4,5,6]

let filteredArray = arr.filter((element, index, originalArray) => {
  return element % 2 === 0;
});

console.log(filteredArray); // [2, 4]