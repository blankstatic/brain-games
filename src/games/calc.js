import getRandomInteger from '../utils';
import { runGame } from '..';

const largestNumberLimit = 100;

const calcGame = () => {
    const question = () => 1;
    const correctAnswer = question => 1 === 1 ? '1' : '2';

    runGame(question, correctAnswer, 'What is the result of the expression?\n');
};

export default calcGame;