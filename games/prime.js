import {  getGreetings, getComputerAnswer, getUserAnswer, getNumberIsPrime  } from '../src/index.js';

export default function sixthGame() {
  const userName = getGreetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * 100]);
    console.log(`Question: ${numberForQuestion}`);
    const result = getNumberIsPrime(numberForQuestion);
    const userAnswer = getUserAnswer();
    const computerAnswer = getComputerAnswer(userAnswer, result, userName);
    console.log(computerAnswer);
    if (computerAnswer !== 'Correct!') {
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
