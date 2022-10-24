import playGame from '../index.js';
import { isNumberPrime } from '../utils.js';

export default function getPrimeGame(qtyRound) {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameQuestions = [];
  const results = [];
  for (let i = 1; i <= qtyRound; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * 100]) + 2;
    const result = isNumberPrime(numberForQuestion);
    results.push(result);
    gameQuestions.push(`Question: ${numberForQuestion}`);
  }
  playGame(gameTask, gameQuestions, results);
}
