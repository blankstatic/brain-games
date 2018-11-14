import readlineSync from 'readline-sync';

const gameStepsLimit = 3;

const playGame = (game) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const nextGameRound = (step = 0) => {
    if (step === gameStepsLimit) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [question, correctAnswer] = game();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    nextGameRound(step + 1);
  };

  nextGameRound();
};

const runGame = (game = null, gameRules) => {
  console.log(`Welcome to the Brain Games!\n${gameRules}\n`);
  if (game) playGame(game);
};

export default runGame;
