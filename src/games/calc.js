import playGame, { getQuantityRound } from '../index.js';
import getRandonInteger from '../utils.js';

export function getQuestionForExpession(number1, number2, choiceOperation) {
  let question;
  switch (choiceOperation) {
    case '0':
      question = `${number1} + ${number2}`;
      break;
    case '1':
      question = `${number1} - ${number2}`;
      break;
    case '2':
      question = `${number1} * ${number2}`;
      break;
    default:
      console.log('add new case');
  }
  return question;
}

export function getResultExpession(number1, number2, choiceOperation) {
  let result;
  switch (choiceOperation) {
    case '0':
      result = number1 + number2;
      break;
    case '1':
      result = number1 - number2;
      break;
    case '2':
      result = number1 * number2;
      break;
    default:
      console.log('add new case');
  }
  return result;
}

export default function playCalcGame() {
  const quantityRound = getQuantityRound();
  const gameTask = 'What is the result of the expression?';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let i = 1; i <= quantityRound; i += 1) {
    const number1 = getRandonInteger(1, 100);
    const number2 = getRandonInteger(1, 100);
    const choiceOperation = `${getRandonInteger(0, 2)}`;
    const roundResult = getResultExpession(number1, number2, choiceOperation);
    const roundQuestion = getQuestionForExpession(number1, number2, choiceOperation);
    correctAnswers.push(`${roundResult}`);
    gameQuestions.push(`Question: ${roundQuestion}`);
  }
  playGame(gameTask, gameQuestions, correctAnswers);
}
