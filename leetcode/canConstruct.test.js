import { canConstruct } from './canConstruct';

// Each letter in magazine can only be used once in ransomNote.

describe('canConstruct(ransomNote, magazine)', () => {
  it('returns true if ransomNote can be constructed by using the letters from magazine', () => {
    const ransomNote = 'ab';
    const magazine = 'ba';
    const result = canConstruct(ransomNote, magazine);
    expect(result).toEqual(true);
  });

  it('returns false if ransomNote can not be constructed by using the letters from magazine', () => {
    const ransomNote = 'a';
    const magazine = 'b';
    const result = canConstruct(ransomNote, magazine);
    expect(result).toEqual(false);
  });

  it('handles each letter in magazine can only be used once in ransomNote', () => {
    const ransomNote = 'aa';
    const magazine = 'ab';
    const result = canConstruct(ransomNote, magazine);
    expect(result).toEqual(false);
  });
});
