// console.log('Hello from JavaScript');

////////////////////////////////////////
// STRINGS
const word = 'the';

console.log(word);

console.log(word + 'sis');

// word = 'apple';

let person = 'Emilia';

console.log(person);

person = 'Steven';

console.log(person);

person = 'Spot';

console.log(person);

///////////////////////////////////
// NUMBER
const firstNumber = 10;
const secondNumber = 12;
const total = firstNumber + secondNumber;
const secondTotal = firstNumber - secondNumber;
const thirdTotal = firstNumber * secondNumber;
const fourthTotal = firstNumber / secondNumber;

console.log(total);
console.log(secondTotal);

//////////////////////////////////////
// BOOLEANS
const earthIsRound = true;
const userLoggedIn = false;

const fiveIsGreaterThanTwo = 5 > 2;

console.log(fiveIsGreaterThanTwo);

//////////////////////////////////////
// WHILE LOOPS
let runProgram = true;

while (runProgram) {
  console.log('The awesome program is running!');
  runProgram = false;
}

let num = 1;

while (num <= 5) {
  console.log('The number is ' + num);

  num++;
}

///////////////////////////////////////
// FOR LOOPS
for (let i = 50; i >= 0; i -= 10) {
  console.log('The number is: ' + i);
}

for (let i = 0; i <= 50; i += 10) {
  console.log('The number is: ' + i);
}