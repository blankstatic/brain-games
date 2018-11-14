import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gameMaxValue = 100;
const gameMinValue = 10;

const findGcd = (a, b) => {
  if (b === 0) return a;
  return findGcd(b, a % b);
};

const gcdGame = () => {
  const leftValue = getRandomInteger(gameMaxValue, gameMinValue);
  const rigthValue = getRandomInteger(gameMaxValue, gameMinValue);
  return [`${leftValue} ${rigthValue}`, String(findGcd(leftValue, rigthValue))];
};

export default () => runGame(gcdGame, gameRules);
