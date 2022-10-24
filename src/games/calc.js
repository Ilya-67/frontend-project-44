import playGame from '../index.js';
import getRandonInteger, { getResultExpession } from '../utils.js';

export default function getCalc(qtyRound) {
  const gameTask = 'What is the result of the expression?';
  const gameQuestions = [];
  const results = [];
  for (let i = 1; i <= qtyRound; i += 1) {
    const number1 = getRandonInteger(1, 100);
    const number2 = getRandonInteger(1, 100);
    const choiceOperation = `${getRandonInteger(0, 2)}`;
    const roundResult = getResultExpession(number1, number2, choiceOperation);
    results.push(`${roundResult.result}`);
    gameQuestions.push(`Question: ${roundResult.question}`);
  }
  playGame(gameTask, gameQuestions, results);
}
