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
};

const playCalcGame = () => {
  const quantityRound = getQuantityRound();
  const gameDescription = 'What is the result of the expression?';
  const minLimitedNumber = 1;
  const maxLimitedNumber = 100;
  const firstItemOperation = 0;
  const operators = ['+', '-', '*'];
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const number1 = getRandonInteger(maxLimitedNumber, maxLimitedNumber);
    const number2 = getRandonInteger(minLimitedNumber, maxLimitedNumber);
    const itemOperator = `${getRandonInteger(firstItemOperation, (operators.length - 1))}`;
    const roundResult = getResultOfExpession(number1, number2, operators[itemOperator]);
    const roundQuestion = `${number1} ${operators[itemOperator]} ${number2}`;
    correctAnswers.push(`${roundResult}`);
    gameQuestions.push(`${roundQuestion}`);
  }
  playGame(gameDescription, gameQuestions, correctAnswers);
};

export default playCalcGame;
