import playGame from '../index.js';
import getRandonInteger from '../utils.js';

export default function getProgression(qtyRound) {
  const gameTask = 'What number is missing in the progression?';
  const gameQuestions = [];
  const results = [];
  for (let i = 1; i <= qtyRound; i += 1) {
    const qtyInProgession = getRandonInteger(5, 10);
    const itemOfHiddenNumber = getRandonInteger(0, (qtyInProgession - 1));
    const stepProgression = getRandonInteger(2, 10);
    const Question = [];
    for (let j = 0; j < qtyInProgession; j += 1) {
      Question.push((j + 1) * stepProgression);
    }
    const hiddenNumber = Question[itemOfHiddenNumber];
    Question[itemOfHiddenNumber] = '..';
    const stringOfQuestion = Question.join(' ');
    results.push(`${hiddenNumber}`);
    gameQuestions.push(`Question: ${stringOfQuestion}`);
  }
  playGame(gameTask, gameQuestions, results);
}
