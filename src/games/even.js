import playGame from '../index.js';

export default function isNumberEven(qtyRound) {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameQuestions = [];
  const results = [];
  for (let i = 1; i <= qtyRound; i += 1) {
    const numberForQuestion = Math.trunc([Math.random() * 100]);
    const result = numberForQuestion % 2 ? 'no' : 'yes';
    results.push(result);
    gameQuestions.push(`Question: ${numberForQuestion}`);
  }
  playGame(gameTask, gameQuestions, results);
}
