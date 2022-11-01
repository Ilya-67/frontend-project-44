import playGame, { setRoundsCount } from '../index.js';
import getRandonInteger from '../utils.js';

const getProgression = (firstItem, step, itemInProgession) => {
  const progression = [];
  for (let i = 0; i < itemInProgession; i += 1) {
    progression.push((i + 1) * firstItem * step);
  }
  return progression;
};

const playProgressionGame = () => {
  const roundsCount = setRoundsCount();
  const gameDescription = 'What number is missing in the progression?';
  const lowerStepLimit = 2;
  const upperStepLimit = 10;
  const minValueFirstItem = 1;
  const maxValueFirstItem = 5;
  const minItemsCount = 5;
  const maxItemsCount = 10;
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const firstItem = getRandonInteger(minValueFirstItem, maxValueFirstItem);
    const step = getRandonInteger(lowerStepLimit, upperStepLimit);
    const itemInProgession = getRandonInteger(minItemsCount, maxItemsCount);
    const gameQuestion = getProgression(firstItem, step, itemInProgession);
    const itemOfHiddenNumber = getRandonInteger(0, (gameQuestion.length - 1));
    const hiddenNumber = gameQuestion[itemOfHiddenNumber];
    gameQuestion[itemOfHiddenNumber] = '..';
    const stringOfQuestion = gameQuestion.join(' ');
    correctAnswers.push(`${hiddenNumber}`);
    gameQuestions.push(`${stringOfQuestion}`);
  }
  playGame(gameDescription, gameQuestions, correctAnswers);
};

export default playProgressionGame;
