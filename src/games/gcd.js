import playGame, { getQuantityRound } from '../index.js';
import getRandonInteger from '../utils.js';

const getNumberGCD = (number1, number2) => {
  let gcd;
  for (let i = number1 + 1; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};

const playGcdGame = () => {
  const quantityRound = getQuantityRound();
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const minLimitedNumber = 0;
  const maxLimitedNumber = 100;
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const number1 = getRandonInteger(minLimitedNumber, maxLimitedNumber);
    const number2 = getRandonInteger(minLimitedNumber, maxLimitedNumber);
    const numberGCD = getNumberGCD(number1, number2);
    correctAnswers.push(`${numberGCD}`);
    gameQuestions.push(`${number1} ${number2}`);
  }
  playGame(gameDescription, gameQuestions, correctAnswers);
};

export default playGcdGame;
