// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  document.querySelector("#password").value = password
}

function generatePassword() {
  let password = ''
  const desiredLength = promptLength();
  const availableCharacters = confirmAllCharacters();
  for (let i = 0; i < desiredLength; i++) {
    password += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
  }
  return password;
}

function confirmAllCharacters() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numerics = '0123456789';
  const special = '!@#$%^&*()=+-_`~";:<>,./?*|{}[]';
  let availableCharacters = '';

  if (confirmUppercase()) {
    availableCharacters += alphabet
  }
  if (confirmLowercase()) {
    availableCharacters += alphabet.toLocaleLowerCase();
  }
  if (confirmNumerics()) {
    availableCharacters += numerics;
  }
  if (confirmSpecial()) {
    availableCharacters += special;
  }
  if (availableCharacters === '') {
    alert('You must select at least one character type to use');
    return confirmAllCharacters();
  } else {
    return availableCharacters;
  }
}

function confirmUppercase() {
  return confirm('Would you like to include uppercase characters?')
}
function confirmLowercase() {
  return confirm('Would you like to include lowercase characters?')
}

function confirmNumerics() {
  return confirm('Would you like to include numeric characters?')
}

function confirmSpecial() {
  return confirm('Would you like to include special characters?')
}

function promptLength() {
  const desiredLength = prompt('What is the desired length of your password?')
  if (isNan(desiredLength)) {
    alert('Please enter only a number');
    promptLength();
  } else {
    return desiredLength;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
