import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'Find \'x\' or \'y\' in the expression.';

const gameMaxValue = 10;
const gameMinValue = 1;
const hiddenSign = ['x', 'y'];

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;

const operations = [addition, subtraction, multiplication];
const symbols = ['+', '-', '*'];

const generateGameData = (a, b) => {
  const randomChooseOperation = getRandomInteger(operations.length);
  const hiddenValue = getRandomInteger(2, 0);

  const values = [a, b];
  const valuesHidden = values.map((i, idx) => (idx === hiddenValue ? hiddenSign[hiddenValue] : i));

  const partQuestion = valuesHidden.join(` ${symbols[randomChooseOperation]} `);
  const operationResult = operations[randomChooseOperation](a, b);

  const question = `${partQuestion} = ${operationResult}`;
  const correctAnswer = String(values[hiddenValue]);
  return [question, correctAnswer];
};

const findxyGame = () => {
  const valueA = getRandomInteger(gameMaxValue, gameMinValue);
  const valueB = getRandomInteger(gameMaxValue, gameMinValue);

  const gameData = generateGameData(valueA, valueB);
  return gameData;
};

export default () => runGame(findxyGame, gameRules);
