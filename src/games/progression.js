import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'What number is missing in the progression?';

const progressionItemsCount = 10;
const startProgressionMax = 100;
const startProgressionMin = 1;
const stepProgressionLimit = 5;
const hiddenItemSymbol = '..';

const createProgression = (progressionLength, startItem, stepValue) => {
  const addItems = (progression, item, step, index = 0) => {
    if (index !== progressionLength) {
      progression.push(item);
      addItems(progression, item + step, step, index + 1);
    }
  };
  const progression = [];
  addItems(progression, startItem, stepValue);
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
