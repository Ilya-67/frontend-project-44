import playGame, { getQuantityRound } from '../index.js';
import getRandonInteger from '../utils.js';

function getNumberGCD(max, min) {
  let maxNumber = max;
  let minNumber = min;
  let result;
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
  return result;
}

export default function playGcdGame() {
  const quantityRound = getQuantityRound();
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const number1 = getRandonInteger(1, 1000);
    const number2 = getRandonInteger(1, number1);
    const numberGCD = getNumberGCD(number1, number2);
    correctAnswers.push(`${numberGCD}`);
    gameQuestions.push(`Question: ${number1} ${number2}`);
  }
  playGame(gameTask, gameQuestions, correctAnswers);
}
