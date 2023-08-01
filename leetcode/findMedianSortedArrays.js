export const findMedianSortedArrays = function (nums1, nums2) {
  const nums = nums1.concat(nums2).sort((a, b) => a - b);
  if (nums.length % 2 === 1) {
    return nums[Math.floor(nums.length / 2)];
  } else {
    return (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
  }
};
