import { buddyStrings } from './buddyStrings';

describe('buddyStrings(s, goal)', () => {
  it('returns true if you can swap two letters in s so the result is equal to goal', () => {
    const s = 'ab';
    const goal = 'ba';
    const result = buddyStrings(s, goal);
    expect(result).toEqual(true);
  });

  it('returns false if you cannot swap two letters in s so the result is equal to goal', () => {
    const s = 'ab';
    const goal = 'aa';
    const result = buddyStrings(s, goal);
    expect(result).toEqual(false);
  });

  it('handles when s and goal are equal but are not buddy strings', () => {
    const s = 'ab';
    const goal = 'ab';
    const result = buddyStrings(s, goal);
    expect(result).toEqual(false);
  });

  it('handles when s and goal are equal and are buddy strings', () => {
    const s = 'abab';
    const goal = 'abab';
    const result = buddyStrings(s, goal);
    expect(result).toEqual(true);
  });

  it('handles swapping first and last indexes', () => {
    const s = 'acccccccccb';
    const goal = 'bccccccccca';
    const result = buddyStrings(s, goal);
    expect(result).toEqual(true);
  });
});
