import { reverseVowels } from './reverseVowels';

describe('reverseVowels(s)', () => {
  it('returns string with only all vowels in the string reversed', () => {
    const s = 'hello';
    const result = reverseVowels(s);
    expect(result).toEqual('holle');
  });

  it('handles strings with only one vowel', () => {
    const s = 'hat';
    const result = reverseVowels(s);
    expect(result).toEqual('hat');
  });

  it('handles strings with odd number of vowels', () => {
    const s = 'hackathon';
    const result = reverseVowels(s);
    expect(result).toEqual('hockathan');
  });

  it('handles uppercase vowels', () => {
    const s = 'hOmestEad';
    const result = reverseVowels(s);
    expect(result).toEqual('hamEsteOd');
  });
});
