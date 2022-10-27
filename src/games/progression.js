import playGame, { getQuantityRound } from '../index.js';
import getRandonInteger from '../utils.js';

const getProgression = (firstItem, stepProgression) => {
  const progression = [];
  const itemInProgession = getRandonInteger(5, 10);
  for (let i = 0; i < itemInProgession; i += 1) {
    progression.push((i + 1) * firstItem * stepProgression);
  }
  return progression;
};

export default function playProgressionGame() {
  const quantityRound = getQuantityRound();
  const gameTask = 'What number is missing in the progression?';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const firstItem = getRandonInteger(1, 5);
    const stepProgression = getRandonInteger(2, 10);
    const gameQuestion = getProgression(firstItem, stepProgression);
    const itemOfHiddenNumber = getRandonInteger(0, (gameQuestion.length - 1));
    const hiddenNumber = gameQuestion[itemOfHiddenNumber];
    gameQuestion[itemOfHiddenNumber] = '..';
    const stringOfQuestion = gameQuestion.join(' ');
    correctAnswers.push(`${hiddenNumber}`);
    gameQuestions.push(`Question: ${stringOfQuestion}`);
  }
  playGame(gameTask, gameQuestions, correctAnswers);
}
