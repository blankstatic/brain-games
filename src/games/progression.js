import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'What number is missing in the progression?';

const countProgressionItems = 10;
const startProgressionMax = 10;
const startProgressionMin = 1;
const limitStepProgression = 10;
const hiddenItemSymbols = '..';

const getAndHideItemProgression = (progression, index, hiddenSymbols) => {
  const hiddenItem = progression.splice(index, 1, hiddenSymbols);
  return String(hiddenItem);
};

const progressionToString = progression => progression.join(' ');

const fillProgression = (progression, item, step, itemsLimit, currentIndex = 0) => {
  if (currentIndex !== itemsLimit) {
    progression.push(item);
    fillProgression(progression, item + step, step, itemsLimit, currentIndex + 1);
  }
};

const generateGameData = () => {
  const startProgression = getRandomInteger(startProgressionMax, startProgressionMin);
  const progressionStep = getRandomInteger(limitStepProgression, 1);
  const hiddenItemIndex = getRandomInteger(countProgressionItems - 1);
  const progression = [];

  fillProgression(progression, startProgression, progressionStep, countProgressionItems);

  const correctAnswer = getAndHideItemProgression(progression, hiddenItemIndex, hiddenItemSymbols);
  const question = progressionToString(progression);
  return [question, correctAnswer];
};

const progressionGame = () => {
  const gameData = generateGameData();
  return gameData;
};

export default () => runGame(progressionGame, gameRules);
