import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'What number is missing in the progression?';

const countProgressionItems = 10;
const startProgressionMax = 100;
const startProgressionMin = 1;
const limitStepProgression = 5;
const hiddenItemSymbols = '..';

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

const getAndHideItemProgression = (progression, index, hiddenSymbols) => {
  const hiddenItem = progression.splice(index, 1, hiddenSymbols);
  return String(hiddenItem);
};

const generateGameData = () => {
  const startProgression = getRandomInteger(startProgressionMax, startProgressionMin);
  const progressionStep = getRandomInteger(limitStepProgression, 1);
  const hiddenItemIndex = getRandomInteger(countProgressionItems - 1);

  const progression = createProgression(countProgressionItems, startProgression, progressionStep);

  const correctAnswer = getAndHideItemProgression(progression, hiddenItemIndex, hiddenItemSymbols);
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => {
  const gameData = generateGameData();
  return gameData;
};

export default () => runGame(progressionGame, gameRules);
