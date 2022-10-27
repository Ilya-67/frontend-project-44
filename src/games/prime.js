import playGame, { getQuantityRound } from '../index.js';

const isNumberPrime = (number) => {
  let result;
  for (let i = 2; i <= number; i += 1) {
    const a = number % i;
    if (a === 0 && i < number) {
      result = 'no';
      break;
    } if (i === number) {
      result = 'yes';
    }
  }
  return result;
};

export default function playPrimeGame() {
  const quantityRound = getQuantityRound();
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * 100]) + 2;
    const result = isNumberPrime(numberForQuestion);
    correctAnswers.push(result);
    gameQuestions.push(`Question: ${numberForQuestion}`);
  }
  playGame(gameTask, gameQuestions, correctAnswers);
}
