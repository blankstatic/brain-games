import runGame from '..';

const gameRules = 'What number is missing in the progression?';

const progressionGame = () => {
  const question = '1';
  const correctAnswer = '1';
  return [question, correctAnswer];
};

export default () => runGame(progressionGame, gameRules);
