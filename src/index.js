import readlineSync from 'readline-sync';

export default function playRound(gameTask, gameQuestions, results) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);
  let message;
  for (let i = 0; i < results.length; i += 1) {
    console.log(gameQuestions[i]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (results[i] !== userAnswer) {
      message = `"${userAnswer}" is wrong answer ;(. Correct answer  was "${results[i]}". 
Let's try again, ${userName}!`;
      break;
    } if (results[i] === userAnswer) {
      console.log('Correct!');
    }
    message = `Congratulations, ${userName}!`;
  }
  console.log(message);
}
