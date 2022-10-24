import playRound from '../index.js';
import getRandonInteger from '../utils.js';

export default function getGreatestCommonDivisorGame() {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const qtyStep = 3;
  const gameQuestions = [];
  const results = [];
  for (let i = 1; i <= qtyStep; i += 1) {
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
    results.push(`${result}`);
    gameQuestions.push(`Question: ${number1} ${number2}`);
  }
  playRound(gameTask, gameQuestions, results);
}
