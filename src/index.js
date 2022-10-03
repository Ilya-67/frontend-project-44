import readlineSync from 'readline-sync';

export function getGreetings() {
    console.log('Welcom to the Brain Games!');
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
    const numberOperation = getRandonInteger(0, 4);
    return numberOperation;
}

export function getRandomMathOpertion(a, b, i) {
    let arrOperation1 = ['+', '-', '*', '/', '**'];
    const question = arrOperation1[i];
    return question;
}

export function getResultMathOperatin(a, b, i) {
    let arrOperation = [(a + b), (a - b), (a * b), (a / b), (a ** b)];
    const result = arrOperation[i];
    return result;
}