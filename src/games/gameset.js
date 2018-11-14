import runGame from '..';

const gameset = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression'];
const gamesetMessage = `Сhoose one of the games:\n${gameset.join(', ')} and enjoy :)`;

export default () => runGame(null, gamesetMessage);
