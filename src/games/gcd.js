import getComputerAnswer from '../index.js';

function getRandonInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function getGreatestCommonDivisorGame() {
  const gameQuestion = 'What is the result of the expression?';
  const arrGameComputerQuestion = [];
  const arrResult = [];
  for (let i = 1; i < 4; i++) {
    const number1 = getRandonInteger(1, 1000);
    const number2 = getRandonInteger(1, 1000);
    let maxNumber = (number1 > number2) ? number1 : number2;
    let minNumber = (number2 < number1) ? number2 : number1;
    let result = 0;
    while (minNumber > 0) {
      const divisiorRemainder = maxNumber % minNumber;
      if (divisiorRemainder === 0) {
        result = minNumber;
        break;
      } else {
        maxNumber = minNumber;
        minNumber = divisiorRemainder;
      }
    }
    arrResult.push(`${result}`); 
    arrGameComputerQuestion.push(`Question: ${number1} ${number2}`);
  }
  const message = getComputerAnswer(gameQuestion, arrGameComputerQuestion, arrResult);
  console.log(message);
}
