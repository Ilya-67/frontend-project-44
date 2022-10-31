import readlineSync from 'readline-sync';

export const getQuantityRound = () => {
  const quantityRound = 3;
  return quantityRound;
};

const playGame = (gameDescription, gameQuestions, correctAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  for (let i = 0; i < correctAnswers.length; i += 1) {
    console.log(`Question: ${gameQuestions[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswers[i] !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer  was "${correctAnswers[i]}". 
      Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
