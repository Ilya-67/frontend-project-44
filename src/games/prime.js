import playRound from '../index.js';

export default function isNumberPrimeGame() {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const qtyStep = 3;
  const gameQuestions = [];
  const results = [];
  for (let i = 1; i <= qtyStep; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * 100]) + 1;
    let result;
    for (let j = 2; j <= numberForQuestion; j += 1) {
      const a = numberForQuestion % j;
      if (a === 0 && j < numberForQuestion) {
        result = 'no';
        break;
      } if (a === 0 && j === numberForQuestion) {
        result = 'yes';
      }
    }
    results.push(result);
    gameQuestions.push(`Question: ${numberForQuestion}`);
  }
  playRound(gameTask, gameQuestions, results);
}
