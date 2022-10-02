import readlineSync from 'readline-sync';

const secondGame = () => {
    console.log('Welcom to the Brain Games!');
    const userName = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${userName}!`);
    console.log('Anser "yes" if number is even, otherwise "no".');
    let numberForQuestion = 0;
    for (let i = 1; i <= 3; i +=1) {
        let xTmpVar = Math.random();
        numberForQuestion = Math.trunc([xTmpVar * 100]);
        console.log(`Question: ${numberForQuestion}`);
        let result = numberForQuestion % 2 ? 'no' : 'yes';
        let userAnswer = readlineSync.question('Your anser: ');
        if (userAnswer === result) {
            console.log('Correct!');
        } if (userAnswer !== result && userAnswer !== 'yes') {
            console.log(`"${userAnswer}" is wrong answer. Correct answer  was "yes". Let\'s try again, ${userName}!`);
            break;
        } if (userAnswer !== result && userAnswer !== 'no') {
            console.log(`"${userAnswer}" is wrong answer. Correct answer  was "no". Let\'s try again, ${userName}!`);
            break;
        } 
        if (i === 3) {
            console.log(`Congratulation, ${userName}!`);
        }
    }
}

export default secondGame();