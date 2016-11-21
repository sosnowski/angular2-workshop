
/**
 * ReadOnlyArray should be immutable
 * Every operation should create a new ReadOnlyArray
 *
 */

let arr = new ReadonlyArray([1,2,3,4]);

console.log(arr[0]); // 1

console.log(arr[3]); // 4

// a[2] = 3; // should not work!

let newArray = arr.push(5);

console.log(newArray); // [1,2,3,4,5]
console.log(newArray instanceof ReadonlyArray); // true

let newArray2 = arr.unshift(0);

console.log(newArray2); // [0,1,2,3,4]

let partOfArray = arr.slice(1, 3);

console.log(partOfArray); // [1,2,3]

let mappedArray = arr.map((element, index, originalArray) => {
  return element + 2;
});

console.log(mappedArray); // [3,4,5,6]

let filteredArray = arr.filter((element, index, originalArray) => {
  return element % 2 === 0;
});