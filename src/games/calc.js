import getComputerAnswer from '../index.js';

function getRandonInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function getCalculatorGame() {
  const gameQuestion = 'What is the result of the expression?';
  const arrGameComputerQuestion = [];
  const arrResult = [];
  for (let i = 1; i < 4; i += 1) {
    const number1 = getRandonInteger(1, 100);
    const number2 = getRandonInteger(1, 100);
    const j = getRandonInteger(0, 2);
    const arrSignOfOperation = ['+', '-', '*'];
    const arrMathOperation = [(number1 + number2), (number1 - number2), (number1 * number2)];
    arrResult.push(`${arrMathOperation[j]}`); 
    arrGameComputerQuestion.push(`Question: ${number1} ${arrSignOfOperation[j]} ${number2}`);
  }
  const message = getComputerAnswer(gameQuestion, arrGameComputerQuestion, arrResult);
  console.log(message);
}
