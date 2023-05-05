import readlineSync from 'readline-sync';

export const levelsNumber = 3;

function gameLogic(levels, description) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < levelsNumber; i += 1) {
    const [question, reply] = levels[i];
    console.log(`Question: ${question}`);
    const userReply = readlineSync.question('You answer: ');
    if (userReply === reply) {
      console.log('Correct!');
    } else {
      console.log(
        '${userReply} is wrong answer ;(. Correct answer was ${reply}.'
      );
      console.log("Let's try again, ${name}!");
      return;
    }
  }
  console.log('Congratulations, ${name}!');
}
export default gameLogic;
