import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'What is the result of the expression?';

const gameMaxValue = 10;
const gameMinValue = 1;

const hiddenSign = ['x', 'y'];

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;

const operations = [addition, subtraction, multiplication];
const symbols = ['+', '-', '*'];

const getDataCalc = (a, b, operation) => {
  const correctAnswer = String(operations[operation](a, b));
  const question = `${a} ${symbols[operation]} ${b}`;
  return [question, correctAnswer];
};

const getDataFindXY = (a, b, operation) => {
  const hiddenValue = getRandomInteger(2, 0);

  const values = [a, b];
  const valuesHidden = values.map((i, idx) => (idx === hiddenValue ? hiddenSign[hiddenValue] : i));

  const partQuestion = valuesHidden.join(` ${symbols[operation]} `);
  const operationResult = operations[operation](a, b);

  const question = `${partQuestion} = ${operationResult}`;
  const correctAnswer = String(values[hiddenValue]);
  return [question, correctAnswer];
};

const calcGame = () => {
  const a = getRandomInteger(gameMaxValue, gameMinValue);
  const b = getRandomInteger(gameMaxValue, gameMinValue);
  const operation = getRandomInteger(operations.length);
  const path = getRandomInteger(2, 0);

  const gameData = (path === 0 ? getDataCalc(a, b, operation) : getDataFindXY(a, b, operation));
  return gameData;
};

export default () => runGame(calcGame, gameRules);
