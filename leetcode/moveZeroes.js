export const moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      if (index !== i) nums[i] = 0;
      index++;
    }
  }
  return nums;
};
