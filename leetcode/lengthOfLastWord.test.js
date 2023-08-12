import { lengthOfLastWord } from './lengthOfLastWord';

// A word is a maximal substring consisting of non-space characters only.

describe('lengthOfLastWord(s)', () => {
  it('returns the length of the last word in the string', () => {
    const s = 'Hello World';
    const result = lengthOfLastWord(s);
    expect(result).toEqual(5);
  });

  it('handles trailing spaces in string s', () => {
    const s = '   fly me   to   the moon  ';
    const result = lengthOfLastWord(s);
    expect(result).toEqual(4);
  });

  it('handles string s being one word', () => {
    const s = 'joyboy';
    const result = lengthOfLastWord(s);
    expect(result).toEqual(6);
  });
});
