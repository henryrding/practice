import { reverseWords } from './reverseWords';

describe('reverseWords(s)', () => {
  it('returns a string of the words in reverse order', () => {
    const s = 'hello world';
    const result = reverseWords(s);
    expect(result).toEqual('world hello');
  });

  it('handles spaces at start of string', () => {
    const s = '  hello world';
    const result = reverseWords(s);
    expect(result).toEqual('world hello');
  });

  it('handles spaces at end of string', () => {
    const s = '  hello world  ';
    const result = reverseWords(s);
    expect(result).toEqual('world hello');
  });

  it('removes extra spaces in between words', () => {
    const s = '  hello   world  ';
    const result = reverseWords(s);
    expect(result).toEqual('world hello');
  });
});
