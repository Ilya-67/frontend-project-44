import { getGreetings, getComputerAnswer, getUserAnswer, getNumberIsPrime } from '../src/index.js'

const sixthGame = () => {
    const userName = getGreetings();
    console.log('Anser "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 1; i <= 3; i +=1) {
        const numberForQuestion = Math.trunc([Math.random() * 100]);
        console.log(`Question: ${numberForQuestion}`);
        let result = getNumberIsPrime(numberForQuestion);
        let userAnswer = getUserAnswer();
        let computerAnswer = getComputerAnswer(userAnswer, result, userName);
        console.log(computerAnswer);
        if (computerAnswer !== 'Correct!') {
            break;
        } 
        if (i === 3) {
            console.log(`Congratulations, ${userName}!`);
        }
    }
}

export default sixthGame();