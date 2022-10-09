import readlineSync from 'readline-sync';

export function getGreetings() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function getNumberForExpression() {
  return Math.trunc([Math.random() * 100]);
}

export function getRandonInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getNumberOperation() {
  const numberOperation = getRandonInteger(0, 2);
  return numberOperation;
}

export function getRandomMathOpertion(a, b, i) {
  const arrOperation1 = ['+', '-', '*'];
  const question = arrOperation1[i];
  return question;
}

export function getResultMathOperatin(a, b, i) {
  const arrOperation = [(a + b), (a - b), (a * b)];
  const result = arrOperation[i];
  return result;
}

export function getUserAnswer() {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

export function getComputerAnswer(userAnswer, result, userName) {
  let computerAnswer;
  if (userAnswer === result) {
    computerAnswer = 'Correct!';
  } else {
    computerAnswer = `"${userAnswer}" is wrong answer ;(. Correct answer  was "${result}". 
    Let's try again, ${userName}!`;
  }
  return computerAnswer;
}

export function getArrToQuestion(qtyInProgession, itemOfNumber, stepProgression) {
  const arrToQuestion = [];
  for (let i = 0; i < qtyInProgession; i += 1) {
    arrToQuestion.push((i + 1) * stepProgression);
  }
  const result = arrToQuestion[itemOfNumber];
  arrToQuestion[itemOfNumber] = '..';
  const str = arrToQuestion.join(' ');
  console.log(`Question: ${str}`);
  return result;
}

export function getNumberIsPrime(numberForQuestion) {
  let result;
  for (let i = 2; i <= numberForQuestion; i += 1) {
    const a = numberForQuestion % i;
    if (a === 0 && i < numberForQuestion) {
      result = 'no';
      break;
    } if (a === 0 && i === numberForQuestion) {
      result = 'yes';
    }
  }
  return result;
}
