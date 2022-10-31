import playGame, { getQuantityRound } from '../index.js';

const isNumberPrime = (number) => {
  let result;
  for (let i = 2; i <= number; i += 1) {
    const remainder = number % i;
    if (remainder === 0 && i < number) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
};

const playPrimeGame = () => {
  const quantityRound = getQuantityRound();
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const correctionNumber = 100;
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * correctionNumber]) + 2;
    const result = isNumberPrime(numberForQuestion)? 'yes' : 'no';
    correctAnswers.push(result);
    gameQuestions.push(numberForQuestion);
  }
  playGame(gameDescription, gameQuestions, correctAnswers);
};

export default playPrimeGame;
