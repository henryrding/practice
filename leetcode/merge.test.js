import { merge } from './merge';

describe('merge(nums1, m, nums2, n)', () => {
  it('returns nums1 where nums1 and nums2 are merged into a single array sorted in non-decreasing order', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    const result = merge(nums1, m, nums2, n);
    expect(result).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('return nums1 as having length of m + n', () => {
    const nums1 = [1, 1, 5, 7];
    const m = 4;
    const nums2 = [2, 2, 5, 5];
    const n = 4;
    const result = merge(nums1, m, nums2, n);
    expect(result.length).toEqual(m + n);
  });

  it('handles nums2 as an empty array', () => {
    const nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0;
    const result = merge(nums1, m, nums2, n);
    expect(result).toEqual([1]);
  });

  it('handles nums1 as a functionally empty array', () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;
    const result = merge(nums1, m, nums2, n);
    expect(result).toEqual([1]);
  });
});
