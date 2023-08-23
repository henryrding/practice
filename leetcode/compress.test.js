import { compress } from './compress';

// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
//     If the group's length is 1, append the character to s.
//     Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.

describe('compress(chars)', () => {
  it('returns the compressed string', () => {
    const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
    const result = compress(chars);
    expect(result).toEqual(6);
  });

  it('modifies the input array, first n chars are compressed where n is new length', () => {
    const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
    const result = compress(chars);
    expect(chars.slice(0, result)).toEqual(['a', '2', 'b', '2', 'c', '3']);
  });

  it('handles array that are already compressed', () => {
    const chars = ['a', 'b', 'c'];
    const result = compress(chars);
    expect(result).toEqual(3);
    expect(chars.slice(0, result)).toEqual(['a', 'b', 'c']);
  });

  it('stores lengths >= 10 into multiple characters when modifying input array', () => {
    const chars = [
      'a',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
    ];
    const result = compress(chars);
    expect(chars.slice(0, result)).toEqual(['a', 'b', '1', '2']);
  });

  it('handles groups of the same character', () => {
    const chars = ['a', 'a', 'b', 'b', 'a', 'a', 'a'];
    const result = compress(chars);
    expect(result).toEqual(6);
    expect(chars.slice(0, result)).toEqual(['a', '2', 'b', '2', 'a', '3']);
  });

  it('handles uppercase letters', () => {
    const chars = ['a', 'A', 'B', 'b', 'c', 'c', 'C'];
    const result = compress(chars);
    expect(result).toEqual(7);
    expect(chars.slice(0, result)).toEqual(['a', 'A', 'B', 'b', 'c', '2', 'C']);
  });

  it('handles digits', () => {
    const chars = ['1', '1', '1', '6', '8', '0', '0'];
    const result = compress(chars);
    expect(result).toEqual(6);
    expect(chars.slice(0, result)).toEqual(['1', '3', '6', '8', '0', '2']);
  });
});
