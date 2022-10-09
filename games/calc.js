import { getGreetings, getRandonInteger, getRandomMathOpertion, getNumberOperation, getResultMathOperatin, getUserAnswer, getComputerAnswer } from '../src/index.js';

export default function thirdGame() {
  const userName = getGreetings();
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const a = getRandonInteger(1, 100);
    const b = getRandonInteger(1, 100);
    const j = getNumberOperation();
    const question = getRandomMathOpertion(a, b, j);
    const result = getResultMathOperatin(a, b, j);
    console.log(`Question: ${a} ${question} ${b}`);
    const userAnswer = +getUserAnswer();
    const computerAnswer = getComputerAnswer(userAnswer, result, userName);
    console.log(computerAnswer);
    if (computerAnswer !== 'Correct!') {
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
