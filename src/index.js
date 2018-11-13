import readlineSync from 'readline-sync';

const gameStepsLimit = 3;

const greeting = (gameRules = '') => {
  console.log(`Welcome to the Brain Games!\n${gameRules}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const playGame = (game, userName) => {
  for (let step = 1; step <= gameStepsLimit; step += 1) {
    const gameData = game();
    const gameStepQuestion = gameData[0];
    const gameStepCorrectAnswer = gameData[1];

    console.log(`Question: ${gameStepQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== gameStepCorrectAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameStepCorrectAnswer}'.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

const runGame = (game, gameRules) => {
  const userName = greeting(gameRules);
  playGame(game, userName);
};

export { runGame as default, greeting };
