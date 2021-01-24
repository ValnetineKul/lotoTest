import { SelectedNumbersPayload } from '../types';

type Answer = {
  firstFieldAnswer: Array<number>,
  secondFieldAnswer: Array<number>,
};

export const lotoAnswerChecker = (answer: Answer, userSelectedCells: SelectedNumbersPayload) => {
  let guessedCells = 0;
  const { firstFieldAnswer, secondFieldAnswer } = answer;
  const { firstField, secondField } = userSelectedCells;
  for (let i = 0; i < firstFieldAnswer.length; i += 1) {
    if (firstFieldAnswer.includes(firstField[i])) {
      guessedCells += 1;
    }
    if (guessedCells === 3) {
      for (let j = 0; j < secondFieldAnswer.length; j += 1) {
        if (secondFieldAnswer.includes(secondField[j])) {
          guessedCells += 1;
        }
      }
    }
  }
  if (guessedCells > 3) return true;
  return false;
};