import { gcdOfStrings } from './gcdOfStrings';

describe('gcdOfStrings(str1, str2)', () => {
  it('returns the largest string that divides both str1 and str2', () => {
    const str1 = 'ABCABC';
    const str2 = 'ABC';
    const result = gcdOfStrings(str1, str2);
    expect(result).toEqual('ABC');
  });

  it('handles gcd string not being str1 or str2', () => {
    const str1 = 'ABABAB';
    const str2 = 'ABAB';
    const result = gcdOfStrings(str1, str2);
    expect(result).toEqual('AB');
  });

  it('returns an empty string if there is no gcd string', () => {
    const str1 = 'LEET';
    const str2 = 'CODE';
    const result = gcdOfStrings(str1, str2);
    expect(result).toEqual('');
  });
});
