import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'What number is missing in the progression?';

const itemsCount = 10;
const startItemMax = 100;
const startItemMin = 1;
const stepLimit = 5;
const hiddenSymbol = '..';

const createProgression = (count, startItem, stepValue) => {
  const addItem = (item, step, limit, current = 0) => {
    if (current === limit) return item;
    return addItem(item + step, step, limit, current + 1);
  };

  const template = Array(count).fill(0);
  const progression = template.map((i, index) => addItem(startItem, stepValue, index));
  return progression;
};

const progressionHidden = (progression, index, symbols) => {
  const flow = progression.map((item, idx) => (index !== idx ? item : symbols));
  return flow;
};

const generateGameData = () => {
  const start = getRandomInteger(startItemMax, startItemMin);
  const step = getRandomInteger(stepLimit, 1);
  const hiddenIndex = getRandomInteger(itemsCount - 1);

  const progression = createProgression(itemsCount, start, step);
  const desiredFlow = progressionHidden(progression, hiddenIndex, hiddenSymbol);

  const question = desiredFlow.join(' ');
  const correctAnswer = String(progression[hiddenIndex]);
  return [question, correctAnswer];
};

const progressionGame = () => {
  const gameData = generateGameData();
  return gameData;
};

export default () => runGame(progressionGame, gameRules);
