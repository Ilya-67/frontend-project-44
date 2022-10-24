export default function getRandonInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isNumberPrime(number) {
  let result;
  for (let j = 2; j <= number; j += 1) {
    const a = number % j;
    if (a === 0 && j < number) {
      result = 'no';
      break;
    } if (a === 0 && j === number) {
      result = 'yes';
    }
  }
  return result;
}

export function getResultExpession(number1, number2, choiceOperation) {
  let question;
  let result;
  switch (choiceOperation) {
    case '0':
      question = `${number1} + ${number2}`;
      result = number1 + number2;
      break;
    case '1':
      question = `${number1} - ${number2}`;
      result = number1 - number2;
      break;
    case '2':
      question = `${number1} * ${number2}`;
      result = number1 * number2;
      break;
    default:
      console.log('add new case');
  }
  return { result, question };
}

export function getNumberGCD(min, max) {
  let minNumber = min;
  let maxNumber = max;
  let result;
  while (minNumber > 0) {
    const divisiorRemainder = maxNumber % minNumber;
    if (divisiorRemainder === 0) {
      result = minNumber;
      break;
    } else {
      maxNumber = minNumber;
      minNumber = divisiorRemainder;
    }
  }
  return result;
}
