// JavaScript function to check whether an `input` is an array or not

function isArray(input) {
  if (Array.isArray(input) === true) {
    console.log("its an array");
  } else {
    console.log(`the input is ${typeof input} data type not an array`);
  }
}

isArray([1, 2, 3]);
isArray("shweta");

//JavaScript function to clone an array.
const cloneNumber = (array) => console.log(array.slice(0));

cloneNumber([1, 2, 3, 4, 5]);
cloneNumber([1, 2, [4, 0]]);

//JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
const firstElement = (array) => console.log(array[0]);

firstElement([1, 2, [4, 0]]);

// JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
const lastElement = (array) => {
  let length = array.length;
  console.log(array[length - 1]);
};

lastElement([1, 2, 4]);

//JavaScript program to join all elements of the following array into a string.
const joinString = (array) => console.log(array.join(", "));

joinString(["a", "b", "c", "d", "e", "f"]);

//JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
const dashes = (array) => {
  let string = array.toString();
  let initialString = [string[0]];
  for (i = 1; i <= string.length; i++) {
    if (string[i - 1] % 2 === 0 && string[i] % 2 === 0) {
      initialString.push("-", string[i]);
    } else {
      initialString.push(string[i]);
    }
  }
  console.log(initialString.join(" "));
};

dashes([3, 8, 7, 6, 5, -4, 3, 2, 1]);

//JavaScript program to sort the items of an array
const sort = (array) => console.log(array.sort());
sort([1, 12, 13, 18, 20, 6, 4, 2, 3, -10]);

//JavaScript program to find the most frequent item of an array.
const array = [1, 2, 2, 3, 12, 2, 2, 13, 3, 2, 34, 32, 1];
let count = 1;
let repeatingElement = 0;
let item;

for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (array[i] === array[j]) repeatingElement++;
    if (count < repeatingElement) {
      count = repeatingElement;
      item = array[i];
    }
  }
  repeatingElement = 0;
}
console.log(count, "count", item, "item");

//a JavaScript program which accept a string as input and swap the case of each character.
