import readlineSync from 'readline-sync';

const greeting = () => console.log(`Hello, ${readlineSync.question('May I have your name? ')}!`);
    
export default greeting;