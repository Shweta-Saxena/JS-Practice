const applyCoders = [
  { name: "harshit", point: 200 },
  { name: "gupta", point: 500 },
  { name: "satyam", point: 900 },
  { name: "harshit two", point: 1000 },
  { name: "harshit three", point: 20 },
];

let arr = applyCoders.reduce((acc, currentElem) => (acc + currentElem.point),0);

console.log("array Sum", arr);
