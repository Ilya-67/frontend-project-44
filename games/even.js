import readlineSync from 'readline-sync';
import { getGreetings, getComputerAnswer, getUserAnswer } from '../src/index.js'

const secondGame = () => {
    const userName = getGreetings();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 1; i <= 3; i +=1) {
        const numberForQuestion = Math.trunc([Math.random() * 100]);
        console.log(`Question: ${numberForQuestion}`);
        let result = numberForQuestion % 2 ? 'no' : 'yes';
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

export default secondGame();
