// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength =  (8 <= 128);
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Define generatePassword function(){}
 function generatePassword() {
   console.log("Hey! You clicked the button!");

   // 1. Prompt the user for the password criteria
   //   a) password length 8<128
   var promptReturn = prompt(
     "Please enter a password between 8-128 characters long"
   );

   //   b) lowercase, uppercase, numbers, special characters
   var promptReturn = prompt(
     "Please enter "
   );
 }


// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt("How many characters would you like your password to contain?"),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number");
    return null;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return null;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
   if (length > 128) {
     alert("Password length must be no more than 128 characters");
     return null;
   }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
      "Click OK to confirm including numeric characters."
  ); 
  // Variable to store boolean regarding the inclusion of lowercase characters
  var haslowerCasedCharacters = confirm(
   "Click OK to confirm including lowercase characters."
  );
  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUpperCasedCharacters = confirm(
   "Click OK to confirm including uppercase characters."
  );
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: haslowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };
  console.log(passwordOptions)
  return passwordOptions;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = []; //stores characters in randomly generated password
  var possibleCharacters = [];
  var guaranteedCharacters =[];

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
    guaranteedCharacters.push(getRandom(lowerCasedCharacters))
  }
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters))
  }
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters))
  }
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters))
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);
    result.push(possibleCharacters);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}

return result.join('');
}

// Write password to the #password input
function writePassword() {
  // 1)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// 1) Have a function that generates a password
    // this function will take arguments
      //length of password
      //includes lowercase characters
      //includes uppercase characters
      //includes numeric characters
      //includes special characters

// Generate Random Password 
// 1. Click button
// 2. Prompts for password criteria 
// Which criteria 
// Length of Password
// Between 8-128 characters
// Character types 
// alert, confirm, prompt 