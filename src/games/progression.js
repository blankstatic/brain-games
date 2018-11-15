import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'What number is missing in the progression?';

const countProgressionElements = 10;
const startProgressionMax = 100;
const startProgressionMin = 90;
const limitStepProgression = 10;
const hiddenElementSymbols = '..';

const generateGameData = () => {
  const startProgression = getRandomInteger(startProgressionMax, startProgressionMin);
  const progressionStep = getRandomInteger(limitStepProgression, 1);
  const hiddenElementIndex = getRandomInteger(countProgressionElements, 1);

  const progression = [];

  let progressionElement = startProgression;
  let correctAnswer = '';

  for (let element = 1; element <= countProgressionElements; element += 1) {
    if (element !== hiddenElementIndex) {
      progression.push(progressionElement);
    } else {
      progression.push(hiddenElementSymbols);
      correctAnswer = String(progressionElement);
    }
    progressionElement += progressionStep;
  }
  console.log(progression);
  return [progression.join(' '), correctAnswer];
};

const progressionGame = () => {
  const gameData = generateGameData();
  return gameData;
};

export default () => runGame(progressionGame, gameRules);
