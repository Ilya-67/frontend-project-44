import readlineSync from 'readline-sync';

export function getGreetings() {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${userName}!`);
    return userName;
}

export const getNumberForExpression = () => {
    return Math.trunc([Math.random() * 100]);
}

export function getRandonInteger(min, max) {
    return Math.floor(Math.random() * (max -min + 1) ) + min;
    }

export function getNumberOperation() {
    const numberOperation = getRandonInteger(0, 2);
    return numberOperation;
}

export function getRandomMathOpertion(a, b, i) {
    let arrOperation1 = ['+', '-', '*'];
    const question = arrOperation1[i];
    return question;
}

export function getResultMathOperatin(a, b, i) {
    let arrOperation = [(a + b), (a - b), (a * b)];
    let result = arrOperation[i];
    return result;
}

export function getUserAnswer() {
    let userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
}

export function getComputerAnswer(userAnswer, result, userName) {
    let computerAnswer;
    if (userAnswer == result) {
        computerAnswer = 'Correct!';
    } else {
        computerAnswer = `"${userAnswer}" is wrong answer ;(. Correct answer  was "${result}". 
        Let\'s try again, ${userName}!`;
    }
    return computerAnswer;   
}

export function getArrToQuestion(qtyInProgession, itemOfNumber, stepProgression) {
    let arrToQuestion = [];
    for (let i = 0; i < qtyInProgession; i += 1) {
        arrToQuestion.push((i + 1) * stepProgression);                   
    }
    let result = arrToQuestion[itemOfNumber];
    arrToQuestion[itemOfNumber] = '..';
    var str = arrToQuestion.join(" ");
    console.log(`Question: ${str}`);
    return result;
}

export function getNumberIsPrime(numberForQuestion) {
    const arrPrimeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ];
    const result = arrPrimeNumber.includes(numberForQuestion) ? 'yes' : 'no';
    return result; 
}
