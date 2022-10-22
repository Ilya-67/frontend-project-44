import getComputerAnswer from '../index.js';

function getRandonInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function getProgressionGame() {
  const gameQuestion = 'What number is missing in the progression?';
  const arrGameComputerQuestion = [];
  const arrResult = [];
  for (let i = 1; i < 4; i += 1) {
    const qtyInProgession = getRandonInteger(5, 10);
    const itemOfHiddenNumber = getRandonInteger(0, (qtyInProgession - 1));
    const stepProgression = getRandonInteger(2, 10);
    const arrToQuestion = [];
    for (let j = 0; j < qtyInProgession; j += 1) {
      arrToQuestion.push((j + 1) * stepProgression);
    }
    const hiddenNumber = arrToQuestion[itemOfHiddenNumber];
    arrToQuestion[itemOfHiddenNumber] = '..';
    const stringOfArrToQuestion = arrToQuestion.join(' ');
    arrResult.push(`${hiddenNumber}`);
    arrGameComputerQuestion.push(`Question: ${stringOfArrToQuestion}`);
  }
  const message = getComputerAnswer(gameQuestion, arrGameComputerQuestion, arrResult);
  console.log(message);
}
