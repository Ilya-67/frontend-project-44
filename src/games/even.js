import playGame, { getQuantityRound } from '../index.js';

const isNumberEven = (number) => {
  const result = number % 2;
  return result === 0;
};

const playEvenGame = () => {
  const quantityRound = getQuantityRound();
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const correctionNumber = 100;
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * correctionNumber]);
    const result = isNumberEven(numberForQuestion) ? 'yes' : 'no';
    correctAnswers.push(result);
    gameQuestions.push(numberForQuestion);
  }
  playGame(gameDescription, gameQuestions, correctAnswers);
};

export default playEvenGame;
