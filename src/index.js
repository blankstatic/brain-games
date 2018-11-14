import readlineSync from 'readline-sync';

const gameStepsLimit = 3;

const playGame = (game) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const gameCycle = (step = 0) => {
    if (step === gameStepsLimit) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const [gameStepQuestion, gameStepCorrectAnswer] = game();

    console.log(`Question: ${gameStepQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== gameStepCorrectAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameStepCorrectAnswer}'.\nLet's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
    return gameCycle(step + 1);
  };

  gameCycle();
};

const runGame = (game = null, gameRules) => {
  console.log(`Welcome to the Brain Games!\n${gameRules}\n`);
  if (game) playGame(game);
};

export default runGame;
