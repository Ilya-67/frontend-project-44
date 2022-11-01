import playGame, { setRoundsCount } from '../index.js';
import getRandonInteger from '../utils.js';

const isNumberEven = (number) => {
  return number % 2 === 0;
};

const playEvenGame = () => {
  const roundsCount = setRoundsCount();
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const numberForQuestion = getRandonInteger();
    const result = isNumberEven(numberForQuestion) ? 'yes' : 'no';
    correctAnswers.push(result);
    gameQuestions.push(numberForQuestion);
  }
  playGame(gameDescription, gameQuestions, correctAnswers);
};

export default playEvenGame;
