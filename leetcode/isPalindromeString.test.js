import { isPalindromeString } from './isPalindromeString';

describe('isPalindromeString(s)', () => {
  it('removes all non-alphanumeric characters', () => {
    const s = "! @ # & ( ) – [ { } ] : ; ' ` ~ $ ^ + = < > “";
    const result = isPalindromeString(s);
    expect(result).toEqual(true);
  });

  it('converts all uppercase letters into lowercase letters', () => {
    const s = 'ROtaTor';
    const result = isPalindromeString(s);
    expect(result).toEqual(true);
  });

  it('returns true if string is a palindrome', () => {
    const s = 'A man, a plan, a canal: Panama';
    const result = isPalindromeString(s);
    expect(result).toEqual(true);
  });

  it('returns false if string is not a palindrome', () => {
    const s = 'race a car';
    const result = isPalindromeString(s);
    expect(result).toEqual(false);
  });

  it('handles empty string', () => {
    const s = '';
    const result = isPalindromeString(s);
    expect(result).toEqual(true);
  });
});
