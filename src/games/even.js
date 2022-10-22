import getComputerAnswer from '../index.js';

export default function isNumberEvenGame() {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const arrGameComputerQuestion = [];
  const arrResult = [];
  for (let i = 1; i < 4; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * 100]);
    const result = numberForQuestion % 2 ? 'no' : 'yes';
    arrResult.push(result);
    arrGameComputerQuestion.push(`Question: ${numberForQuestion}`);
  }
  const message = getComputerAnswer(gameQuestion, arrGameComputerQuestion, arrResult);
  console.log(message);
}
