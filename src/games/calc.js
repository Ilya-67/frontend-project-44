import playGame, { setRoundsCount } from '../index.js';
import getRandonInteger from '../utils.js';

const getResultOfExpession = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const playCalcGame = () => {
  const roundsCount = setRoundsCount();
  const gameDescription = 'What is the result of the expression?';
  const firstItemOperation = 0;
  const operators = ['+', '-', '*'];
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const number1 = getRandonInteger();
    const number2 = getRandonInteger();
    const itemOperator = `${getRandonInteger(firstItemOperation, (operators.length - 1))}`;
    const roundResult = getResultOfExpession(number1, number2, operators[itemOperator]);
    const roundQuestion = `${number1} ${operators[itemOperator]} ${number2}`;
    correctAnswers.push(`${roundResult}`);
    gameQuestions.push(`${roundQuestion}`);
  }
  playGame(gameDescription, gameQuestions, correctAnswers);
};

export default playCalcGame;
