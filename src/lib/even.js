import readlineSync from 'readline-sync';
import getRndInteger from './utils';

const isEven = (n) => {
  const answer = n % 2 === 0;
  return answer;
};

const evenGame = (userName) => {
  const gameStepsLimit = 3;
  const largestNumberLimit = 100;

  const isWin = (step) => {
    if (step === gameStepsLimit) {
      console.log(`Congratulations, ${userName}!`);
    }
  };

  for (let step = 1; step <= gameStepsLimit; step += 1) {
    const question = getRndInteger(largestNumberLimit);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      isWin(step);
    }
  }
};

export default evenGame;
