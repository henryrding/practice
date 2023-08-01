import { findMedianSortedArrays } from './findMedianSortedArrays';

describe('findMedianSortedArrays(nums1, nums2)', () => {
  it('returns the median of the two sorted arrays', () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    const result = findMedianSortedArrays(nums1, nums2);
    expect(result).toEqual(2);
  });

  it('returns non-integer medians', () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const result = findMedianSortedArrays(nums1, nums2);
    expect(result).toEqual(2.5);
  });

  it('handles empty arrays', () => {
    const nums1 = [];
    const nums2 = [3, 4];
    const result = findMedianSortedArrays(nums1, nums2);
    expect(result).toEqual(3.5);
  });

  it('handles negative numbers', () => {
    const nums1 = [-1, -2];
    const nums2 = [3, 4];
    const result = findMedianSortedArrays(nums1, nums2);
    expect(result).toEqual(1);
  });
});
