//JavaScript function to check whether an `input` is a string or not.
const isString = (input) => {
  testing = typeof input;
  if (testing === "string") {
    console.warn(`the input ${input} is a string`);
  } else console.warn(`the input ${input} is of ${testing} type not a string`);
};

isString("shweta");
isString(9);

//JavaScript function to check whether a string is blank or not.
const isLength = (value) => {
  {
    value.length <= 0
      ? console.log("the string is blank")
      : console.log("the string is not blank");
  }
};
isLength("");
isLength("shweta");

//JavaScript function to split a string and convert it into an array of words.

const isSplit = (value) => {
  const words = value.split([" "]);
  console.log("words", words);
};

isSplit("split a string and convert it into an array");

//JavaScript function to extract a specified number of characters from a string.
const isSpec = (value) =>
  console.log(
    `the truncated word is "${value.slice(0, 9)}", the string length is ${
      value.length
    }`
  );

isSpec("truncated a string ");

//JavaScript function to convert a string in abbreviated form
const isAbbreviated = (value) => {
  let word = value.split(" ");
  {
    word.length === 1
      ? console.log(word[0].toUpperCase())
      : console.log(word[0].toUpperCase() + " " + word[1].charAt(0) + ".");
  }
};

isAbbreviated("Shweta Saxena");
isAbbreviated("nisha");

//JavaScript function to parameterize a string
const isParameterized = (value) =>
  console.log(value.split(" ").join("-").toLowerCase());

isParameterized("Robin Singh from USA");

//JavaScript function to capitalize the first letter of a string
const isCapital = (value) => {
  console.log(value.charAt(0).toUpperCase() + value.slice(1));
};
isCapital("testing");
isCapital("check");

//JavaScript function to capitalize the first letter of each word in a string.
// const isCapitalize = (value) => {
//   if (value.length <= 1) {
//     console.log(value.charAt(0).toUpperCase() + value.slice(1));
//   } else {
//     let word = value.split(" ");
//    let second = word.map((item) =>(
//     console.log(item.charAt(0).toUpperCase() + item.slice(1))
//     //   console.log(item.join())
//    )
      
//     );
//     console.log(second.join(" "))
  
// };
// isCapitalize("testing its functionality");
// isCapitalize("check");
