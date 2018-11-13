import readlineSync from 'readline-sync';

const gameStepsLimit = 3;

const greeting = (gameRules = '') => {
  console.log(`Welcome to the Brain Games!\n${gameRules}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const playGame = (question, correctAnswer, userName) => {
  for (let step = 1; step <= gameStepsLimit; step += 1) {
    const gameStepQuestion = question();
    const gameStepCorrectAnswer = correctAnswer(gameStepQuestion);

    console.log(`Question: ${gameStepQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== gameStepCorrectAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameStepCorrectAnswer}'.\nLet's try again, ${userName}!`);
    } else {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const runGame = (question, correctAnswer, gameRules) => {
  const userName = greeting(gameRules);
  playGame(question, correctAnswer, userName);
};

export { runGame, greeting };
