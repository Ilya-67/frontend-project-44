import playGame from '../index.js';
import getRandonInteger, { getNumberGCD } from '../utils.js';

export default function getGCD(qtyRound) {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const gameQuestions = [];
  const results = [];
  for (let i = 1; i <= qtyRound; i += 1) {
    const number1 = getRandonInteger(1, 1000);
    const number2 = getRandonInteger(1, 1000);
    const maxNumber = (number1 > number2) ? number1 : number2;
    const minNumber = (number2 < number1) ? number2 : number1;
    const result = getNumberGCD(minNumber, maxNumber);
    results.push(`${result}`);
    gameQuestions.push(`Question: ${number1} ${number2}`);
  }
  playGame(gameTask, gameQuestions, results);
}
