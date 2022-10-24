import playRound from '../index.js';
import getRandonInteger from '../utils.js';

export default function getCalc() {
  const gameTask = 'What is the result of the expression?';
  const qtyStep = 3;
  const gameQuestions = [];
  const results = [];
  for (let i = 1; i <= qtyStep; i += 1) {
    const number1 = getRandonInteger(1, 100);
    const number2 = getRandonInteger(1, 100);
    const choiceOption = `${getRandonInteger(0, 2)}`;
    let question;
    let result;
    switch (choiceOption) {
      case '0':
        question = `${number1} + ${number2}`;
        result = number1 + number2;
        break;
      case '1':
        question = `${number1} - ${number2}`;
        result = number1 - number2;
        break;
      case '2':
        question = `${number1} * ${number2}`;
        result = number1 * number2;
        break;
      default:
        console.log('add new case');
    }
    results.push(`${result}`);
    gameQuestions.push(`Question: ${question}`);
  }
  playRound(gameTask, gameQuestions, results);
}
