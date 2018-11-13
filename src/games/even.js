import getRandomInteger from '../utils';
import { runGame } from '..';

const largestNumberLimit = 100;

const isEven = n => n % 2 === 0;

const evenGame = () => {
  const question = () => getRandomInteger(largestNumberLimit);
  const correctAnswer = question => isEven(question) ? 'yes' : 'no';

  runGame(question, correctAnswer, 'Answer "yes" if number even otherwise answer "no".\n');
};

export default evenGame;
