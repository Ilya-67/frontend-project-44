
import { getComputerAnswer, getGreetings, getRandonInteger, getUserAnswer } from '../src/index.js'

const forthGame = () => {
    const userName = getGreetings();
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 1; i <= 3; i += 1) {
        let number1 = getRandonInteger(1, 1000);
        let number2 = getRandonInteger(1, 1000);
        let x = (number1 > number2) ? number1 : number2;
        let y = (number2 < number1) ? number2 : number1;
        console.log(`Question: ${number1} ${number2}`);
        let result = 0;
        while (y > 0) {
            let z = x % y;
            if (z == 0) { 
                result = y;
                // console.log(result);
                break;
            } else {
                x = y;
                y = z;
            }
        }
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

export default forthGame();