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
  const valueA = getRandomInteger(gameMaxValue, gameMinValue);
  const valueB = getRandomInteger(gameMaxValue, gameMinValue);

  const question = `${valueA} ${valueB}`;
  const correctAnswer = String(findGcd(valueA, valueB));
  return [question, correctAnswer];
};

export default () => runGame(gcdGame, gameRules);
