function writePassword() {
  const password = generatePassword();
  document.querySelector("#password").value = password
}

function generatePassword() {
  let password = ''
  const desiredLength = promptLength();
  const availableCharacters = confirmAllCharacters();
  while(password.length < desiredLength) {
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
  const desiredLength = prompt('What is the desired length of your password? (Must be greater than 8 and less than 128')
  if (isNaN(desiredLength)) {
    alert('Please enter only a number');
    return promptLength();
  } else if (desiredLength >= 8 && desiredLength <= 128){
    return desiredLength;
  } else {
    alert('The number must be at least 8 and no more than 128');
    return promptLength();
  }
}

function init() {
  // Add event listener to generate button
  document.querySelector("#generate").addEventListener("click", writePassword);
}
init();