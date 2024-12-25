// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀

/*
test

underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
button.addEventListener('click', () => {
  const arrayWords = textarea.value.split('\n');

  arrayWords.forEach((word, index) => {
    const newWord = `${word
      .trim()
      .slice(0, word.indexOf('_'))
      .toLowerCase()}${word[word.indexOf('_') + 1].toUpperCase()}${word
      .slice(word.indexOf('_') + 2)
      .toLowerCase()}`;
    console.log(`${newWord.padEnd(20, ' ')}${'✅'.repeat(index + 1)}`);
  });

  console.log(arrayWords);
});
