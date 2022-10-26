import playGame, { getQuantityRound } from '../index.js';

export default function playEvenGame() {
  const quantityRound = getQuantityRound();
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * 100]);
    const result = numberForQuestion % 2 ? 'no' : 'yes';
    correctAnswers.push(result);
    gameQuestions.push(`Question: ${numberForQuestion}`);
  }
  playGame(gameTask, gameQuestions, correctAnswers);
}
