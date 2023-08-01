import { romanToInt } from './romanToInt';

describe('romanToInt(s)', () => {
  it('returns a roman numeral converted to an integer', () => {
    const s = 'III';
    const result = romanToInt(s);
    expect(result).toEqual(3);
  });

  it('handles I before V', () => {
    const s = 'IV';
    const result = romanToInt(s);
    expect(result).toEqual(4);
  });

  it('handles I before X', () => {
    const s = 'IX';
    const result = romanToInt(s);
    expect(result).toEqual(9);
  });

  it('handles X before L', () => {
    const s = 'XL';
    const result = romanToInt(s);
    expect(result).toEqual(40);
  });

  it('handles X before C', () => {
    const s = 'XC';
    const result = romanToInt(s);
    expect(result).toEqual(90);
  });

  it('handles C before D', () => {
    const s = 'CD';
    const result = romanToInt(s);
    expect(result).toEqual(400);
  });

  it('handles C before M', () => {
    const s = 'CM';
    const result = romanToInt(s);
    expect(result).toEqual(900);
  });

  it('handles compound roman numerals', () => {
    const s = 'LVIII';
    const result = romanToInt(s);
    expect(result).toEqual(58);
  });

  it('handles compound roman numerals with smaller numeral before larget numeral', () => {
    const s = 'MCMXCIV';
    const result = romanToInt(s);
    expect(result).toEqual(1994);
  });
});
