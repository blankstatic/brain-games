import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'Answer "yes" if number even otherwise answer "no".\n';

const gameMaxValue = 100;
const gameMinValue = 1;

const isEven = n => n % 2 === 0;

const evenGame = () => {
  const question = getRandomInteger(gameMaxValue, gameMinValue);
  return [question, isEven(question) ? 'yes' : 'no'];
};

export default () => runGame(evenGame, gameRules);
