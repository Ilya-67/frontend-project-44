import { getComputerAnswer, getGreetings, getArrToQuestion, getUserAnswer, getRandonInteger } from '../src/index.js'

const fifthGame = () => {
    const userName = getGreetings();
    console.log('What number is missing in the progression?');
    for (let i = 1; i <= 3; i += 1) {
        let qtyInProgession = getRandonInteger(5, 10);
        let itemOfNumber = getRandonInteger(0, (qtyInProgession - 1));
        let stepProgression = getRandonInteger(2, 10);
        let result = getArrToQuestion(qtyInProgession, itemOfNumber, stepProgression);
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

export default fifthGame();
