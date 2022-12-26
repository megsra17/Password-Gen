// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = [
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
var upperCase = [
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
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  '"',
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "}",
  "|",
  "~",
  "`",
];

function generatePassword() {
  var password = Number(
    prompt(
      "Please Enter # thats password length is atleast 8 characters and no more than 128 characters"
    )
  );
  console.log(password);
  while (password < 8 || password > 128 || isNaN(password)) {
    if (password < 8 || password > 128 || isNaN(password)) {
      alert("please enter a number between 8 and 128");
      password = Number(
        prompt(
          "Please Enter # thats password length is atleast 8 characters and no more than 128 characters"
        )
      );
    }
  }

  var lowerCharacters = confirm("Should it include lowercase");
  var upperCharacters = confirm("Should it include uppercase");
  var numbers = confirm("Should it include numbers");
  var special = confirm("Should it include special characters");

  var newPassword = "";

  var chooses = [].concat(lowerCase);
  if (lowerCharacters) chooses = chooses.concat(lowerCase);
  if (upperCharacters) chooses = chooses.concat(upperCase);
  if (numbers) chooses = chooses.concat(numeric);
  if (special) chooses = chooses.concat(specialChar);

  for (var i = 1; i <= password; i++) {
    var randomChar = chooses[Math.floor(Math.random() * chooses.length)];
    newPassword += randomChar;
  }
  return newPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
