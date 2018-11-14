import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const gameMaxValue = 100;
const gameMinValue = 1;

const isEven = n => n % 2 === 0;

const evenGame = () => {
  const question = getRandomInteger(gameMaxValue, gameMinValue);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(evenGame, gameRules);
