import { guessNumber } from './guessNumber';

// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
// You call a pre-defined API int guess(int num), which returns three possible results:
//     -1: Your guess is higher than the number I picked (i.e. num > pick).
//     1: Your guess is lower than the number I picked (i.e. num < pick).
//     0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

describe('guessNumber(n, pick)', () => {
  it('returns the number picked', () => {
    const n = 10;
    const pick = 6;
    const result = guessNumber(n, pick);
    expect(result).toEqual(6);
  });

  it('handles n === pick', () => {
    const n = 10;
    const pick = 10;
    const result = guessNumber(n, pick);
    expect(result).toEqual(10);
  });

  it('handles pick === 1', () => {
    const n = 10;
    const pick = 1;
    const result = guessNumber(n, pick);
    expect(result).toEqual(1);
  });

  it('handles one option for n and pick', () => {
    const n = 1;
    const pick = 1;
    const result = guessNumber(n, pick);
    expect(result).toEqual(1);
  });
});
