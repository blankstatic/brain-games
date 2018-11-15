const gameset = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'brain-prime'];
const gamesetMessage = `Сhoose one of the games:\n${gameset.join(', ')} and enjoy :)`;

const showGames = () => {
  console.log(`Welcome to the Brain Games!\n${gamesetMessage}\n`);
};

export default showGames;
