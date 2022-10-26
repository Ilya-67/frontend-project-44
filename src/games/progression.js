import playGame, { getQuantityRound } from '../index.js';
import getRandonInteger from '../utils.js';

const getProgression = () => {
  let progression = [];
  const itemInProgession = getRandonInteger(5, 10);
  const stepProgression = getRandonInteger(2, 10);
  for (let j = 0; j < itemInProgession; j += 1) {
    progression.push((j + 1) * stepProgression);
  }
  return progression;
}

export default function playProgressionGame() {
  const quantityRound = getQuantityRound();
  const gameTask = 'What number is missing in the progression?';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const gameQuestion = getProgression();
    const itemOfHiddenNumber = getRandonInteger(0, (gameQuestion.length - 1));
    const hiddenNumber = gameQuestion[itemOfHiddenNumber];
    gameQuestion[itemOfHiddenNumber] = '..';
    const stringOfQuestion = gameQuestion.join(' ');
    correctAnswers.push(`${hiddenNumber}`);
    gameQuestions.push(`Question: ${stringOfQuestion}`);
  }
  playGame(gameTask, gameQuestions, correctAnswers);
}
