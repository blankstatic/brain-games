import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameMaxValue = 30;
const gameMinValue = 1;

const isPrime = (n, i = 2) => {
  if (n <= 2) return n === 2;
  if (n % i === 0) return false;
  if (i * i > n) return true;
  return isPrime(n, i + 1);
};

const generateGameData = () => {
  const question = getRandomInteger(gameMaxValue, gameMinValue);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const primeGame = () => {
  const gameData = generateGameData();
  return gameData;
};

export default () => runGame(primeGame, gameRules);
