import readlineSync from 'readline-sync';

const firstGame = () => {
  console.log('Welcom to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
};

export default firstGame();
