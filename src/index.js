import readlineSync from 'readline-sync';

export const getQuantityRound = () => {
  const quantityRound = 3;
  return quantityRound;
};

export default function playGame(gameTask, gameQuestions, correctAnswers) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);
  let message;
  for (let i = 0; i < correctAnswers.length; i += 1) {
    console.log(gameQuestions[i]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswers[i] !== userAnswer) {
      message = `"${userAnswer}" is wrong answer ;(. Correct answer  was "${correctAnswers[i]}". 
Let's try again, ${userName}!`;
      break;
    } if (correctAnswers[i] === userAnswer) {
      console.log('Correct!');
    }
    message = `Congratulations, ${userName}!`;
  }
  console.log(message);
}
