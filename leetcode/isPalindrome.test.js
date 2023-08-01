import { isPalindrome } from './isPalindrome';

describe('isPalindrome(x)', () => {
  it('returns true if integer is a palindrome', () => {
    const x = 121;
    const result = isPalindrome(x);
    expect(result).toEqual(true);
  });

  it('returns false if integer is not a palindrome', () => {
    const x = 10;
    const result = isPalindrome(x);
    expect(result).toEqual(false);
  });

  it('handles negative integers', () => {
    const x = -121;
    const result = isPalindrome(x);
    expect(result).toEqual(false);
  });
});
