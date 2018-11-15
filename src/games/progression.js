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

  let progressionElement = startProgression;
  let question = '';
  let correctAnswer = '';

  for (let element = 1; element <= countProgressionElements; element += 1) {
    if (element !== hiddenElementIndex) {
      question = `${question} ${progressionElement}`;
    } else {
      question = `${question} ${hiddenElementSymbols}`;
      correctAnswer = String(progressionElement);
    }
    progressionElement += progressionStep;
  }

  return [question, correctAnswer];
};

const progressionGame = () => {
  const gameData = generateGameData();
  return gameData;
};

export default () => runGame(progressionGame, gameRules);
