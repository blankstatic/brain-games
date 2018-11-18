import readlineSync from 'readline-sync';
import even from './games/even';
import calc from './games/calc';
import gcd from './games/gcd';
import progression from './games/progression';
import prime from './games/prime';

const gameset = {
  'brain-even': even,
  'brain-calc': calc,
  'brain-gcd': gcd,
  'brain-progression': progression,
  'brain-prime': prime,
};

const showGames = () => {
  console.log('Available games set:');
  const titles = Object.keys(gameset);
  const games = Object.values(gameset);
  const selectedGame = readlineSync.keyInSelect(titles, 'Сhoose one of them and enjoy :)', { cancel: 'EXIT' });
  if (selectedGame >= 0) {
    console.log(`\nSelected <${titles[selectedGame]}> running...\n`);
    games[selectedGame]();
  } else {
    console.log('Anyway, I\'ll see you tomorrow.');
  }
};

export default showGames;
