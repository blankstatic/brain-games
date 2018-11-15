import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'What number is missing in the progression?';

const countProgressionElements = 10;
const startProgressionMax = 10;
const startProgressionMin = 1;
const limitStepProgression = 10;
const hiddenElementSymbols = '..';

const hideElementInProgression = (progression, index) => {
  const hiddenElement = progression.splice(index, 1, hiddenElementSymbols);
  return String(hiddenElement);
};

const progressionToString = progression => progression.join(' ');

const fillProgression = (progression, element, step, elementsLimit, currentIndex = 0) => {
  if (currentIndex === elementsLimit) return;
  progression.push(element);
  fillProgression(progression, element + step, step, elementsLimit, currentIndex + 1);
};

const generateGameData = () => {
  const startProgression = getRandomInteger(startProgressionMax, startProgressionMin);
  const progressionStep = getRandomInteger(limitStepProgression, 1);
  const hiddenElementIndex = getRandomInteger(countProgressionElements - 1);
  const progression = [];

  fillProgression(progression, startProgression, progressionStep, countProgressionElements);

  const correctAnswer = hideElementInProgression(progression, hiddenElementIndex);
  const question = progressionToString(progression);
  return [question, correctAnswer];
};

const progressionGame = () => {
  const gameData = generateGameData();
  return gameData;
};

export default () => runGame(progressionGame, gameRules);
