import { intToRoman } from './intToRoman';

// Given an integer(1 <= num <= 3999), convert it to a roman numeral

describe('intToRoman(num)', () => {
  it('converts num < 4', () => {
    const num = 2;
    const result = intToRoman(num);
    expect(result).toEqual('II');
  });

  it('converts num = 4', () => {
    const num = 4;
    const result = intToRoman(num);
    expect(result).toEqual('IV');
  });

  it('converts 4 > num > 9', () => {
    const num = 7;
    const result = intToRoman(num);
    expect(result).toEqual('VII');
  });

  it('converts double digit num', () => {
    const num = 19;
    const result = intToRoman(num);
    expect(result).toEqual('XIX');
  });

  it('converts triple digit num', () => {
    const num = 36;
    const result = intToRoman(num);
    expect(result).toEqual('XXXVI');
  });

  it('converts quadruple digit num', () => {
    const num = 3999;
    const result = intToRoman(num);
    expect(result).toEqual('MMMCMXCIX');
  });
});
