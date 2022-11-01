import playGame, { setRoundsCount } from '../index.js';
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
  const roundsCount = setRoundsCount();
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const number1 = getRandonInteger();
    const number2 = getRandonInteger();
    const numberGCD = getNumberGCD(number1, number2);
    correctAnswers.push(`${numberGCD}`);
    gameQuestions.push(`${number1} ${number2}`);
  }
  playGame(gameDescription, gameQuestions, correctAnswers);
};

export default playGcdGame;
