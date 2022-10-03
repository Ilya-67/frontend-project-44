import readlineSync from 'readline-sync';
import { getGreetings, getRandonInteger, getRandomMathOpertion, getNumberOperation, getResultMathOperatin } from '../src/index.js'

const thirdGame = () => {
    const userName = getGreetings();
    console.log('What is the result of the expression?');
    for (let i = 1; i <= 3; i +=1) {
        let a = getRandonInteger(1, 100);
        let b = getRandonInteger(1, 10);
        let j = getNumberOperation();
        const question = getRandomMathOpertion(a, b, j);
        let result = getResultMathOperatin(a, b, j);
        result = Math.round(result * 100) / 100;
        console.log(`Question: ${a} ${question} ${b}`);
        // console.log(result); 
        let userAnswer = readlineSync.question('Your anser: ');
        if (userAnswer == result) {
            console.log('Correct!');
        } if (userAnswer != result) {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer  was "${result}". 
            Let\'s try again, ${userName}!`);
            break;
        }  
        if (i === 3) {
            console.log(`Congratulation, ${userName}!`);
        }
    }
}

export default thirdGame();
