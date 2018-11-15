import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'What is the result of the expression?';

const gameMaxValue = 10;
const gameMinValue = 1;

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;

const operations = [addition, subtraction, multiplication];
const symbols = ['+', '-', '*'];

const generateGameData = (a, b) => {
  const randomChooseOperation = getRandomInteger(operations.length);

  const correctAnswer = operations[randomChooseOperation](a, b);
  const question = `${a} ${symbols[randomChooseOperation]} ${b}`;
  return [question, String(correctAnswer)];
};

const calcGame = () => {
  const valueA = getRandomInteger(gameMaxValue, gameMinValue);
  const valueB = getRandomInteger(gameMaxValue, gameMinValue);

  const gameData = generateGameData(valueA, valueB);
  return gameData;
};

export default () => runGame(calcGame, gameRules);
