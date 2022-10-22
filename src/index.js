import readlineSync from 'readline-sync';

export default function getComputerAnswer(gameQuestion, arrGameComputerQuestion, arrResult) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(gameQuestion);
  let message;
  for (let i = 0; i < 3; i += 1) {
    console.log(arrGameComputerQuestion[i]);
    const userAnswer = readlineSync.question('Your answer: ');;
    if (arrResult[i] !== userAnswer) {
      message = `"${userAnswer}" is wrong answer ;(. Correct answer  was "${arrResult[i]}". 
Let's try again, ${userName}!`;
      break;
    } if (arrResult[i] === userAnswer) {
      console.log('Correct!');
    }
    message = `Congratulations, ${userName}!`;
  }
  return message;
}