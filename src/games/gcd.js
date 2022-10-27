import playGame, { getQuantityRound } from '../index.js';
import getRandonInteger from '../utils.js';

const getNumberGCD = (number1, number2) => {
  for (let i = number1 + 1; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      const gcd = i;
      return gcd;
    }
  }
};

export default function playGcdGame() {
  const quantityRound = getQuantityRound();
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const number1 = getRandonInteger(0, 1000);
    const number2 = getRandonInteger(0, 1000);
    const numberGCD = getNumberGCD(number1, number2);
    correctAnswers.push(`${numberGCD}`);
    gameQuestions.push(`Question: ${number1} ${number2}`);
  }
  playGame(gameTask, gameQuestions, correctAnswers);
}
