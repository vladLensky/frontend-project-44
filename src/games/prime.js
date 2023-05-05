/* eslint-disable operator-linebreak */
import { randomNumber } from '../utils.js';
import runGameLogic, { roundsNumber } from '../brain-gameLogic.js';

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const generateRound = () => {
  const questionNumber = randomNumber(1, 100);
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';
  const question = String(questionNumber);
  return [question, correctAnswer];
};
const runPrimeGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, description);
};
export default runPrimeGame;
