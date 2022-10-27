import playGame, { getQuantityRound } from '../index.js';
import getRandonInteger from '../utils.js';

const getResultOfExpession = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return +`${number1}` + +`${number2}`;
    case '-':
      return `${number1}` - `${number2}`;
    case '*':
      return `${number1}` * `${number2}`;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
}

export default function playCalcGame() {
  const quantityRound = getQuantityRound();
  const gameTask = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const number1 = getRandonInteger(1, 100);
    const number2 = getRandonInteger(1, 100);
    const itemOperator = `${getRandonInteger(0, 2)}`;
    const roundResult = getResultOfExpession(number1, number2, operators[itemOperator]);
    const roundQuestion = `${number1} ${operators[itemOperator]} ${number2}`;
    correctAnswers.push(`${roundResult}`);
    gameQuestions.push(`Question: ${roundQuestion}`);
  }
  playGame(gameTask, gameQuestions, correctAnswers);
}
