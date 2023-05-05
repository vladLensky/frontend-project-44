/* eslint-disable comma-dangle */
import { randomNumber } from '../utils.js';
import runGameLogic, { roundsNumber } from '../brain-gameLogic.js';

const description = 'What number is missing in the progression?';
const generateArithmeticProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};
const generateRound = () => {
  const progressionStart = randomNumber(1, 100);
  const progressionStep = randomNumber(1, 10);
  const progressionLength = randomNumber(5, 10);
  const progression = generateArithmeticProgression(
    progressionStart,
    progressionStep,
    progressionLength
  );
  const hiddenElementIndex = randomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
const runProgressionGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, description);
};
export default runProgressionGame;
