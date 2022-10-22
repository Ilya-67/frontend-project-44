import getComputerAnswer from '../index.js';

export default function isNumberPrimeGame() {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arrGameComputerQuestion = [];
  const arrResult = [];
  for (let i = 1; i < 4; i++) {
  const numberForQuestion = Math.trunc([Math.random() * 100]) + 1;
  let result;
  for (let i = 2; i <= numberForQuestion; i += 1) {
    const a = numberForQuestion % i;
    if (a === 0 && i < numberForQuestion) {
      result = 'no';
      break;
    } if (a === 0 && i === numberForQuestion) {
      result = 'yes';
    }
  }
  arrResult.push(result); 
  arrGameComputerQuestion.push(`Question: ${numberForQuestion}`);
  }
  const message = getComputerAnswer(gameQuestion, arrGameComputerQuestion, arrResult);
  console.log(message);
}
