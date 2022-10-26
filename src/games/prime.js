import playGame, { getQuantityRound } from '../index.js';

function isNumberPrime(number) {
  let result;
  for (let j = 2; j <= number; j += 1) {
    const a = number % j;
    if (a === 0 && j < number) {
      result = 'no';
      break;
    } if (a === 0 && j === number) {
      result = 'yes';
    }
  }
  return result;
}

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
