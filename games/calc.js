import readlineSync from 'readline-sync';
import { getGreetings, getRandonInteger, getRandomMathOpertion, getNumberOperation,
     getResultMathOperatin, getUserAnswer, getComputerAnswer } from '../src/index.js'

const thirdGame = () => {
    const userName = getGreetings();
    console.log('What is the result of the expression?');
    for (let i = 1; i <= 3; i +=1) {
        let a = getRandonInteger(1, 100);
        let b = getRandonInteger(1, 10);
        let j = getNumberOperation();
        const question = getRandomMathOpertion(a, b, j);
        let result = getResultMathOperatin(a, b, j);
        console.log(`Question: ${a} ${question} ${b}`);
        // console.log(result); 
        let userAnswer = getUserAnswer();
        let computerAnswer = getComputerAnswer(userAnswer, result, userName);
        console.log(computerAnswer);
        if (computerAnswer !== 'Correct!') {
            break;
        }
        if (i === 3) {
            console.log(`Congratulation, ${userName}!`);
        }
    }
}

export default thirdGame();
