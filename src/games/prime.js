import playGame, { setRoundsCount } from '../index.js';
import getRandonInteger from '../utils.js';

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
  const roundsCount = setRoundsCount();
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const minNumber = 2;
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const numberForQuestion = getRandonInteger(minNumber);
    const result = isNumberPrime(numberForQuestion) ? 'yes' : 'no';
    correctAnswers.push(result);
    gameQuestions.push(numberForQuestion);
  }
  playGame(gameDescription, gameQuestions, correctAnswers);
};

export default playPrimeGame;
