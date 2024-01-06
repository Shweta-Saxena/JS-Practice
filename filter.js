console.log("hii");

const data = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "pineapple" },
  { id: 4, name: "litchi" },
  { id: 5, name: "kiwi" },
  { id: 6, name: "apple" },
];
const newArray = data.filter((item) => item.name === "apple") ;
const newArrayList2 = data.sort(data.find(item => item.id <=1));

console.log("newArray", newArray);
console.log("newArrayList", newArrayList2);


const findArray = data.find((item) => item.name === "apple");
console.log("findArray is", findArray);


const arrayList = ["riya", "saloni", "nisha","vinita","shweta", "saloni"];
const finalArrayList = arrayList.find(item=> item === "saloni");
const newArrayList = arrayList.indexOf(arrayList.find(item => item==="saloni"));
console.log("finalArrayList", finalArrayList);
console.log("newArrayList", newArrayList);
console.log(arrayList.filter(item => item==="saloni"));

