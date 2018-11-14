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

const randomCalculateGameData = (a, b) => {
  const randomChooseOperation = getRandomInteger(operations.length);

  const operationResult = operations[randomChooseOperation](a, b);
  const fullStringOperation = `${a} ${symbols[randomChooseOperation]} ${b}`;
  return [fullStringOperation, String(operationResult)];
};

const calcGame = () => {
  const leftValue = getRandomInteger(gameMaxValue, gameMinValue);
  const rigthValue = getRandomInteger(gameMaxValue, gameMinValue);
  return randomCalculateGameData(leftValue, rigthValue);
};

export default () => runGame(calcGame, gameRules);
