// eslint-disable-next-line linebreak-style
import { randomNumber } from '../src/utils';
import gameLogic, { levelsNumber } from '../src/brain-gameLogic';

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateLevel = () => {
  const question = randomNumber(1, 100);
  const correctReply = isEven(question) ? 'yes' : 'no';
  return [question, correctReply];
};

const evenGame = () => {
  const levels = [];
  for (let i = 0; i < levelsNumber; i += 1) {
    levels[i] = generateLevel();
  }
  return gameLogic(levels, description);
};
export default evenGame;
