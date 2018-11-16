import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'Find x in the expression.';

const gameMaxValue = 10;
const gameMinValue = 1;
const hiddenSymbol = 'x';

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;

const operations = [addition, subtraction, multiplication];
const symbols = ['+', '-', '*'];

const generateGameData = (a, b) => {
  const randomChooseOperation = getRandomInteger(operations.length);

  const operationResult = operations[randomChooseOperation](a, b);
  const question = `${hiddenSymbol} ${symbols[randomChooseOperation]} ${b} = ${operationResult}`;
  return [question, String(a)];
};

const calcGame = () => {
  const valueA = getRandomInteger(gameMaxValue, gameMinValue);
  const valueB = getRandomInteger(gameMaxValue, gameMinValue);

  const gameData = generateGameData(valueA, valueB);
  return gameData;
};

export default () => runGame(calcGame, gameRules);
