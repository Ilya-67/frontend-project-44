import playRound from '../index.js';

export default function isNumberEvenGame() {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const qtyStep = 3;
  const gameQuestions = [];
  const results = [];
  for (let i = 1; i <= qtyStep; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * 100]);
    const result = numberForQuestion % 2 ? 'no' : 'yes';
    results.push(result);
    gameQuestions.push(`Question: ${numberForQuestion}`);
  }
  playRound(gameTask, gameQuestions, results);
}
