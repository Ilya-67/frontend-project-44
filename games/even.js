import readlineSync from 'readline-sync';
import { getGreetings } from '../src/index.js'

const secondGame = () => {
    const userName = getGreetings();
    console.log('Anser "yes" if number is even, otherwise "no".');
    for (let i = 1; i <= 3; i +=1) {
        const numberForQuestion = Math.trunc([Math.random() * 100]);
        console.log(`Question: ${numberForQuestion}`);
        let result = numberForQuestion % 2 ? 'no' : 'yes';
        let userAnswer = readlineSync.question('Your anser: ');
        if (userAnswer === result) {
            console.log('Correct!');
        } if (userAnswer !== result) {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer  was "${result}". 
            Let\'s try again, ${userName}!`);
            break;
        }  
        if (i === 3) {
            console.log(`Congratulation, ${userName}!`);
        }
    }
}

export default secondGame();
