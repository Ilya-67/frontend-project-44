import playGame, { getQuantityRound } from '../index.js';
import getRandonInteger from '../utils.js';

const getProgression = (firstItem, step, minQuantityItem, maxQuantityItem) => {
  const progression = [];
  const itemInProgession = getRandonInteger(minQuantityItem, maxQuantityItem);
  for (let i = 0; i < itemInProgession; i += 1) {
    progression.push((i + 1) * firstItem * step);
  }
  return progression;
};

export default function playProgressionGame() {
  const quantityRound = getQuantityRound();
  const gameTask = 'What number is missing in the progression?';
  const minQuantityItem = 5;
  const maxQuantityItem = 10;
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const firstItem = getRandonInteger(1, 5);
    const step = getRandonInteger(2, 10);
    const gameQuestion = getProgression(firstItem, step, minQuantityItem, maxQuantityItem);
    const itemOfHiddenNumber = getRandonInteger(0, (gameQuestion.length - 1));
    const hiddenNumber = gameQuestion[itemOfHiddenNumber];
    gameQuestion[itemOfHiddenNumber] = '..';
    const stringOfQuestion = gameQuestion.join(' ');
    correctAnswers.push(`${hiddenNumber}`);
    gameQuestions.push(`Question: ${stringOfQuestion}`);
  }
  playGame(gameTask, gameQuestions, correctAnswers);
}
