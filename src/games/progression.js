import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'What number is missing in the progression?';

const progressionItemsCount = 10;
const startProgressionMax = 100;
const startProgressionMin = 1;
const stepProgressionLimit = 5;
const hiddenItemSymbol = '..';

const createProgression = (progressionLength, startItem, stepValue) => {
  const addItem = (item, step, limit, current = 0) => {
    if (current === limit) return item;
    return addItem(item + step, step, limit, current + 1);
  };

  const progressionTemplate = Array(progressionLength).fill(0);
  const progression = progressionTemplate.map((i, index) => addItem(startItem, stepValue, index));
  return progression;
};

const progressionWithHiddenItem = (progression, index, symbols) => {
  const flow = progression.map((item, idx) => (index !== idx ? item : symbols));
  return flow;
};

const generateGameData = () => {
  const startProgression = getRandomInteger(startProgressionMax, startProgressionMin);
  const progressionStep = getRandomInteger(stepProgressionLimit, 1);
  const hiddenItemIndex = getRandomInteger(progressionItemsCount - 1);

  const progression = createProgression(progressionItemsCount, startProgression, progressionStep);
  const desiredFlow = progressionWithHiddenItem(progression, hiddenItemIndex, hiddenItemSymbol);

  const question = desiredFlow.join(' ');
  const correctAnswer = String(progression[hiddenItemIndex]);
  return [question, correctAnswer];
};

const progressionGame = () => {
  const gameData = generateGameData();
  return gameData;
};

export default () => runGame(progressionGame, gameRules);
