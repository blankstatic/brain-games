import readlineSync from 'readline-sync';
import evenGame from './lib/even';

const greeting = (gameRules = '') => {
  console.log(`Welcome to the Brain Games!\n${gameRules}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const runGame = (game) => {
  switch (game) {
    case 'even': {
      const userName = greeting('Answer "yes" if number even otherwise answer "no".\n');
      evenGame(userName);
      break;
    }
    default:
      greeting();
      break;
  }
};

export default runGame;
