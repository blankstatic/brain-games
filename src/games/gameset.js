import runGame from '..';

const gameset = ['brain-even', 'brain-calc', 'brain-gcd'];
const gamesetMessage = `Сhoose one of the games: ${gameset.join(', ')} and enjoy :)`;

export default () => runGame(null, gamesetMessage);
