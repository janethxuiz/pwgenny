// const resultEl = document.getElementById('btn')

// function btn(){
//     var length = Number(prompt("How long do you want your password?"))
//     if (length < 8 || length > 128){
//         alert("Length must be 8-128 characters")
//     } else { (length >= 8 && length <= 128)
//     var uppercase = confirm("Use uppercase letters?")
// var lowercase = confirm("Use lowercase letters?")
// var numbers = confirm("Use numbers?")
// var symbols = confirm("Use special characters?")

var generateBtn = document.querySelector("#generate");
// all password possibilities
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// This will pop up alert and ask all questions
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var useLowerCase = confirm("Do you want lower case letters?");
    var useUpperCase = confirm("Do you want upper case letters?");
    var useNumbers = confirm("Do you want numbers?");
    var useSpecial = confirm("Do you want special characters?");
    var responses = {
      length: length,
      lowerCase: useLowerCase,
      upperCase: useUpperCase,
      numbers: useNumbers,
      special: useSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!useLowerCase)&&(!useUpperCase)&&(!useNumbers)&&(!useSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}

// this will get all prompts and generate pw
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.useLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.useUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.useNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.useSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }

  console.log(possibleCombo);

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// event listener
generateBtn.addEventListener("click", writePassword);