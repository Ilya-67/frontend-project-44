import {
  getComputerAnswer, getGreetings, getArrToQuestion, getUserAnswer, getRandonInteger
} from '../src/index.js';

export default function fifthGame() {
  const userName = getGreetings();
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    const qtyInProgession = getRandonInteger(5, 10);
    const itemOfNumber = getRandonInteger(0, (qtyInProgession - 1));
    const stepProgression = getRandonInteger(2, 10);
    const result = getArrToQuestion(qtyInProgession, itemOfNumber, stepProgression);
    const userAnswer = +getUserAnswer();
    const computerAnswer = getComputerAnswer(userAnswer, result, userName);
    console.log(computerAnswer);
    if (computerAnswer !== 'Correct!') {
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
