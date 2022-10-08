import { getGreetings, getComputerAnswer, getUserAnswer } from '../src/index.js';

const secondGame = () => {
  const userName = getGreetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * 100]);
    console.log(`Question: ${numberForQuestion}`);
    const result = numberForQuestion % 2 ? 'no' : 'yes';
    const userAnswer = getUserAnswer();
    const computerAnswer = getComputerAnswer(userAnswer, result, userName);
    console.log(computerAnswer);
    if (computerAnswer !== 'Correct!') {
      break;
    } 
    if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default secondGame();
