import playGame, { getQuantityRound } from '../index.js';

const isNumberEven = (number) => {
  return ((number % 2 === 0) ? true : false);
}

export default function playEvenGame() {
  const quantityRound = getQuantityRound();
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * 100]);
    const result = isNumberEven(numberForQuestion) ? 'yes' : 'no';
    correctAnswers.push(result);
    gameQuestions.push(`Question: ${numberForQuestion}`);
  }
  playGame(gameTask, gameQuestions, correctAnswers);
}
